const cliente = [
    {
        nome: "André",
        cpf: "12345678900",
        dependentes: [{
            nome: 'Sara',
            parentesco: "Filha",
            dataNasc: "20/12/2010"
            },
            {
            nome: "Liz Mota",
            parentesco: "Filha",
            dataNasc: "04/10/2022",
        }],
     },
     {
        nome: "Maria",
        cpf: "12345678900",
        dependentes: [{
            nome: 'Carla',
            parentesco: "Filha",
            dataNasc: "20/12/2010"
            }],
     }
]

const listaDependentes = [...cliente[0].dependentes,...cliente[1].dependentes]

console.log(listaDependentes)
console.table(listaDependentes)
