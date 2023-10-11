// Q5) Given a array of non-negative integers nums, Find the Kth largest element in the array
// Note - Do not use any sorting algorithm or library's sort method
// Example-1:
// Input: nums = [10,4,12,9,87,34], K = 2
// Output: 34



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