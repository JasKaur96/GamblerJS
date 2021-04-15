const { assert } = require('chai');
const betCheck = require('../src/gamble');
const betStake = new betCheck.Gamble();

const victoryCheck = require('../src/victoryCheck')
const victory = new victoryCheck.Victory();

describe('Test Gambler simulation problem.', function(){
    it('Test bet for 1 and return 101 ',function(){
        assert.equal(victory.victoryCheck(1),101); 
    })

    it('Test bet for 0 and return 99 ',function(){
        assert.equal(victory.victoryCheck(0),100); 
    })
})

describe('Test Gambler simulation problem.', function(){
    it('Test bet for 1 and return 1 ',function(){
        assert.equal(victory.victoryCheck(1),0); 
    })

    it('Test bet for 0 and return 1 ',function(){
        assert.equal(victory.victoryCheck(0),1); 
    })
})