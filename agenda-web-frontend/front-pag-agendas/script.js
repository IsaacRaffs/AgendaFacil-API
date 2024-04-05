const API_URL = 'https://agendafacil-api.onrender.com/agenda/'

const cx_nome = document.getElementById('cx-nome')
const cx_email = document.getElementById('cx-email')
const cx_data = document.getElementById('cx-data')
const cx_n_cll = document.getElementById('cx-n_cll')

const btn_cadastro = document.getElementById('btncadastro')



function main(){
    console.log('main funcionando...')
        
    carregar_agendas()
}
async function iniciarModificarAgenda(id) {
    let response = await fetch(`${API_URL}${id}`)
    console.log(response.status)
    if (response.status === 200) {
        const agenda = await response.json()
        
        console.log(agenda.nome, agenda.email, agenda.data, agenda.n_cll)
        
        const nome = agenda.nome 
        const email = agenda.email
        const n_cll = agenda.n_cll
        const data  = agenda.data

        console.log(nome, email, data, n_cll)

        cx_nome.value = nome
        cx_email.value = email
        cx_data.value = data
        cx_n_cll.value = n_cll

        console.log(cx_nome.value, cx_email.value, cx_data.value, cx_n_cll.value)

        btn_cadastro.innerText = 'Atualizar'
        btn_cadastro.value = 'Atualizar'

        btn_cadastro.setAttribute('onclick', `modificarAgenda(${id})`)

    }
    else {
        alert(`Erro ${response.status}`)
    }
}

async function modificarAgenda(id) {
    const nome = cx_nome.value
    const email = cx_email.value
    const data = cx_data.value
    const n_cll = cx_n_cll.value


    const dados = { nome, email, data, n_cll }
    console.log(dados)

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados),
    }

    console.log(response.status)
    await fetch(`${API_URL}${id}`, options).then(response => {
        if (response.status >= 200 && response.status < 300){
            window.location.href = 'index.html'
        }
        else{
            console.log(response.status)
        }
    })
        .catch(error => console.log)
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
    btnmodificar.innerHTML = `<button class="btn btn-warning" onclick="iniciarModificarAgenda(${agenda.id})"><i class="fa-solid fa-pen-to-square"></i></button>`

    btnmodificar.onclick = function(){
        var display = document.getElementById('formulario').style.display;
            if(display == "none")
                document.getElementById('formulario').style.display = 'block';
            else
                document.getElementById('formulario').style.display = 'none';}

    teste.appendChild(item1)
    teste.appendChild(item2)
    teste.appendChild(item3)
    teste.appendChild(item4)
    teste.appendChild(btnmodificar)
    teste.appendChild(btndelete)

    lst_agendas.appendChild(teste)
}

main()


