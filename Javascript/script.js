function trocarImagem(novaImagem, corFundo, novoTexto) {
    const imagemCopo = document.getElementById('imagem-copo');
    const fundoCopo = document.getElementById('fundo-copo'); // Seleciona a div circulo
    const textoAlvo = document.getElementById('texto-alvo');

    imagemCopo.src = novaImagem; // Troca a imagem do copo
    fundoCopo.style.backgroundColor = corFundo; // Altera a cor de fundo da div circulo
    textoAlvo.innerText = novoTexto; // Altera o texto do parágrafo
}