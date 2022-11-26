console.log(`
###### MENU ######
1 > Segunda
2 > Terça
3 > Quarta
4 > Quinta
5 > Sexta
6 > Sabado
7 > Domingo
0 > Sair
`)

let menu = prompt('Escolha um dia da semana');

switch (parseInt(menu)) {
    case 1:
        cadastraSegunda();
        break;
    case 2:
        cadastraDia();
        break;
    case 3:
        cadastraDia();
        break;
    case 4:
        cadastraDia();
        break;
    case 5:
        cadastraDia();
        break;
    case 6:
        cadastraDia();
        break;
    case 7:
        cadastraDia();
        break;
    case 8:
        console.log('Obrigado por usar essa aplicação');
    default:
        console.log('Opção inválidada');
        break;
}

function cadastraSegunda() {
    console.log("Você escolheu Segunda");
}
function cadastraTerça() {
    console.log("Você escolheu Terça");
}
function cadastraQuarta() {
    console.log("Você escolheu Quarta");
}
function cadastraQuinta() {
    console.log("Você escolheu Quinta");
}
function cadastraSexta() {
    console.log("Você escolheu Sexta");
}
function cadastraSabado() {
    console.log("Você escolheu Sabádo");
}
function cadastraDomingo() {
    console.log("Você escolheu Domingo");
}
