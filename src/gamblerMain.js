const check = require('./victoryCheck')
// const victoryCheck = new check.VictoryCheck();
const luck = require('./luckCheck');
const luckCheck = new luck.LuckCheck();
let totalCash = 100;
let cash = totalCash;


let display = function(){
    console.log( "****** Welcome to Gambler Game! ******");
    for(let month=1; month<5; month++){  
        
        const victoryCheck = new check.VictoryCheck(month);
        console.log(victoryCheck.victoryCheck(cash));
        console.log(luckCheck.displayLuck());
    }
}

display();
 