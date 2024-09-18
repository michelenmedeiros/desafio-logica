// Array de heróis e XP
let herois = ["Batman", "Superman", "Mulher Maravilha"];
let xpHerois = [12000, 3500, 7000];
const heroiMensagem = "O Herói de nome ";
const nivelHeroiMensagem = " está no nível ";

// Laço de repetição para processar cada herói
for (let i = 0; i < herois.length; i++) {
    let nomeHeroi = herois[i];
    let xp = xpHerois[i];
    let classificacao = " ";

    //Estrutura de descisão
    if(xp < 1000) {
        classificacao = "Ferro";
    }
    else if (xp >= 1001 && xp <= 2000) {
        classificacao = "Bronze";
    }
    else if (xp >= 2001 && xp <= 3000) {
        classificacao = "Prata";
    }
    else if (xp >= 3001 && xp <= 4000) {
        classificacao = "Ouro";
    }
    else if (xp >= 4001 && xp <= 5000) {
        classificacao = "Platina";
    }
    else if (xp >= 5001 && xp <= 6000) {
        classificacao = "Diamante";
    }
    else if (xp >= 6001 && xp <= 8000) {
        classificacao = "Ascendente";
    }
    else if (xp >= 8001 && xp <= 10000) {
        classificacao = "Imortal";
    }
    else {(xp >= 10001) 
        classificacao = "Radiante";
    }

//Mensagem fixa
console.log(heroiMensagem + nomeHeroi + nivelHeroiMensagem + classificacao)
}
