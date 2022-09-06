//# Exercício 2

// Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.



let idade = Number(prompt("Digite a idade:"))
let isEnsinoMedio = confirm("Já concluiu o ensino médio?")
let isCursandoOutraFaculdade = confirm("Está cursando outra faculdade?")

if(idade >= 18){
    console.log("Maior de idade.")
} else {
    console.log("Menor de idade.")	
} 

if (isEnsinoMedio === true){
    console.log("Sim terminou!")
} else {
    console.log("Não terminou!")
}

if (isCursandoOutraFaculdade === false){
    console.log("Não está cursando!")
} else {
    console.log("Está cursando!")
}
