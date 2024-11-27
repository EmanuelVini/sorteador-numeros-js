function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let inicio = parseInt(document.getElementById('de').value);
    let fim = parseInt(document.getElementById('ate').value);

    //alert(`Quantidade ${quantidade}`);
    //alert(`Do número ${inicio}`);
    //alert(`Até : ${fim}`);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(inicio, fim);
        sorteados.push(numero);

    }

    alert(sorteados);
    //let numero = obterNumeroAleatorio(inicio, fim);
    //alert(numero);
}

function obterNumeroAleatorio(min , max) {
    return Math.floor(Math.random() *(max - min + 1)) + min;
}