/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let occurence = {"R": 0, "D": 0};
    let rank = {"R": 0, "D": 0};
    senate = senate.split("");
    senate.forEach((senator, i) => {
        rank+=i;
        occurence[senator]++;
    });
    if(occurence.R == occurence.D) {
        return rank.R < rank.D ? "Radiant" : "Dire";
    }
    return occurence.R > occurence.D ? "Radiant"  : "Dire";
};

console.log(predictPartyVictory('RD'));