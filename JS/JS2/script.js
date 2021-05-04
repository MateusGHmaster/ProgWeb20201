    vitoriaJogador = 0;
    vitoriaComputador = 0;
    vetor = [];
    vetor[1] = "Papel";
    vetor[2] = "Pedra";
    vetor[3] =  "Tesoura";

    while(vitoriaComputador == 0){
        jogada = parseInt(prompt(" Escolha sua jogada:\n 1 - Papel \n 2 - Pedra \n3 - Tesoura\n"));
        computadorJogada = Math.floor(1 +Math.random()*3);
        if(vetor[jogada] == vetor[computadorJogada]){
            console.log("O Computador jogou "+ vetor[computadorJogada] + " Voce empatou!");
        }
        if(vetor[jogada] == "Papel"){
            if(vetor[computadorJogada] == "Pedra"){
                console.log("O Computador jogou "+ vetor[computadorJogada] + " Voce ganhou!");
                vitoriaJogador++;
            }
            if(vetor[computadorJogada] == "Tesoura"){
                console.log("O Computador jogou "+ vetor[computadorJogada]+ " Voce perdeu!  A sua pontuação foi de "+ vitoriaJogador);
                vitoriaComputador++;
            }
        }
        if( vetor[jogada] == "Pedra"){
            if(vetor[computadorJogada] == "Tesoura"){
                console.log("O Computador jogou "+ vetor[computadorJogada] + " Voce ganhou!");
                vitoriaJogador++;
            }
            if(vetor[computadorJogada] == "Papel"){
                console.log("O Computador jogou "+ vetor[computadorJogada]+ " Voce perdeu!  A sua pontuação foi de "+ vitoriaJogador);
                vitoriaComputador++;
            }
        }
        if( vetor[jogada] == "Tesoura"){
            if(vetor[computadorJogada] == "Papel"){
                console.log("O Computador jogou "+ vetor[computadorJogada] + " Voce ganhou!");
                vitoriaJogador++;
            }
            if(vetor[computadorJogada] == "Pedra"){
                console.log("O Computador jogou "+ vetor[computadorJogada]+ " Voce perdeu!  A sua pontuação foi de "+ vitoriaJogador);
                vitoriaComputador++;
            }
        }
    }
    

