const cliente = {
    nome:"André",
    idade: 32,
    cpf: "12345678900",
    email:"seuemail@gmail.com",
}


const chaves = ["nome", "idade", "cpf", "email"]

console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))