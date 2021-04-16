let betCount =0;
let totalCash = 100;
// let cash = totalCash;
let cashStoreArray = [];
let cashDayMap = new Map();
class CashStore{
    constructor(){}

    cashStore(cash,days){
         cashStoreArray.push(cash) ;
         return cashDayMap
    }

    cashPrint(){
        console.log("Cash Array"+cashStoreArray);
    }
}

module.exports = {CashStore}