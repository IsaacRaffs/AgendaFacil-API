const API_URL = 'https://agendafacil-api.onrender.com/agenda/'

function main(){
    console.log('main funcionando...')
    const btn_salvar = document.getElementById('salvar_agenda')
    btn_salvar.onclick = salvar_agendamento
}

async function salvar_agendamento(e){
    e.preventDefault()
    const cx_nome = document.getElementById('cx-nome')
    const cx_email = document.getElementById('cx-email')
    const cx_data = document.getElementById('cx-data')
    const cx_ncll = document.getElementById('cx-ncll')

    const nome = cx_nome.value
    const email = cx_email.value
    const data =  cx_data.value
    const n_cll = cx_ncll.value

    const dados = {nome, email, data, n_cll}
    const init = {
        method: 'post',
        body: JSON.stringify(dados),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    const response = await fetch(API_URL, init)
    if (response.status===201){
        cx_nome.value = ''
        cx_email.value = ''
        cx_data.value = ''
        cx_n_cll.value = ''
        console.log(response.status)
        const agendamento = await response.json()
        adicionar_agendamento_lista(agendamento)
        console.log('agendamento efetuado')
    }else{
        alert("erro ao salvar")
        console.log(response)
    }
}

main()
