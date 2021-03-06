let dayWinAmountArr= [];
let dayWinAmountMap = new Map();
let dayLostAmountArr= [];
let dayLostAmountMap = new Map();

class MapAmount{
    constructor(){}

    mapAmountDay(amount,days,randomBet){
        let bet = randomBet;
        if(bet == 1){
            dayWinAmountArr.push(amount);
            dayWinAmountMap.set(days,amount);
        }else{
            dayLostAmountArr.push(amount);
            dayLostAmountMap.set(days,amount);
        }
        return [dayWinAmountMap,dayLostAmountMap];
    }

    mapDisplay(month){
        console.log("\nMonth : "+month);
        console.log("Days and Winning Amount:")
        console.log(dayWinAmountMap);
        console.log("\nDays and Losing Amount:")
        console.log(dayLostAmountMap);
    }
}

module.exports = {MapAmount};