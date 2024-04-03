// https://leetcode.com/problems/maximum-subarray/description/

var maxSubArray = function(nums) {
    let result = nums[0]
    let currentSum = 0

    for (ele of nums) {
        if(currentSum < 0) {
            currentSum = 0
        }
        currentSum += ele

        result = Math.max(result, currentSum)
    }

    return result
};