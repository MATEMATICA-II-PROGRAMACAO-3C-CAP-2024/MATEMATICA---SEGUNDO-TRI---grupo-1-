// código omitido
const campoSenha = document.querySelector("#campo-senha");
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVXYWZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvxywz";
const numeros = "0123456789";
const simbolos = "!@%*?";
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