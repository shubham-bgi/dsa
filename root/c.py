from ast import List


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        com = strs[0];
        for idx, str in enumerate(strs):
            if(idx == 0):
                continue
            



print(Solution().longestCommonPrefix(["flower","flow","flight"]))