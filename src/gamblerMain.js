const check = require('./victoryCheck')
const victoryCheck = new check.VictoryCheck();

let display = function(){
    console.log( "****** Welcome to Gambler Game! ******");
    for(let month=1; month<13; month++){  
        console.log(victoryCheck.victoryCheck(month));
    }
}

display();
 