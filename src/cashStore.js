let betCount =0;
let totalCash = 100;
// let cash = totalCash;
let cashStoreArray = [];
let cashDayMap = new Map();
let amount = 0;
let day =0;
class CashStore{
    constructor(){}

    compute(monthlyStake,monthlyInvestment){
        
        if(monthlyStake > monthlyInvestment){
            let total = monthlyStake - monthlyInvestment ;
            console.log("Gambler Won "+total+ "in this month")
        }
        else{
            let total =  monthlyInvestment - monthlyStake ;
            console.log("Gambler Lost "+total+ "in this month")
        }
    }
}

module.exports = {CashStore}