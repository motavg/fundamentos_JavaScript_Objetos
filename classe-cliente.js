class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo =saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const vini = new Cliente("Vini", "vini@gmail.com", "1234567989", 2000)
console.log(vini)

vini.depositar(3000)

vini.exibirSaldo()

// O this representa o objeto que executa a função.
// Podemos dizer que a instrução passada para o JavaScript é:
// “execute a função aqui, utilizando este contexto”.