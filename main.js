// código omitido
const numeroSenha = document.querySelector(".parametro-senha__texto");
let tamanhoSenha = 12
const campoSenha = document.querySelector("#campo-senha");
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVXYWZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvxywz";
const numeros = "0123456789";
const simbolos = "!@%*?";
const botoes = document.querySelectorAll(".parametro-senha__botao");
const campoSenha = document.querySelector("#campo-senha");
const checkbox = document.querySelectorAll(".checkbox");
function geraSenha(){
    let alfabeto = "";
if (checkbox[0].checked){
alfabeto = alfabeto + letrasMaiusculas;
}
if (checkbox[1].checked){
    alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
    alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
    alfabeto = alfabeto + simbolos;
    }
    console.log(alfabeto);{
    // código omitido...
    }
console.log(alfabeto);
// restante do código omitido
let senha = "";
for (let i = 0; i < tamanhoSenha;i++){
let numeroAleatorio = Math.random()*alfabeto.length;
numeroAleatorio = Math.floor(numeroAleatorio);
senha = senha + alfabeto[numeroAleatorio];
}
campoSenha.value = senha;
}
    let senha = "";
for (let i = 0; i < tamanhoSenha;i++) {
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio];
    console.log(letrasMaiusculas[numeroAleatorio]);
 }
campoSenha.value = letrasMaiusculas;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
    // tamanhoSenha = tamanhoSenha-1;
    tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
    }
    function aumentaTamanho(){
    if (tamanhoSenha < 20){
    // tamanhoSenha = tamanhoSenha+1;
    tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
    }
    const checkbox = document.querySelectorAll(".checkbox");
    for (i=0; i < checkbox.length;i++){
        checkbox[i].onclick = geraSenha;
    }
    const forcaSenha = document.querySelector(".forca");
    {
    campoSenha.value = senha;
classificaSenha();
}
function classificaSenha(){
    forcaSenha.classList.remove("fraca","media","forte");
    if (tamanhoSenha > 11){
forcaSenha.classList.add("forte")
} else if (tamanhoSenha > 5 && tamanhoSenha < 12) {
    forcaSenha.classList.add("media");
} else if (tamanhoSenha < 6){
    forcaSenha.classList.add("fraca");
    }
}
function classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    if (entropia > 57){
    forcaSenha.classList.add("forte");
    
    } else if (entropia > 35 && entropia < 57 ) {
    
    forcaSenha.classList.add("media");
    forcaSenha.classList.add("fraca")
    
    }
    console.log(entropia);
    }
{
const valorEntropia = document.querySelector(".entropia");
valorEntropia.textContent = entropia;
console.log(entropia);
valorEntropia.textContent = "Um computador pode levar até " +
Math.floor(2**entropia/(100e6*60*60*24)) + "dias para descobrir essa senha;"
}
