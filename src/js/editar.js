import { Api } from "./api.js";

class Editar {
    static listarSelect(array){
        const selectHtml = document.querySelector('select')

        array.forEach(element => {
            let option = document.createElement('option')
            
            option.value = `${element.nome}`
            option.innerText = `${element.nome}`

            selectHtml.appendChild(option)
        });
    }

    static buscaCliente(array){
        let btnBuscar = document.getElementById('buscar')

        btnBuscar.addEventListener('click', (event) =>{
            event.preventDefault()

            const selectHtml = document.querySelector('select')

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

            array.forEach(element =>{
                if(element.nome == selectHtml.value){
                    nome.value = `${element.nome}`
                    email.value = `${element.email}`
                    idade.value = `${element.idade}`
                    cpf.value = `${element.cpf}`
                    sexo.value = `${element.sexo}`
                    cep.value = `${element.endereco.cep}`
                    rua.value = `${element.endereco.rua}`
                    numero.value = `${element.endereco.numero}`
                    bairro.value = `${element.endereco.bairro}`
                    cidade.value = `${element.endereco.cidade}`
                    estado.value = `${element.endereco.estado}`
                    selectHtml.id = `${element.id}`
                }
            })
        })
    }

    static atualizaDados(){
        let btnBuscar = document.getElementById('atualizar')

        btnBuscar.addEventListener('click', (event)=>{
            event.preventDefault()

        const idCliente = document.querySelector('select').id
        
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

        let body = JSON.stringify({
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
        })

        Api.editarCliente(idCliente, body)
        if(idCliente > 6){
            alert('Usuário editado!')
            window.location.assign('../../index.html')
        }else if(idCliente <= 6){
            alert('Impossível deletar esse usuário!')
        }
        })
    }
}

let data = await Api.listarClientes()
Editar.listarSelect(data)
Editar.buscaCliente(data)
Editar.atualizaDados()
