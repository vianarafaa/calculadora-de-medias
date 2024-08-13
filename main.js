const form = document.getElementById('form-atividade')
const imgAprovado = "<img src='images/aprovado.png' alt='Emoji celebrando'/>"
const imgReprovado = "<img src='images/reprovado.png' alt='Emoji decepcionado'/>"
const inputNomeAtividade = document.getElementById('nome-atividade')
const inputNotaAtividade = document.getElementById('nota-atividade')
const valorMediaFinal = document.getElementById('media-final-valor')
const resultadoFinal = document.getElementById('media-final-resultado')

const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

const notaMinima = parseFloat(prompt('Digite a nota mínima'))

let linhas = ''

form.addEventListener('submit', (e) => {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
    atualizaMediaFinal()

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
})

function adicionaLinha() {
    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))

        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`

        linhas += linha
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')

    corpoTabela.innerHTML = linhas
}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    valorMediaFinal.innerHTML = mediaFinal.toFixed(2)
    resultadoFinal.innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}
