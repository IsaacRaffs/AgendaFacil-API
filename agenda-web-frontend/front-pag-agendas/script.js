const API_URL = 'https://agendafacil-api.onrender.com/agenda/'

function main(){
    console.log('main funcionando...')
        
    carregar_agendas()
}

async function apagarAgendamento(id) {
    const config = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }


    await fetch(`${API_URL}${id}`, config).then(response => {
        if (response.status >= 200 && response.status < 300) {
            alert('Excluído!')
            window.location.href = 'index.html'
        }
        else {
            alert('Falha ao tentar excluir.')
        }
    })
        .catch(error => console.log)
}

async function carregar_agendas(){
    const response = await fetch(API_URL)
    const agendamento = await response.json()

    console.log(agendamento)
    for(agenda of agendamento){
        adicionar_agendamento_lista(agenda)
    }
}

function adicionar_agendamento_lista(agenda){
    const lst_agendas = document.getElementById('tabela')
    const teste = document.createElement('tr')
    const btndelete = document.createElement('td')
    const btnmodificar = document.createElement('td')


    const item1 = document.createElement('td')
    const item2 = document.createElement('td')
    const item3 = document.createElement('td')
    const item4 = document.createElement('td')

    item1.textContent = agenda.nome
    item2.textContent = agenda.email
    item3.textContent = agenda.data
    item4.textContent = agenda.n_cll

    btndelete.innerHTML = `<button class="btn btn-danger" onclick="apagarAgendamento(${agenda.id})"><i class="fa-solid fa-trash"></i></button>`
    btnmodificar.innerHTML = `<button class="btn btn-warning" onclick="iniciarModificarExercicio(${agenda.id})"><i class="fa-solid fa-pen-to-square"></i></button>`

    teste.appendChild(item1)
    teste.appendChild(item2)
    teste.appendChild(item3)
    teste.appendChild(item4)
    teste.appendChild(btnmodificar)
    teste.appendChild(btndelete)

    lst_agendas.appendChild(teste)
}

main()


