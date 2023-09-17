function solution(s) {
    
    let count = s[0] == s[s.length -1] ? 1 : 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) {
            count++;
        }
    }

    return count;
}

// Test cases
console.log(solution("abbaa")); // Output: 3
// abbaa - bbaaa - baaab - aaabb - aabba
console.log(solution("aaaa"));  // Output: 4
console.log(solution("abab"));  // Output: 0
