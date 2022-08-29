import { Api } from "./api.js";

class Cadastrar {

    static cadastraCliente(){
        const btnCadastrar = document.getElementById('btnCadastrar')

        btnCadastrar.addEventListener('click', (event) =>{
        event.preventDefault()

        let nome = document.getElementById('nome')
        let email = document.getElementById('email')
        let idade = document.getElementById('idade')
        let cpf = document.getElementById('cpf')
        let sexo = document.getElementById('sexo')
        let cep = document.getElementById('cep')
        let rua = document.getElementById('rua')
        let numero = document.getElementById('numero')
        let bairro = document.getElementById('bairro')
        let cidade = document.getElementById('cidade')
        let estado = document.getElementById('estado')

        let body = {
            "nome": `${nome.value}`,
            "email": `${email.value}`,
            "sexo": `${sexo.value}`,
            "idade": `${idade.value}`,
            "cpf": `${cpf.value}`,
            "endereco": {
                "estado": `${estado.value}`,
                "cidade": `${cidade.value}`,
                "bairro": `${bairro.value}`,
                "numero": `${numero.value}`,
                "rua": `${rua.value}`,
                "cep": `${cep.value}`
            }
        }
        
        Api.cadastrarCliente(JSON.stringify(body))
        if(cpf.value.length != 11){
            alert('CPF inválido, insira 11 caracteres')
        }else{
            alert('Usuário criado!')
            window.location.assign('../../index.html')
        }

        })
    }
}

Cadastrar.cadastraCliente()
