//codigo omitido 
const numeroSenha = document.querySelector(".parametro-senha__texto");
let tamanhoSenha = 12;
const campoSenha = document.querySelector("#campo-senha");
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVXYWZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvxywz";
const numeros = "0123456789";
const simbolos = "!@%*?";
const botoes = document.querySelectorAll(".parametro-senha__botao");
const botoes = document.querySelector( '#campo-senha')
const checkbox = document.querySelectorAll(".checkbox");
const forcaSenha = document.querySelector(".forca");



function geraSenha() {
    let alfabeto = '';
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

    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha += alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;

    
    const entropia = tamanhoSenha * Math.log2(alfabeto.length);
    valorEntropia.textContent = "Um computador pode levar até " +
        Math.floor(numeroAleatorio);
    
    
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

function classificaSenha(tamanhoAlfabeto) {
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto)
    console.log(entropia)
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    if (entropia > 57) {
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57 ) {
        forcaSenha.classList.add('media');
    } else if 
        forcaSenha.classList.add('fraca');
    }



for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}


geraSenha();
