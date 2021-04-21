const prompt = require('prompt-sync')({sigint: true});
const cashStore = require('./cashStore')
const store = new cashStore.CashStore();
const gamble = require('./gamble')
const bet = new gamble.Gamble();
const mapping = require('./mapAmntDay')
const mapAmnt = new mapping.MapAmount();
const luckCheck  = require("./luckCheck");
let check = new luckCheck.LuckCheck();
let totalCash = 60;
let randomBet = 0;
let gameContinue = 1;
let luck=0, badLuck =0;
let monthlyInvest=0, monthlyStake = 0 ;
class VictoryCheck {
    constructor(months) {
        this.months = months;
    } 
     
    victoryCheck(amount){
        let cash = amount; 
        let cash1 = cash; 
        let totalCashWin = cash + ((50/cash) * 100);
        let totalCashLost = (50/cash) * 100;
        let day = 0;
              
            while (cash > totalCashLost && cash < totalCashWin){
                for( day = 1; day <= 4; day++){ 
       
                let betCount = 0;
                    randomBet = Math.floor(Math.random() * 10 ) % 2;
                    betCount++;
                        if (randomBet == 1){
                            cash = cash + 1;   
                            luck++;   
                        }
                        else{
                            badLuck++;
                            cash = cash - 1; 
                            // console.log(" amount: "+cash) 
                        }
                        console.log("Total Cash :"+ cash);  
                        check.luckCheck(luck,badLuck,cash,day,randomBet);
            
                        mapAmnt.mapAmountDay(cash,day,randomBet);
            }
            // check.luckCheck(luck,badLuck,cash,day,randomBet);
            // store.cashStore(day,cash);
            // mapAmnt.mapAmountDay(cash,day,randomBet);
            monthlyInvest += amount;
            monthlyStake += cash;
        }               

        // cash1 = cash1 - cash;
        mapAmnt.mapDisplay(this.months);
        store.compute(monthlyStake,monthlyInvest);
        this.continueGame(monthlyStake,monthlyInvest,cash);
     
        return [cash,totalCashWin,totalCashLost,luck,badLuck,randomBet];
    }

    continueGame(monthlyStake,monthlyInvest,cash){
        let amount = cash;
        if(monthlyStake > monthlyInvest){
            let read = prompt('Do you want to continue?(y/n)');
                if(read == 'y'){
                    // gameContinue = 0;
                    new VictoryCheck().victoryCheck(amount);
                }
        }
    }
   
}
module.exports = {VictoryCheck};