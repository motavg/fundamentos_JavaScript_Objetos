const cliente = {
    nome:"André",
    idade: 32,
    cpf: "12345678900",
    email:"seuemail@gmail.com",
    fones: ["5521998442880", "5521998442444"],
    dependentes: [{
        nome: 'Sara',
        parentesco: "Filha",
        dataNasc: "20/12/2010",
    }]
}

console.log(cliente)

cliente.dependentes.push({
    nome: "Liz Mota",
    parentesco: "Filha",
    dataNasc:"04/10/2022",
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/10/2022")

console.log(filhaMaisNova[0].nome)
