"use strict";
const fileInput = document.querySelector('#input-image');
const tituloInput = document.querySelector('#input-titulo');
const descricaoInput = document.querySelector('#input-descricao');
const btnCriar = document.querySelector('#btn-criar');
const cardContainer = document.querySelector('.card-storage');
btnCriar?.addEventListener('click', () => {
    const titulo = tituloInput?.value;
    const descricao = descricaoInput?.value;
    const arquivoImagem = fileInput?.files?.[0];
    if (!titulo || !descricao || !arquivoImagem) {
        alert("Por favor, preencha todos os campos e selecione uma imagem");
        return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
        const imagemDataUrl = event.target?.result;
        criarCard(titulo, descricao, imagemDataUrl);
        limparFormulario();
    };
    reader.readAsDataURL(arquivoImagem);
});
function criarCard(titulo, descricao, imagemSrc) {
    // 1. Criar os elementos HTML que formarão o card
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card'; // Adiciona a classe CSS para estilização
    const imagem = document.createElement('img');
    imagem.src = imagemSrc;
    const cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    const cardText = document.createElement('div');
    cardText.className = 'card-text';
    const tituloH3 = document.createElement('h3');
    tituloH3.textContent = titulo;
    const descricaoP = document.createElement('p');
    descricaoP.textContent = descricao;
    cardImage.appendChild(imagem);
    cardText.appendChild(tituloH3);
    cardText.appendChild(descricaoP);
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardText);
    cardContainer.appendChild(cardDiv);
}
function limparFormulario() {
    tituloInput.value = '';
    descricaoInput.value = '';
    fileInput.value = '';
}
