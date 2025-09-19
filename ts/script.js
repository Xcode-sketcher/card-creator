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
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    const imagem = document.createElement('img');
    imagem.src = imagemSrc;
    imagem.alt = titulo;
    const cardImage = document.createElement('div');
    cardImage.className = 'card-image';
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'image';
    const cardText = document.createElement('div');
    cardText.className = 'card-text';
    const tituloH3 = document.createElement('h3');
    tituloH3.textContent = titulo;
    const descricaoP = document.createElement('p');
    descricaoP.textContent = descricao;
    imageWrapper.appendChild(imagem);
    cardImage.appendChild(imageWrapper);
    cardText.appendChild(tituloH3);
    cardText.appendChild(descricaoP);
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardText);
    if (cardContainer)
        cardContainer.appendChild(cardDiv);
}
function limparFormulario() {
    if (tituloInput)
        tituloInput.value = '';
    if (descricaoInput)
        descricaoInput.value = '';
    if (fileInput)
        fileInput.value = '';
}
