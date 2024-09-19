const { select, input } = require("@inquirer/prompts");

const goal = {
  value: "tomar 3l de água por dia",
  checked: false,
};

const goals = [goal];

const registerGoal = async () => {
  const goal = await input({
    message: "digite a sua meta: ",
  });

  if (goal.length === 0) {
    console.log("A meta não pode ser vazia!");
    return;
  }

  goals.push({ value: goal, checked: false });
};

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
        await registerGoal();
        console.log(goals);
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
