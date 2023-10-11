//Q1) Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer
// formed by reversing the digits of 'x' without using any built-in methods for reversal. After
// reversing the digits, determine whether the resulting number has any prime factors. If it does
// have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."
// Example 1:
// Input - 123
// reversed integer - 321
// prime factors of 321 are 3 and 107
// output - Yes - [3,107]
// Example 2:
// Input - 1500
// reversed Integre - 51
// prime factors of 51 are 3 and 17
// output - Yes - [3, 17]
// Example 3:
// Input - 1000
// reversed Integre - 1
// There are no prime factors for 1
// output - No



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






 
   

 

    



