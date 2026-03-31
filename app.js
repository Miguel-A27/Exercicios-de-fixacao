//Variaveis constantes
const nome = "João";
var idade = 10;
let altura = 1.70;

//com concatenação "+"
console.log("Nome: " + nome + " e tem " + idade + " anos");

//interpolação de tipos
console.log(` Meu nome é ${nome} e tenho ${idade} anos`);

//if/else
if (idade >= 18){
    console.log("Maior de Idade.");
} else {
    console.log("Menor de Idade.");
}

//AND OR NOT
if (idade >= 20){
    console.log("Pode passar");
} else if (idade >=20 || altura >= 1.40){
    console.log("Pode passar pela altura");
}

//switch case
switch (idade) {
    case 18:
        console.log("Você é um adolescente");
        break;
    default:
        console.log("Sua idade é " + idade);
        break;
}


//Exemplo 1
let caboConectado = true;
let carregadorNaTomada = true;
let celular = 20.0;
let carga = 80.0

if(caboConectado && carregadorNaTomada){
    console.log(celular + carga +"%.");
} else {
    console.log("celular está carregado.");
}

// //Ex2
let pao = true
let recheio = false

if(!recheio && pao){
    console.log("Sanduiche está pronto!")
} else {
    console.log("Cadê o recheio?");
}

//Ex3
var identidade = true
let Idade = 18

if(identidade && Idade >= 18){
    console.log("Pode passar.");
} else {
    console.log("Saia.");
}

//Ex4
let documento = true
let habilitacao = true

switch (documento && !habilitacao) {
    case true:
        console.log("Não leva multa");
        break;
    case true && false:
        console.log("Multado");
        break;
    default:
        console.log("Tudo em dia.")
        break;
}