let betCount =0;
// const totalCash = require('./constants')
let totalCash = 100;
class Victory{
    victoryCheck(randomBet){
        betCount++
        switch(randomBet){           
            case 1: 
                totalCash++
                console.log("Bet Won! \nBet Count :"+betCount+"\nTotal Cash :"+totalCash);
                return  totalCash;
            case 0:
                totalCash--;
                console.log("Bet Lost! \nBet Count :"+betCount+"\nTotal Cash :"+totalCash);
                return  totalCash;
        }
    }
}

module.exports = {Victory}