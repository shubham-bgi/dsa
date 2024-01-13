/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] == 0 && flowerbed[i - 1] != 1 && flowerbed[i + 1] != 1) { i++;
                n--;
            
        }
        if(n <= 0) return true;
    }
    return false;
};