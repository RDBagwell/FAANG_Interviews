const nums = [7,1,2,3,9];

// Brute Force Solution Time = O(n^2), Space = O(1);
function containerWithMostWater(nums) {
    let maxArea = 0;
    for (let a = 0; a < nums.length; a++) {
        for (let b = a + 1; b < nums.length; b++) {
            const L = Math.min(nums[a], nums[b]);
            const W = b - a;
            const area = L * W
            maxArea = Math.max(area, maxArea);
            console.log({L, W, area, maxArea});
        }
    }
    return maxArea;
}
// console.log(containerWithMostWater(nums));


// Optimal Solution Time = O(n), Space = O(1);
function containerWithMostWaterB(nums) {
    let a = 0, b = nums.length -1, maxArea = 0;
    while (a < b) {
        const L = Math.min(nums[a], nums[b]);
        const W = b - a;
        const area = L * W
        maxArea = Math.max(area, maxArea);
        if(nums[a] <= nums[b]){
            a++;
        } else {
            b++;
        }
    }
    return maxArea;
}

console.log(containerWithMostWaterB(nums));