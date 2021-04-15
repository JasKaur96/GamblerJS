const betCheck = require('./stakeCheck');
const betStake = new betCheck.StakeCheck();
let betCount =0;
class Gambler{
    print(){
        betStake.bet();
        return "";
    }
}

let gambler = new Gambler().print();
console.log(gambler);