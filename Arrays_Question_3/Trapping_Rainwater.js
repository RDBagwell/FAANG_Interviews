const heights = [0,1,0,2,1,0,3,1,0,1,2]; //8
/* 
* currentWater = min(maxLeft, maxRight) - currentHeight
*/

// Brute Force Solution time O(n^2) space: O(1)
function getTrappedRainwater(heights) {
    let totalWater = 0;
    for (let p = 0; p < heights.length; p++) {
        let leftP = p, rightP = p, maxLeft = 0, maxRight = 0;
        while (leftP >= 0) {
            maxLeft = Math.max(maxLeft, heights[leftP]);
            leftP--;
        }
        while (rightP < heights.length) {
            maxRight = Math.max(maxRight, heights[rightP]);
            rightP++;
        }
        const currentWater = Math.min(maxLeft, maxRight) - heights[p];
        if(currentWater >= 0){
            totalWater += currentWater;
        }
    }
    return totalWater;

}

// console.log(getTrappedRainwater(heights));

// Optimal Solution
function getTrappedRainwaterB(heights) {
    let totalWater = 0, p1 = 0, p2 = heights.length - 1, maxLeft = 0, maxRight = 0;
    while (p1 < p2) {
        if(heights[p1] <= heights[p2]){
            if(heights[p1] >= maxLeft){
                maxLeft = heights[p1];
            } else {
                totalWater += maxLeft - heights[p1]; 
            }
            p1++
        } else {
            if(heights[p2] >= maxRight){
                maxRight = heights[p2];
            } else {
                totalWater += maxRight - heights[p2];
            }
            p2--;
        }
    }

    return totalWater;

}

console.log(getTrappedRainwaterB(heights));