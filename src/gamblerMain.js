const betCheck = require('./gamble');
const betStake = new betCheck.Gamble();

let betCount =0;
class GambleMain{
    print(){
        betStake.gamble();
        return "";
    }
}

let gambler = new GambleMain().print();
console.log(gambler);