// Function Declaration//Parametros
function nomeFuncao(param1, param2){
    return param1 + param2;
}

console.log(`Soma: ${nomeFuncao(10, 15)}`);

//Function Expression
const expressao = function(){
    console.log("Entrou na expressão");
}

//expressao();

//Arrow function
const flecha = () => {
    console.log('Entrou na arrow')
}

//flecha();

//Funcão Generetion
function* nomeGerador(){

}

//Function construction
const construcao = new Function('param1', 'param2', 'return param1 + param2');

console.log(construcao(10, 15))

function testObj(objeto){
    console.log(objeto.nome)
}

obj = {
    nome: "Marlon",
    sobrenome: "Andrade",
    cpf: "00000000000",
}

testObj(obj)