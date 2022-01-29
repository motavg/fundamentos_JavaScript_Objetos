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


console.log(cliente)
cliente.depositar(30)
console.log(cliente)