const cliente = {
    nome: "André",
    idade: 32,
    cpf: "12345678900",
    email: "seuemail@gmail.com",
    fones: ["5521998442880", "5521998442444"],
    dependentes: [
    {
        nome: 'Sara',
        parentesco: "Filha",
        dataNasc: "20/12/2010" 
    },
    {
        nome: "Liz Mota",
        parentesco: "Filha",
        dataNasc: "04/10/2022",
    }
  ],
  saldo:100,

  depositar:function(valor)
  {
      this.saldo += valor
  }
}

//for in que é para objeto

let relatorio ="";

for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue
    } else {
        relatorio += `
        ${info} => ${cliente[info]}
        `
    }
}

console.log(relatorio)