const cliente = {
    nome: "André",
    idade: 32,
    cpf: "12345678900",
    email: "seuemail@gmail.com",
    fones: ["5521998442880", "5521998442444"],
    dependentes: [{
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
    saldo: 100,

    depositar: function (valor) {
        this.saldo += valor
    }
}

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes('dependentes')) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)