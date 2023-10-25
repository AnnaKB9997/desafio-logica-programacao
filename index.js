/* Desafio classificador de nível de herói

O que deve ser utilizado:
- variáveis;
- operadores;
-laços de repetição;
- estrutura de decisões;

Objetivo:

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
depois utilize uma estrutura de decisão para apresentar algumas das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
SE XP for entre 1.000 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se Xp for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.0001 e 8.000 = Platina Diamante
Se XP for entre 8.0001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.0001 = Radiante

Saída
Ao final deve exibir a mensagem:
"O Herói de nome **{nome}** está no nível de **{nível}**

*/

let nomeHeroi = prompt ("Digite o nome do Herói:");
let numeroDeXp = prompt ("Qual a quantidade de experiência do herói?")

    switch(true) {
        case numeroDeXp < 1000:
        alert(`O Herói de nome ${nomeHeroi} está no nível Ferro`);
        break;
    
        case numeroDeXp <= 2000:
        alert(`O Herói de nome ${nomeHeroi} está no nível Bronze`);
        break;
    
        case numeroDeXp > 2001 || numeroDeXp >= 5000:
        alert(`O Herói de nome ${nomeHeroi} está no nível Prata`);
        break;
    
        case numeroDeXp > 6001|| numeroDeXp >= 8000:
        alert(`O Herói de nome ${nomeHeroi} está no nível Ouro`);
        break;
    
        case numeroDeXp > 7001|| numeroDeXp >= 7000:
        alert(`O Herói de nome ${nomeHeroi} está no nível Platina Diamante`);
        break;
    
        case numeroDeXp > 8001|| numeroDeXp >= 9000:
        alert(`O Herói de nome ${nomeHeroi} está no nível Ascendente`);
        break;
    
        case numeroDeXp > 9001|| numeroDeXp >= 10000:
        alert(`O Herói de nome ${nomeHeroi} está no nível Imortal`);
        break;
    
        case numeroDeXp >= 10000:
        alert(`O Herói de nome ${nomeHeroi} está no nível Radiante`);
        break;
}
