
const nums = [1,3,7,2,9];
const tragetToFind = 11;

// Brute Force Solution
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
console.log(findTwoSum(nums, tragetToFind)); 
