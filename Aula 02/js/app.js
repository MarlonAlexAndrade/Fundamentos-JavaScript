//let v1 = 16;
//let v2 = 15;

//let data = new Date();
//let dia = data.getDay();

//let dia = 0;

//if (dia == 0){
//  console.log("Domingo");
//}else if (dia == 1){
//  console.log("Segunda");
//}else if(dia == 2){
// console.log("Terça");
//}else{
//  console.log("Sábado");
//}
  
let aluno = prompt("Informe o nome nota do aluno:");
let nota1 = parseFloat(prompt("Informe o primeira nota do aluno:"));
let nota2 = parseFloat(prompt("Informe o segunda nota do aluno:"));
let nota3 = parseFloat(prompt("Informe o terceira nota do aluno:"));

//caclcular média do aluno
let  media = (nota1 + nota2 + nota3 ) / 3;


if(media >= 7){
  console.log(`Parabéns ${aluno}, você foi aprovado.Sua nota é ${media}`)
}else if(media >= 6){
  console.log(`Caraca ${aluno}, você esta em recuperação.Sua nota é ${media}`)
}else{
  console.log(`infelizmente ${aluno}, você foi reprovado.Sua nota é ${media}`)
}
