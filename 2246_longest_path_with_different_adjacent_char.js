//property guru
function solution(S, A) {
    const tree = new Map();
    let root = -1;
  
    for (let node = 0; node < A.length; node++) {
      const parent = A[node];
      if (parent === -1) {
        root = node;
      }
      if (!tree.has(parent)) {
        tree.set(parent, new Set());
      }
      tree.get(parent).add(node);
    }
  
    const f = new Array(S.length).fill(0);
    const g = new Array(S.length).fill(0);
    let max_length = 0;
  
    function dfs(current_node) {
      const children = tree.get(current_node);
      if (!children) {
        return;
      }
      
      const child_list = [];
      for (const child of children) {
        dfs(child);
        if (S[child] !== S[current_node]) {
          f[current_node] = Math.max(f[current_node], f[child] + 1);
          child_list.push(f[child]);
        }
      }
      max_length = Math.max(max_length, f[current_node]);
      child_list.sort((a, b) => b - a);
      if (child_list.length >= 2) {
        g[current_node] = 2 + child_list[0] + child_list[1];
        max_length = Math.max(max_length, g[current_node]);
      }
    }
  
    dfs(root);
    return max_length + 1;
  }
  
//   console.log(solution("abbab", [-1, 0, 0, 0, 2]));  // should return 2
  // console.log(solution("abbbaabaab", [-1, 0, 0, 0, 1, 2, 2, 3, 3, 4]));  // should return 5
//   console.log(solution("aaaaaaaaaa", [-1, 0, 0, 0, 1, 2, 2, 3, 3, 4]));  // should return 0
//   console.log(solution("abbbabaaaa", [-1, 0, 0, 0, 1, 2, 2, 3, 3, 4]));  // should return 4
  
console.log(solution("ab", [-1, 0])); // Output: 2
console.log(solution("abbab", [-1, 0, 0, 0, 2])); // Output: 3
console.log(solution("abab", [-1, 2, 0, 1])); // Output: 2