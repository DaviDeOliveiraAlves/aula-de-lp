class Paciente {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.historicoConsultas = [];
  }

  adicionarConsulta(data, descricao) {
    const consulta = {
      data: data,
      descricao: descricao,
    };
    this.historicoConsultas.push(consulta);
    console.log(`Consulta adicionada para ${this.nome} em ${data}.`);
  }

  exibirConsultas() {
    if (this.historicoConsultas.length === 0) {
      console.log(`${this.nome} não possui consultas registradas.`);
      return;
    }

    console.log(`Consultas de ${this.nome}:`);
    this.historicoConsultas.forEach((consulta, index) => {
      console.log(`${index + 1}: ${consulta.data} - ${consulta.descricao}`);
    });
  }
}

const paciente1 = new Paciente("Maria", 30);
paciente1.adicionarConsulta("31/10/2024", "Consulta de rotina");
paciente1.adicionarConsulta("25/12/1024", "Exame de sangue");
paciente1.exibirConsultas();
