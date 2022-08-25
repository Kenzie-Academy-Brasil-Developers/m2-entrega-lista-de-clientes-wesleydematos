import { Api } from "./api.js";

class ListarCards {

    static listandoCard(array){
        array.forEach(element => {
            const ulContainer = document.querySelector('.container')

            let li = document.createElement('li')
            let h2Nome = document.createElement('h2')
            let divDadosPessoais = document.createElement('div')
            let h3DadosPessoais = document.createElement('h3')
            let email = document.createElement('p')
            let idade = document.createElement('p')
            let cpf = document.createElement('p')
            let sexo = document.createElement('p')
            let divEndereco = document.createElement('div')
            let h3Endereco = document.createElement('h3')
            let cep = document.createElement('p')
            let estado = document.createElement('p')
            let cidade = document.createElement('p')
            let bairro = document.createElement('p')
            let rua = document.createElement('p')
            let numero = document.createElement('p')

            li.classList.add('card')
            li.id = element.id
            h2Nome.innerText = element.nome 
            h3DadosPessoais.innerText = "Dados Pessoais"
            email.innerText = `email: ${element.email}`
            idade.innerText = `idade: ${element.idade}`
            cpf.innerText = `cpf: ${element.cpf}`
            sexo.innerText = `sexo: ${element.sexo}`
            h3Endereco.innerText = "Endereço"
            cep.innerText = `cep: ${element.endereco.cep}`
            estado.innerText = `estado: ${element.endereco.estado}`
            cidade.innerText = `cidade: ${element.endereco.cidade}`
            bairro.innerText = `bairro: ${element.endereco.bairro}`
            rua.innerText = `rua: ${element.endereco.rua}`
            numero.innerText = `numero: ${element.endereco.numero}`

            divDadosPessoais.append(h3DadosPessoais, email, idade, cpf, sexo)
            divEndereco.append(h3Endereco, cep, estado, cidade, bairro, rua, numero)
            li.append(h2Nome, divDadosPessoais, divEndereco)

            ulContainer.appendChild(li)
        });

    }
}

let data = await Api.listarClientes()

ListarCards.listandoCard(data)