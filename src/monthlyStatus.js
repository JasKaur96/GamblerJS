let betCount =0;
let totalCash = 100;
// let cash = totalCash;
let cashStoreArray = [];
let cashDayMap = new Map();
class CashStore{
    constructor(){}

    cashStore(days,cash){
        cashStoreArray.push(cash);
        cashDayMap.set(days,cashStoreArray);
        // console.log("day"+days+"cash "+cash);
        return cashDayMap;
    }

    cashPrint(){
        // console.log("Cash Map"+cashDayMap);
    }
}

module.exports = {CashStore}