// Variáveis para armazenar o nome e a quantidade de experiência (XP) do herói
var nomeDoHeroi = "Kingnaldo";
var xpDoHeroi = 8600;

// Estrutura de decisão para classificar o herói com base na quantidade de XP
if (xpDoHeroi < 1000) {
    console.log(nomeDoHeroi + " é um herói de nível Ferro.");
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    console.log(nomeDoHeroi + " é um herói de nível Bronze.");
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    console.log(nomeDoHeroi + " é um herói de nível Prata.");
} else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
    console.log(nomeDoHeroi + " é um herói de nível Ouro.");
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    console.log(nomeDoHeroi + " é um herói de nível Platina.");
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    console.log(nomeDoHeroi + " é um herói de nível Ascendente.");
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    console.log(nomeDoHeroi + " é um herói de nível Imortal.");
} else {
    console.log(nomeDoHeroi + " é um herói de nível Radiante.");
}
