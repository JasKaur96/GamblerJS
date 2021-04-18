const betCheck = require('./victoryCheck');
const victory = new betCheck.Victory();
let randomBet = 0;
let result =0;
let totalCash = 100;
let totalCashPer = totalCash;

class Gamble{
    constructor(){}

    gamble(){
        for(let day = 1; day <= 5; day++){    
            console.log("Day:"+day);      
            victory.victoryCheck();
        }
    }
}

module.exports = {Gamble}