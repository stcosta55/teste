//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".

let idade = 0;
if (idade >= 18){
    console.log("A pessoa é maior de idade");
} else {
    console.log("A pessoa é menor de idade");
}

let n = 0;
for (i = 2; i <= 150; i ++) {
    if (i % 3 == 0){
        n++;
    }
}
console.log(n); 

// 1. Faça um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 1000 é: X.
​
let sum = 0;
for (let i = 1; i<= 1000; i++){
    sum = sum + i;
}
console.log(sum);

//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

let player1 = "papel";
let player2 = "tesoura";
if
