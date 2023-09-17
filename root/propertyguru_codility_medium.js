function solution(A) {
  const numDict = {};

  for (const num of A) {
    const numStr = num.toString();
    const key = numStr[0] + numStr[numStr.length - 1];

    if (!numDict[key]) {
      numDict[key] = [];
    }
    numDict[key].push(num);
  }

  let maxSum = -1;

  for (const key in numDict) {
    const nums = numDict[key];
    if (nums.length >= 2) {
      const sum = topTwoHighestSum(nums);
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  return maxSum;

  function topTwoHighestSum(arr) {
    let highest = arr[0];
    let secondHighest = arr[1];
    if (highest < secondHighest) {
      secondHighest = arr[0];
      highest = arr[1];
    }
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] > highest) {
        secondHighest = highest;
        highest = arr[i];
      } else if (arr[i] > secondHighest) {
        secondHighest = arr[i];
      }
    }
    return highest + secondHighest;
  }
}

// Test cases
console.log(solution([405, 45, 300, 300])); // Output: 140
