//Pegar o elemento do HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
//Elemento HTML das imagens
const imagens = document.querySelectorAll('.imagem');
//Elemento HTML do texto
const descricoes = document.querySelectorAll('.descricao');

//Identificar o clique no botão
botoesCarrossel.forEach((botao, i) => {
    botao.addEventListener('click', () => {

        desmarcarBotaoAnterior();

        marcarNovoBotao(botao);

        esconderImagemAnterior();

        exibirNovaImagem(i);

        esconderTextoAnterior();

        exibirNovoTexto(i);
    })
})

function marcarNovoBotao(botao) {
    botao.classList.add('selecionado');
}

function desmarcarBotaoAnterior() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function exibirNovaImagem(i) {
    imagens[i].classList.add('ativa');
}

function esconderImagemAnterior() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function exibirNovoTexto(i) {
    descricoes[i].classList.add('ativo');
}

function esconderTextoAnterior(){
    const textoAtivo = document.querySelector('.ativo');
    textoAtivo.classList.remove('ativo');
}

function selecionarProximoBotao() {
    const botaoSelecionado = document.querySelector('.selecionado');
    const proximoBotao = botaoSelecionado.nextElementSibling || botoesCarrossel[0];
    const proximoIndice = Array.from(botoesCarrossel).indexOf(proximoBotao);

    desmarcarBotaoAnterior();

    marcarNovoBotao(proximoBotao);

    esconderImagemAnterior();

    exibirNovaImagem(proximoIndice);

    esconderTextoAnterior();

    exibirNovoTexto(proximoIndice);
}

setInterval(selecionarProximoBotao, 10000);