
const gamble = require('./gamble')
const bet = new gamble.Gamble();
const mapping = require('./mapAmntDay')
const mapAmnt = new mapping.MapAmount();
const luckCheck  = require("./luckCheck");
let check = new luckCheck.LuckCheck();
let totalCash = 60;
let luck=0, badLuck =0;
class VictoryCheck {
    constructor(months) {
        this.months = months;
    } 
     
    victoryCheck(amount){
        let cash = amount; 
        let cash1 = cash; 
        let totalCashWin = cash + ((50/cash) * 100);
        let totalCashLost = (50/cash) * 100;
       
        while (cash > totalCashLost && cash < totalCashWin){
            for(let day = 1; day <= 10; day++){ 
               let betCount = 0;
                let randomBet = Math.floor(Math.random() * 10 ) % 2;
                betCount++;
                if (randomBet == 1){
                    cash = cash + 1;   
                    luck++;   
                }
                else{
                    badLuck++;
                    cash = cash - 1;    
                }
                check.luckCheck(luck,badLuck,cash,day,randomBet);

                mapAmnt.mapAmountDay(cash,day,randomBet);
            }
        } 
        cash1 = cash1 - cash;
        mapAmnt.mapDisplay(this.months);
       
        return [cash,totalCashWin,totalCashLost,luck,badLuck];
    }
   
}
module.exports = {VictoryCheck};