function ArrayChallenge(arr) {
    const totalSum = arr.reduce((sum, num) => sum + num, 0);
    
    if (totalSum % 2 !== 0) {
      return -1;
    }
    
    const targetSum = totalSum / 2;
    const results = [];
    
    function generateCombinations(index, currentSum, currentSet) {
      if (currentSum === targetSum) {
        results.push([...currentSet]);
        return;
      }
      
      if (currentSum > targetSum || index >= arr.length) {
        return;
      }
      
      generateCombinations(index + 1, currentSum, currentSet);  // Skip the current number
      currentSet.push(arr[index]);
      generateCombinations(index + 1, currentSum + arr[index], currentSet);  // Include the current number
      currentSet.pop();
    }
    
    generateCombinations(0, 0, []);
    
    if (results.length === 0) {
      return -1;
    }
    

    const firstSet = results[0].sort((a, b) => a - b);
    const secondSet = arr.filter(num => !firstSet.includes(num)).sort((a, b) => a - b);
    console.log(firstSet, secondSet);

    const sortedSets = [...firstSet, ...secondSet];
    
    return sortedSets.join(',');
  }
  
  // Example usage
  const arr =  [16, 22, 35, 8, 20, 1, 21, 11];
  console.log(ArrayChallenge(arr));  // Output: "1,8,11,16,20,21,22,35"
  