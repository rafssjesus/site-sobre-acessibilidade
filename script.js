document.getElementById('aumentar-fonte').addEventListener('click', function() {
    document.body.style.fontSize = 'larger';
});

document.getElementById('diminuir-fonte').addEventListener('click', function() {
    document.body.style.fontSize = 'smaller';
});

document.getElementById('botao-acessibilidade').addEventListener('click', function() {
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
    opcoesAcessibilidade.classList.toggle('d-none'); // Alterna a visibilidade das opções
});
