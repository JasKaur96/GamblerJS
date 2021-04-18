let betCount =0;
let totalCash = 100;
let cash = totalCash;
class Victory{
    victoryCheck(){
        let totalCashWin = cash + ((50/cash) * 100);
        let totalCashLost = (50/cash) * 100;
        let result = cash;          
        while (result > totalCashLost && result < totalCashWin){
            betCount++
            let randomBet = Math.floor(Math.random() * 10 ) % 2;
            if (randomBet == 1){
                result = result + 1;              
            }
            else{
                result = result - 1;
            }
            console.log("Total Cash :"+ result);  
        }
        if(result > totalCashLost){
            console.log("Won! cash :"+result);
        }
        else{
            console.log("Lost! cash :"+result);
        }
        return [result,totalCashWin,totalCashLost];
    }
}

module.exports = {Victory}