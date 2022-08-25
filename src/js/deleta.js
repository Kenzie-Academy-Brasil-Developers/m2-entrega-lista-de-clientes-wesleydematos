import { Api } from "./api.js";

class Deletar {
    static listarSelect(array){
        const selectHtml = document.querySelector('select')

        array.forEach(element => {
            let option = document.createElement('option')
            
            option.value = `${element.nome}`
            option.innerText = `${element.nome}`
            option.id = `${element.id}`

            selectHtml.appendChild(option)
        });
    }

    static deletandoCliente(array){
        let btnDeletar= document.querySelector('button')
        
        btnDeletar.addEventListener('click', (event)=>{
            event.preventDefault()

            let select = document.querySelector('select')
            let cliente = document.querySelector('select').value

            array.forEach(element => {
                if(cliente == element.nome){
                    select.id = element.id
                }
            })

            console.log(select)
        })
    }
}

let data = await Api.listarClientes()
Deletar.listarSelect(data)

Deletar.deletandoCliente(data)