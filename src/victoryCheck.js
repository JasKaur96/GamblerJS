const cashStore = require('./cashStore')
const cashstore = new cashStore.CashStore();
let betCount =0;
let totalCash = 100;
let cash = totalCash;
class Victory{
    victoryCheck(randomBet,day){
        let totalCashWin = cash + ((50/cash) * 100);
        let totalCashLost = (50/cash) * 100;
        let result = cash;  
        let days = day;
        betCount++
           
        while (result > totalCashLost && result < totalCashWin){
            if (randomBet == 1){
                result = result + 1;              
            }
            else{
                result = result - 1;
            }
            cashstore.cashStore(days,result);
            console.log("Total Cash :"+ result);
        }
        cashstore.cashPrint();
        return [result,totalCashWin,totalCashLost];
    }

    // show(){
    //     this.victoryCheck();
    //     // console.log(empDailyWageMap)
    //     return "\nTotal totalCashWins:"+totalCashWin+"\nTotaltotalCashLost :"+totalCashLost +"\nDay:"+day;
    // }
}

module.exports = {Victory}