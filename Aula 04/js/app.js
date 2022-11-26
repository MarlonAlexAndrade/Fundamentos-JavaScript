// let texto ="Olá programador JavaScript, estamos em 2022 e você está aprendendo como usar rejex na vida de programador";

// let busca = texto.match (/programador/gi);
// console.log(busca);

// console.log(texto.match(/[a-c]/gi));
// console.log(texto.match(/[0-9a-z]/gi));

/* let veiculo = "Megane Grand Tour 2009 R$ 31.500";
console.log(veiculo.match(/R\$ \d+/)); */

// console.log(texto.replace(/programador/i, 'aprendiz'));
//[a-z] Procurar letras de A até Z apenas letras minusculas
//[a-zA-Z] Procurar letras de A até Z letras maiusculas e minusculas
//[0-9] De 0 até 9 procurar todos os numeros
//[a-zA-Z0-9] De a até z minusculo de A até Z maisculo e de 0 até 9 procura todos

//Separando em partes com regex para formatar em cpf
/* let cpf = "05879854102" 
let formato = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, function
(regex, part1, part2, part3, part4){
    return `${part1}.${part2}.${part3}-${part4}`;
})
console.log(formato); */

/* let cnpj = "12345678912345";
let formato = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{3})(\d{2})/, function
(regex, part1, part2, part3, part4, part5){
    return `${part1}.${part2}.${part3}/${part4}-${part5}`;
})

console.log(formato); */


/* let texto = "Richarlison faz golaço e comanda vitória do Brasil sobre a Sérvia na Copa"

// let busca = texto.match(/comanda/gi);
// console.log(busca);

console.log(texto.replace(/comanda/gi, 'torando')); */

/* let telefone = "47996655443";

let formato = telefone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, function
(regex, part1, part2, part3, part4){
    return `(${part1})${part2} ${part3}-${part4}`;
})

console.log(formato); */


let texto ="Olá programador JavaScript, estamos em 2022 e você está aprendendo como usar rejex na vida de programador";

console.log(texto.search(/o*/gi));

// console.log(texto.match(/(a*)(e*)(i*)(o*)(u*)/));
