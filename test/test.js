const { assert } = require('chai');
const betCheck = require('../src/stakeCheck');
const betStake = new betCheck.StakeCheck();

describe('Test Gambler simulation problem.', function(){
    it('Test bet and return 1 ',function(){
        assert.equal(betStake.bet(),1); 
    })
})