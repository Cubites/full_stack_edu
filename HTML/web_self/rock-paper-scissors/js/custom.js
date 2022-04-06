'use strict';
const button = document.querySelectorAll('div.buttons button');
const img = document.querySelectorAll('div.buttons img');
const result = document.querySelectorAll('div.main img');
const resultT = document.getElementById('result');
let hands = ["rock", "paper", "scissors"];
const totalResult = document.querySelectorAll('.totalResult tr td');


img.forEach((button) => {
    button.addEventListener('touchstart', () => {
        button.classList += " click";
    })
    button.addEventListener('touchend', () => {
        button.classList.remove("click");
        let user = button.alt;
        let com = hands[Math.floor(Math.random() * 3)];
        result[0].src = `images/${user}.png`;
        result[0].alt = user;
        
        result[1].src = `images/${com}.png`;
        result[1].alt = com;

        result[0].animate([
            {left: '-160px'},
            {left: '0'}
        ],{
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out'
        })

        result[1].animate([
            {right: '-160px'},
            {right: '0'}
        ],{
            duration: 1000,
            fill: 'forwards',
            easing: 'ease-in-out'
        })
        resultText(user, com);
    })
})

document.getElementById("reset").addEventListener('touchend', () => {
    for(let i of totalResult){
        i.innerHTML = '0';
    }
});

function resultText(user, com){
    let userIndex = hands.indexOf(user);
    let comIndex = hands.indexOf(com);
    let vsCal = userIndex - comIndex;
    if(vsCal == -2 || vsCal == 1){
        resultT.innerHTML = "유저 승!";
        resultT.style.background = "skyblue";
        totalResult[0].innerHTML = Number(totalResult[0].innerHTML) + 1;
    }else if(vsCal == -1 || vsCal == 2){
        resultT.innerHTML = "유저 패...";
        resultT.style.background = "firebrick";
        totalResult[1].innerHTML = Number(totalResult[1].innerHTML) + 1;
    }else{
        resultT.innerHTML = "무승부";
        resultT.style.background = "yellowgreen";
    }
}