import fs from "node:fs/promises";
import { select, input, confirm, checkbox } from "@inquirer/prompts";
import chalk from "chalk";

const file = "contacts.json";
let contacts;
let message = "Bem-vindo ao seu Gerenciador de Contatos!";

const fetchContacts = async () => {
  try {
    const data = await fs.readFile(file, "utf-8");
    contacts = JSON.parse(data);
  } catch (error) {
    contacts = [];
  }
};

const saveContacts = async () => {
  await fs.writeFile(file, JSON.stringify(contacts, null, 2));
};

const isValidPhone = (phone, hasDDD) => {
  return hasDDD ? phone.length === 11 : phone.length === 9;
};

const addContact = async () => {
  let name, phone, hasDDD;

  while (true) {
    if (message) {
      console.log(message);
      message = "";
    }

    name = await input({
      message: chalk.yellow("Digite o nome do contato: "),
    });

    if (name.length === 0) {
      message = chalk.red("Nome não pode ser vazio. Tente novamente.");
      continue;
    }

    break;
  }

  while (true) {
    if (message) {
      console.log(message);
      message = "";
    }

    hasDDD = await confirm({
      message: chalk.yellow("Este número possui DDD?"),
      initial: true,
    });

    phone = await input({
      message: chalk.yellow("Digite o telefone do contato: "),
    });

    if (phone.length === 0) {
      message = chalk.red("Telefone não pode ser vazio. Tente novamente.");
      continue;
    }

    if (!isValidPhone(phone, hasDDD)) {
      message = hasDDD
        ? chalk.red(
            "O telefone com DDD deve ter 11 dígitos (incluindo DDD). Tente novamente."
          )
        : chalk.red("O telefone sem DDD deve ter 9 dígitos. Tente novamente.");
      continue;
    }

    break;
  }

  contacts.push({ name, phone });
  message = chalk.green("Contato adicionado com sucesso!");
};

const listContacts = async () => {
  if (contacts.length === 0) {
    console.log(chalk.yellow("Nenhum contato registrado."));
    return;
  }
  contacts.forEach((contact) => {
    console.log(chalk.green(`${contact.name}: ${contact.phone}`));
  });
};

const updateContacts = async () => {
  if (contacts.length === 0) {
    message = chalk.red("Não existem contatos registrados!");
    return;
  }

  const contactChoices = contacts.map((contact) => ({
    name: contact.name,
    value: contact.name,
  }));

  const contactsToUpdate = await checkbox({
    message: chalk.yellow("Selecione o(s) contato(s) que deseja alterar: "),
    choices: contactChoices,
    instructions: false,
  });

  if (contactsToUpdate.length === 0) {
    message = chalk.red("Nenhum contato foi selecionado!");
    return;
  }

  for (const contactName of contactsToUpdate) {
    const contactIndex = contacts.findIndex(
      (contact) => contact.name === contactName
    );

    if (contactIndex === -1) continue;

    let newContactName, newContactPhone, hasDDD;

    while (true) {
      newContactName = await input({
        message: chalk.yellow(
          `Digite o novo nome para o contato ${contactName} (ou pressione Enter para manter): `
        ),
      });

      // Manter o nome antigo se o novo nome for vazio
      if (newContactName.length === 0) {
        newContactName = contacts[contactIndex].name;
      }

      if (newContactName.length === 0) {
        message = chalk.red("O novo nome não pode ser vazio! Tente novamente.");
        continue;
      }
      break;
    }

    while (true) {
      hasDDD = await confirm({
        message: chalk.yellow("Este número possui DDD?"),
        initial: true,
      });

      newContactPhone = await input({
        message: chalk.yellow(
          "Digite o número do contato (ou pressione Enter para manter): "
        ),
      });

      // Manter o telefone antigo se o novo telefone for vazio
      if (newContactPhone.length === 0) {
        newContactPhone = contacts[contactIndex].phone;
      }

      if (newContactPhone.length === 0) {
        message = chalk.red("Número não pode ser vazio! Tente novamente.");
        continue;
      }

      if (!isValidPhone(newContactPhone, hasDDD)) {
        message = hasDDD
          ? chalk.red(
              "O telefone com DDD deve ter 11 dígitos (incluindo DDD). Tente novamente."
            )
          : chalk.red(
              "O telefone sem DDD deve ter 9 dígitos. Tente novamente."
            );
        continue;
      }
      break;
    }

    contacts[contactIndex] = { name: newContactName, phone: newContactPhone };
  }

  message = chalk.green("Contato(s) alterado(s) com sucesso!");
};

const deleteContacts = async () => {
  if (contacts.length == 0) {
    message = chalk.red("Não existem contatos registrados!");
    return;
  }
  const contactChoices = contacts.map((contact) => {
    return { name: contact.name, value: contact.name, checked: false };
  });
  const contactsToDelete = await checkbox({
    message: chalk.yellow("selecione os contatos que deseja deletar:"),
    choices: contactChoices,
    instructions: false,
  });
  if (contactsToDelete.length == 0) {
    message = chalk.red("Nenhum contato foi selecionada!");
    return;
  }

  contactsToDelete.forEach((item) => {
    contacts = contacts.filter((contact) => {
      console.log(`Diferente: ${contact.name != item}`);
      return contact.name != item;
    });
  });

  message = chalk.green("Contato(s) deletado(s) com sucesso!");
};

const showMessage = () => {
  if (message !== "") {
    console.log(chalk.green.italic(message));
    console.log("");
    message = "";
  }
};

const start = async () => {
  await fetchContacts();

  while (true) {
    showMessage();
    await saveContacts();

    const option = await select({
      message: chalk.blue("Menu > "),
      choices: [
        { name: chalk.yellow("Adicionar contato"), value: "register" },
        { name: chalk.yellow("Listar todos os contatos"), value: "list" },
        { name: chalk.yellow("Atualizar os seus contato"), value: "update" },
        { name: chalk.yellow("deletar contatos"), value: "delete" },
        { name: chalk.red("Sair"), value: "out" },
      ],
    });

    switch (option) {
      case "register":
        await addContact();
        await saveContacts(); // Salvar após adicionar
        break;
      case "list":
        await listContacts();
        break;
      case "update":
        await updateContacts();
        await saveContacts(); // Salvar após atualizar
        break;
      case "delete":
        await deleteContacts();
        break;
      case "out":
        console.log("Até a próxima!");
        return;
    }
  }
};

start();
