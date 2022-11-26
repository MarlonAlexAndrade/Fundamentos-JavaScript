//Arrays 
const dias = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
];
//Fazer // index = 0; enquanto index < dias.tamanho; +1 no array
/* for(let index = 0; index < dias.length; index++){
    //imprima no log // os dias na posição 0
    console.log(dias[index])
} */

//joga posiçao do array dias para o 'key'(pode ser qualquer nome)
/* for(const key in dias){
    console.log(dias[key])
} */

/* dias.forEach(function(dia, index){
    console.log(`O dia ${dia} tem a posição ${index}`);
}) */

/* let pos = 0;
 while (pos < dias.length) {
    console.log(dias[pos]);
    pos++;
}  */

/* do {
    console.log(dias[pos])
    pos++;
} while (pos < dias.length); */


/* do {
    console.log(voltaAtual);
    voltaAtual++;
} while (voltaAtual <= quantVoltas);
 */

/* let data = new Date()
// Alterar o .toJSON muda formatos de puxar as horas
// console.log(data.toJSON());

let valor = document.querySelector('#valor');

// this pega dados do elemento mestre no caso 'valor' 
valor.addEventListener('click', function(){
    console.log(this.getInnerHTML())
}) */


/* let dia ='';
for (let index = 0; index < dias.length; index++) {
    if(index === 3){
        //continue;
        break;
    }
    dia += dias[index]+'\n';
}

console.log(dia); */


//Metodo java descobrir se é numero ou uma string
// let numero = 10;
// console.log(typeof(numero));

//Segundo modelo isNaN
/* function miliseconds(x){
    if(isNaN(x)){
        return 'não é um número'
    }
    return x * 1000;
}

console.log(miliseconds('1000')); */

/* let meyArray = [
    "valor 1",
    "valor 2",
    "valor 3"
]

let meyObjeto = [
    {
        nome : "valor 1"
    },

    {
        nome : "valor 2"
    },

    {
        nome : "valor 3"
    }
]
console.log(meyObjeto[2].nome); */

// console.log(eval("2 + 2"));

let carro = new Object();
carro.modelo = "Uno";
carro.ano = 2010;
carro.cor = "Vermelho";

console.log(Object.values(carro));