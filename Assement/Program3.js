// Q3) Given a string s and a array of strings wordArray, return true if s can be segmented into a
// space-separated sequence of one or more array words.
// Note that the same word in the array may be reused multiple times in the segmentation.
// Example 1:
// Input: s = "leetcode", wordArray = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:
// Input: s = "applepenapple", wordArray = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:
// Input: s = "catsandog", wordArray = ["cats","dog","sand","and","cat"]
// Output: false




function wordBreak(s, wordArr){
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for(let i = s.length -1; i >= 0; i--) {
        for(const word of wordArr){
            if(s.slice(i, i + word.length) === word || dp[i + word.length]) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[0];
}

const s1 = "leetcode";
const wordArr1 = ["leet","code"];
console.log(wordBreak(s1,wordArr1));

const s2 = "applepenapple";
const wordArr2 = ["apple","pen"];
console.log(wordBreak(s2,wordArr2));
