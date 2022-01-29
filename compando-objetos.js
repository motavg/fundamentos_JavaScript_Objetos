const cliente = {
    nome:"André",
    idade: 32,
    cpf: "12345678900",
    email:"seuemail@gmail.com",
    fones: ["5521998442880", "5521998442444"]
}


cliente.dependentes = {
    nome: 'Sara',
    parentesco: "Filha",
    dataNasc: "20/12/2010"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Mota"

console.log(cliente)