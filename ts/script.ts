const fileInput : HTMLInputElement | null = document.querySelector('#input-image');
const tituloInput : HTMLInputElement | null = document.querySelector('#input-titulo');
const descricaoInput : HTMLTextAreaElement | null = document.querySelector('#input-descricao');
const btnCriar : HTMLButtonElement | null = document.querySelector('#btn-criar');
const cardContainer : HTMLDivElement | null = document.querySelector('.card-storage');

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
        const imagemDataUrl = event.target?.result as string;

        criarCard(titulo, descricao, imagemDataUrl);

        limparFormulario();
    }

    reader.readAsDataURL(arquivoImagem);

})

function criarCard(titulo: string, descricao: string, imagemSrc: string) {
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

    if(cardContainer) cardContainer.appendChild(cardDiv);
}


function limparFormulario() {
    if(tituloInput)tituloInput.value = '';
    if(descricaoInput)descricaoInput.value = '';
    if(fileInput)fileInput.value = '';
}
