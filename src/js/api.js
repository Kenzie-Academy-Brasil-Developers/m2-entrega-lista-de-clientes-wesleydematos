class Api {
  
    static async listarClientes(){
        const listaDeClientes = await fetch("https://atividade-api-clientes.herokuapp.com/clientes")
        .then((response) => response.json())
        .then((response) => {return response})
        .catch((err) => console.log('This is the error' + err))

        return listaDeClientes
    }

    static async cadastrarCliente(body){
        const cliente = await fetch("https://atividade-api-clientes.herokuapp.com/clientes", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: body
          })
          .then(res => res.json())
          .catch(err => console.log(err))
      
          return cliente
    }

    static async editarCliente(id, body){
        const clienteEditado = await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: body
        })
        .then(res => res.json())
        .then(res=>{
            console.log(res)
            alert('Usuário editado!')
            window.location.assign('../../index.html')
        })
        .catch(err => console.log(err))
    
        return clienteEditado
        
    }

    static async deletarCliente(id){
        const clienteDeletar = await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .catch(err => err)
    
        return clienteDeletar
    }

}

export {Api}

