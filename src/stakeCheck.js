const totalCash = require('./constants')
let randomBet = 0;
let betCount =0;
class StakeCheck{
    constructor(){}

    bet(){
        randomBet = Math.floor(Math.random() * 10 ) % 2;
        betCount++;
        console.log("Bet Count: "+betCount);
        return betCount;
    }
}

module.exports = {StakeCheck}