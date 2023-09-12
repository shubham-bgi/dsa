/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let output = [];
    let cur = [];
    nums.sort((a,b) => a-b);
    function dfs(i) {
        if(i >= nums.length) {
            output.push([...cur]);
            return;
        }

        cur.push(nums[i]);
        dfs(i+1)

        while(i < nums.length && nums[i] == nums[i+1]) i++;
        cur.pop();
        dfs(i+1)
    }
    dfs(0);
    return output; 
};

console.log(subsets([1,2,2]))