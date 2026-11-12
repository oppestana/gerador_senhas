
const campoSenha = document.getElementById('senha');
const campoTamanho = document.getElementById('tamanho');
const Maiuscula = document.getElementById('maiuscula');
const Minuscula = document.getElementById('minuscula');
const Numeros = document.getElementById('numeros');
const Especial = document.getElementById('especial');
const botaoGerar = document.getElementById('gerar');
const botaoLimpar = document.getElementById('limpar');
const mensagem = document.getElementById('mensagem');

function gerarSenha() {

    let caracteres = "";
    const tamanho = parseInt(campoTamanho.value);
    const algumaOpcaoSelecionada = Maiuscula.checked || Minuscula.checked || Numeros.checked || Especial.checked;
    const tamanhoValido = !isNaN(tamanho) && tamanho >= 1 && tamanho <= 24;

    console.log("IF - alguma opção selecionada:", algumaOpcaoSelecionada);
    if (!algumaOpcaoSelecionada) {
        mensagem.textContent = "Por favor, selecione pelo menos uma opção de caractere.";
        return;
    }
    if (!tamanhoValido) {
        mensagem.textContent = "Por favor, insira um tamanho válido (1-24).";
        return;
    }
    if (Maiuscula.checked) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (Minuscula.checked) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    }
    if (Numeros.checked) {
        caracteres += "0123456789";
    }
    if (Especial.checked) {
        caracteres += "!@#$%^&*";
    }

    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        const caractere = caracteres.charAt(indiceAleatorio);
        senha += caractere;
    }

    campoSenha.value = senha;
    mensagem.textContent = "";
}
botaoGerar.addEventListener('click', gerarSenha);
botaoLimpar.addEventListener('click', function () {
    campoSenha.value = "";
    mensagem.textContent = "";
});
