/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    coins.sort((a,b)=>a-b);
    let noOfCoins = 0;
    let flag = false;
    for(let i = coins.length-1; i >= 0; i--){
        let remainder = amount % coins[i];
        if(remainder == 0) {
            noOfCoins+=amount/coins[i];
            flag = true;
            break;
        }
        noOfCoins+=Math.floor(amount/coins[i]);
        amount = remainder;
    }
    return flag ? noOfCoins : -1;
};

coinChange([186,419,83,408],6249);