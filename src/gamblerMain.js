const check = require('./victoryCheck')
// const victoryCheck = new check.VictoryCheck();
const luck = require('./luckCheck');
const luckCheck = new luck.LuckCheck();
let totalCash = 100, monthlyStake=0, monthlyInvest =0;
let cash = totalCash;
let gameContinue =1;

let display = function(){
    console.log( "****** Welcome to Gambler Game! ******");
        // const game = new GameMain();
        for(let month=1; month<2; month++){  
           
            const victoryCheck = new check.VictoryCheck(month);
            console.log(victoryCheck.victoryCheck(cash));
            console.log(luckCheck.displayLuck());
            // console.log(victoryCheck.continueGame(monthlyStake,monthlyInvest,cash));
        }  
}
display();
 