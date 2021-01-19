let valor;

function botao(num) {
    valor = document.querySelector('#result').value += num
}

function resetar() {
    document.querySelector('#result').value = ''
}

function calcula() {
    let result = eval(valor)
    document.querySelector('#result').value = result.toLocaleString('pt-br')
}
