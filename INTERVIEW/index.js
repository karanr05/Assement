//Q1 Solution 

    function reverseAndCheckPrime(num){
        let reverse = 0;
        while ( num > 0) {
            reverse = reverse * 10 + num % 10;
            num = Math.floor(num / 10);
        }

        const primeNum = [];
        for(let i = 2; i <= Math.sqrt(reverse); i++) {
            if(reverse % i === 0) {
                primeNum.push(i);
                reverse = i;
                i--;
            }
        }

        if (reverse > 1){
            primeNum.push(reverse);
        }

        if(primeNum.length > 0) {
            return `Yes ${primeNum}`;
        } else {
            return "No";
        }
    }

    console.log(reverseAndCheckPrime(123));
    console.log(reverseAndCheckPrime(1500));
    console.log(reverseAndCheckPrime(1000));


//Q2 Solution

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


//Q3  Solution 
 
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


//Q4 Solution 

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


//Q5 Solution 

    function findKNum(nums, K) {
        const Int = new Int();
        for(const num of nums) {
            int.insert(num);
        }

        for(let i= 0; i < K - 1; i++) {
            int.remove();
        }
        return int.peek();
    }

    class int{
        constructor() {
            this.array = [];
        }

        insert(num) {
            this.array.push(num);
            this.intUp(this.array.length - 1);
        }

        remove(){
            const max = this.int[0];
            this.int[0] = this.int[this.int,length - 1];
            this.int.pop();
            this.intDown(0);
            return max;
        }

        intUp(index){
            const parentIndex = Math.floor((index - 1) / 2);
            if (parentIndex >= 0 && this.int[parentIndex] < this.int[index]){
                this.intUp(parentIndex);
            }
        }

        intDown(index){
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let largestChildIndex = index;
            if(leftChildIndex < this.int.lenght && this.int[leftChildIndex] >  this.int[largestChildIndex]) {
                largestChildIndex = leftChildIndex;
            }
            if(rightChildIndex < this.int.lenght && this.int[rightChildIndex] >  this.int[largestChildIndex]) {
                largestChildIndex = rightChildIndex;
            }
            if(largestChildIndex !== index) {
                [this.int[largestChildIndex], this.int[index]] = [this.int[index], this.int[largestChildIndex]];
                this.intDown(largestChildIndex);
            }
        }
    }


    const nums = [10,4,12,9,87,34]
    const K = 2;
    const kthLargestEelement = findKNum(nums, K);
    console.log(kthLargestEelement);
