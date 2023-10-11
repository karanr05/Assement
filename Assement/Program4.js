// Q4) Given an array of non-negative integers nums, arrange them such that they form the largest
// number and return it.
// Note return the result in the form of string
// Example 1:
// Input: nums = [10,2]
// Output: "210"
// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"


function largestNum(nums){
    const compare = (a,b) => {
        const str1 = a.toString() + b.toString();
        const str2 = b.toString() + a.toString();
        return str2 - str1;
    };

    nums.sort(compare);

    const largestNumStr = nums.join("");
    return largestNumStr;
}

const nums1 = [10,2];
console.log(largestNum(nums1)); //Output : 210

const nums2 = [3,30,34,5,9];
console.log(largestNum(nums2)); //Output : 9534330