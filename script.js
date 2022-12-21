'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const curr0El = document.getElementById('current--0');
const curr1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let player, currentScore, playing;

const init = function(){
    player = 0; 
    currentScore = 0;
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    curr0El.textContent = 0;
    curr1El.textContent = 0;
    diceEl.classList.add('hidden');
    document.querySelector('.player--1').classList
    .remove('player--active', 'player--winner');
    document.querySelector('.player--0').classList
    .add('player--active');
    document.querySelector('.player--0').classList
    .remove('player--winner');
}

init();

btnNew.addEventListener('click', init);

//Rolling Dice Functionality
btnRoll.addEventListener('click', () => {
    if(playing){
    //1. Generate a random dice roll
        const dice = randomNumberInInterval(1, 6);

        //2.Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if(dice !== 1){
            currentScore+= dice;
            if(player === 1)
                curr1El.textContent = currentScore;
            else
                curr0El.textContent = currentScore
        }else{
            //Change it
            currentScore = 0;
            if(player === 1) {
                
                resetPlayer(player);
                
                player = 0;
            }
            else {
                resetPlayer(player);
                player = 1;
            }
        }
    }
});

btnHold.addEventListener('click', ()=>{
    if(player === 1) {
        score1El.textContent = Number(score1El.textContent) + currentScore;
        if(Number(score1El.textContent) >= 100){
            diceEl.classList.add('hidden');
            document.querySelector('.player--1').classList.add('player--winner');
            playing = false;
        }
        
        resetPlayer(player);

        player = 0;

    }
    else {
        score0El.textContent = Number(score0El.textContent) + currentScore;
       
        if(Number(score0El.textContent) >= 100){
            diceEl.classList.add('hidden');
            document.querySelector('.player--0').classList.add('player--winner');
            playing = false;
        }

        resetPlayer(player);

        player = 1;
    }

    currentScore = 0;

});


function randomNumberInInterval(min, max){
    return Math.floor(Math.random() * (max-min+1) + min);
}

function resetPlayer(player){
    document.querySelector(`.player--${player}`).classList
                       .remove('player--active');
            
    document.querySelector(`#current--${player}`).textContent = 0;

    document.querySelector(`.player--${Number(!player)}`).classList.
                add('player--active');
    
}

btnNew.addEventListener('click', init);