// Pegar o elemento do HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
// Elemento HTML das imagens
const imagens = document.querySelectorAll('.imagem');
// Elemento HTML do texto
const descricoes = document.querySelectorAll('.descricao');

let indiceAtual = 0;
let intervalId;

function marcarBotao(indice) {
  desmarcarBotaoAnterior();
  botoesCarrossel[indice].classList.add('selecionado');
}

function desmarcarBotaoAnterior() {
  const botaoSelecionado = document.querySelector('.selecionado');
  if (botaoSelecionado) {
    botaoSelecionado.classList.remove('selecionado');
  }
}

function mostrarImagem(indice) {
  desativarImagemAnterior();
  imagens[indice].classList.add('ativa');
}

function desativarImagemAnterior() {
  const imagemAtiva = document.querySelector('.ativa');
  if (imagemAtiva) {
    imagemAtiva.classList.remove('ativa');
  }
}

function mostrarDescricao(indice) {
  desativarDescricaoAnterior();
  descricoes[indice].classList.add('ativa');
}

function desativarDescricaoAnterior() {
  const descricaoAtiva = document.querySelector('.descricao.ativa');
  if (descricaoAtiva) {
    descricaoAtiva.classList.remove('ativa');
  }
}

function iniciarCarrossel() {
  // Selecionar o próximo botão e imagem
  const proximoIndice = (indiceAtual + 1) % botoesCarrossel.length;
  marcarBotao(proximoIndice);
  mostrarImagem(proximoIndice);
  mostrarDescricao(proximoIndice);
  indiceAtual = proximoIndice;
}

// Iniciar o carrossel automaticamente após 10 segundos
intervalId = setInterval(iniciarCarrossel, 10000);

// Interromper o carrossel quando o usuário interagir com os botões
botoesCarrossel.forEach((botao) => {
  botao.addEventListener('click', () => {
    clearInterval(intervalId);
  });
});