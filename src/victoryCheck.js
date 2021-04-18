
const gamble = require('./gamble')
const bet = new gamble.Gamble();
const mapping = require('./mapAmntDay')
const mapAmnt = new mapping.MapAmount();
let totalCash = 100;
let cash = totalCash;
let totalCashWin = cash + ((50/cash) * 100);
let totalCashLost = (50/cash) * 100;
let result = cash;  
let months = 0;
class VictoryCheck  {
    constructor() {} 
     
    victoryCheck(month){
        // let totalCashWin = cash + ((50/cash) * 100);
        // let totalCashLost = (50/cash) * 100;
        // let result = cash;  
        months =month;
        while (result > totalCashLost && result < totalCashWin){
            for(let day = 1; day <= 20; day++){ 
              
                let randomBet = Math.floor(Math.random() * 10 ) % 2;
                if (randomBet == 1){
                    result = result + 1;      
                }
                else{
                    result = result - 1;    
                }
                //  console.log("Total Cash :"+ result);  
                mapAmnt.mapAmountDay(result,day,randomBet);
            }
        }
       
        mapAmnt.mapDisplay(months);
        // wonLostDisplay(result,totalCashLost)
        // if(result > totalCashLost){
        //     console.log("Won! cash :"+result);
        // }
        // else{
        //     console.log("Lost! cash :"+result);
        // }
        return [result,totalCashWin,totalCashLost];
    }
}
module.exports = {VictoryCheck};