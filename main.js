// código omitido
const numeroSenha = document.querySelector(".parametro-senha__texto");
const campoSenha = document.querySelector("#campo-senha");
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVXYWZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvxywz";
const numeros = "0123456789";
const simbolos = "!@%*?";
const botoes = document.querySelectorAll(".parametro-senha__botao");
const checkbox = document.querySelectorAll(".checkbox");
const forcaSenha = document.querySelector(".forca");
const valorEntropia = document.querySelector(".entropia");

let tamanhoSenha = 12;

function geraSenha() {
    let alfabeto = "";
    if (checkbox[0].checked) {
        alfabeto += letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto += letrasMinusculas;
    }
    if (checkbox[2].checked) {
        alfabeto += numeros;
    }
    if (checkbox[3].checked) {
        alfabeto += simbolos;
    }

    let senha = "";
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha += alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;

    // Calcular e mostrar entropia
    const entropia = tamanhoSenha * Math.log2(alfabeto.length);
    valorEntropia.textContent = "Um computador pode levar até " +
        Math.floor(2 ** entropia / (100e6 * 60 * 60 * 24)) + " dias para descobrir essa senha;";
    
    // Classificar força da senha
    classificaSenha(entropia);
}

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function classificaSenha(entropia) {
    forcaSenha.classList.remove("fraca", "media", "forte");
    if (entropia > 57) {
        forcaSenha.classList.add("forte");
    } else if (entropia > 35) {
        forcaSenha.classList.add("media");
    } else {
        forcaSenha.classList.add("fraca");
    }
}

// Associar eventos aos checkboxes
for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}

// Inicializar senha ao carregar a página
geraSenha();
