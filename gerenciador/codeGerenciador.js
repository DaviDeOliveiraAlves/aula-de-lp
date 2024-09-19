const { select } = require("@inquirer/prompts");

const start = async () => {
  while (true) {
    const option = await select({
      message: "Menu > ",
      choices: [
        {
          name: "cadastrar meta",
          value: "register",
        },
        {
          name: "listar meta(s)",
          value: "list",
        },
        {
          name: "sair",
          value: "out",
        },
      ],
    });

    switch (option) {
      case "register":
        console.log("vamos cadastrar uma meta!");
        break;
      case "list":
        console.log("vamos listar sua(s) meta(s)!");
        break;
      case "out":
        console.log("até a próxima!");
        return;
    }
  }
};

start();
