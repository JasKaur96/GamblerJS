let temp = 0;
let temp2 =0;
let lcash = 0, bcash = 0;
let luckyday = 0,badDay = 0;;
class LuckCheck{
   
    luckCheck(luck,badLuck,cash1,day1,bet){
        if(bet == 1){
            if(luck > temp){
                temp = luck;      
                lcash = cash1;
                luckyday = day1;     
            }
        }
        else{
            if(badLuck < temp){
                temp2 = badLuck;
                bcash = cash1;
                badDay = day1;
            }
        }
        return [temp,temp2,lcash,bcash,luckyday,badDay];
    }

    displayLuck(){
        return "Luckiest day: " +luckyday+"\n"+
        "UnLuckiest day: " +badDay;
    }
}

module.exports = {LuckCheck}