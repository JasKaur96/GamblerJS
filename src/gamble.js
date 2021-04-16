const victoryCheck = require('./victoryCheck')
const victory = new victoryCheck.Victory();
let randomBet = 0;
let result =0;
let totalCash = 10;
let totalCashPer = totalCash;

class Gamble{
    constructor(){}

    gamble(){
             
            randomBet = Math.floor(Math.random() * 10 ) % 2;
            victory.victoryCheck(randomBet);    
        
    }
    
}

module.exports = {Gamble}