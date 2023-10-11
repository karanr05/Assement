//Q2) Given an array of strings strs, group the anagrams together. You can return the answer in
// any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strs = [""]
// Output: [[""]]
// Example 3:
//Input: strs = ["a"]
//Output: [["a"]]


    function groupAnagrams(strs){
        const isAnagram = {};
        for(const str of strs) {
            const sortedStr = str.split("").sort().join("");
            if(!isAnagram[sortedStr]){
                isAnagram[sortedStr] = [];
            }

            isAnagram[sortedStr].push(str);
        }
        return Object.values(isAnagram);
    }

    const input = ["eat","tea","tan","ate","nat","bat"];
    const result = groupAnagrams(input);
    console.log(result);

    const input2 = [""];
    const result2 = groupAnagrams(input2);
    console.log(result2);