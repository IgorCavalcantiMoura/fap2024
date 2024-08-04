 export class Paciente {
   public nome: string;
   public idade: number;
   public historicoConsultas: { data: string; medico: string; descricao: string }[];
  
    constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
      this.historicoConsultas = []; 
    }
  
    adicionarConsulta(data: string, medico: string, descricao: string) {
      const consulta = {
        data: data,
        medico: medico,
        descricao: descricao
      };
      this.historicoConsultas.push(consulta); 
    }
  
    exibirConsultas() {
      if (this.historicoConsultas.length === 0) {
        console.log(`Nenhuma consulta realizada para o paciente ${this.nome}.`);
      } else {
        console.log(`Histórico de consultas do paciente ${this.nome}:`);
        this.historicoConsultas.forEach((consulta, index) => {
          console.log(`Consulta ${index + 1}:`);
          console.log(`Data: ${consulta.data}`);
          console.log(`Médico: ${consulta.medico}`);
          console.log(`Descrição: ${consulta.descricao}`);
          console.log('--------------------------');
        });
      }
    }
  }
  
  
  const paciente = new Paciente("João Silva", 35);
  
  paciente.adicionarConsulta("2024-07-25", "Dr. Almeida", "Consulta de rotina");
  paciente.adicionarConsulta("2024-08-10", "Dra. Ferreira", "Exame de sangue");
  
  paciente.exibirConsultas();