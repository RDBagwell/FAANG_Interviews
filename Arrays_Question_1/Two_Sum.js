
const nums = [1,3,7,2,9];
const tragetToFind = 3;

// Brute Force Solution Time = O(n2), Space = O(1);
function findTwoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        console.log({i, value: nums[i]});
        const numberToFind = target - nums[i];
        console.log({numberToFind});
        for (let j = i + 1; j < nums.length; j++) {
            console.log({j, value: nums[j]});
            if(nums[j] === numberToFind){
                return [i,j];
            }
        }
    }
    return null;
}
// console.log(findTwoSum(nums, tragetToFind));

// Optimized Solution Time = O(n), Space = O(n);
function findTwoSumB(nums, target) {
    const numsMap = {};
    for (let i = 0; i < nums.length; i++) {
        console.log({i, value: nums[i]});
        const currentMapVal = numsMap[nums[i]];
        if(currentMapVal >= 0){
            return [currentMapVal, i];
        } else {
            const numberToFind = target - nums[i];
            console.log({numberToFind});
            numsMap[numberToFind] = i;
            console.log({numsMap});
        }
    }
    return null;
}
console.log(findTwoSumB(nums, tragetToFind));