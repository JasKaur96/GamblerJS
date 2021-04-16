const cashStore = require('./cashStore')
const cashstore = new cashStore.CashStore();
let betCount =0;
let totalCash = 75;
let cash = totalCash;
class Victory{
    victoryCheck(randomBet,day){
        let totalCashWin = cash + ((50/cash) * 100);
        let totalCashLost = (50/cash) * 100;
        let result = cash;  
        let days = day;
        betCount++
           
        while (result > totalCashLost && result < totalCashWin){
            for(let day = 1; day <= 20; day++){
            if (randomBet == 1){
                result = result + 30;              
            }
            else{
                result = result - 30;
            }
            cashstore.cashStore(result,days);
            console.log("Total Cash :"+ result);
        }
    
        cashstore.cashPrint();
    }
    return [result,totalCashWin,totalCashLost];
    }
}

module.exports = {Victory}