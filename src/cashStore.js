let betCount =0;
let totalCash = 100;
// let cash = totalCash;
let cashStoreArray = [];
let cashDayMap = new Map();
let empDailyWageMap = new Map();
class CashStore{
    constructor(){}

    cashStore(days,cash){
        cashStoreArray.push(cash) ;
        cashDayMap.set(days,cash);
        console.log("day"+days+"cash "+cash);
        empDailyWageMap.set(days,cash);
        return empDailyWageMap
    }

    cashPrint(){
        console.log("Cash Map"+empDailyWageMap);
    }
}

module.exports = {CashStore}