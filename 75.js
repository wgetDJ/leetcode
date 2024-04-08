// https://leetcode.com/problems/sort-colors/

// Simple solution
nums.sort()

// Better solution
var sortColors = function(nums) {
    let [
        count1,
        count2,
        count3
    ] = [0, 0, 0]

    for(ele of nums) {
        if(ele === 0) {
            count1++
        } else if(ele === 1) {
            count2++
        } else {
            count3++
        }
    }

    for(let i= 0; i < count1; i++) {
        nums[i] = 0
    }
    for(let i = count1; i < count1+count2; i++) {
        nums[i] = 1
    }
    for(let i = count1+count2; i< nums.length; i++) {
        nums[i] = 2
    }
};

// Optimized Solution - Doutch National Flag Algorithm
var sortColors = function(nums) {
    let [low, mid, high] = [0, 0, nums.length - 1]

    while(mid <= high) {
        if(nums[mid] === 0) {
            [nums[mid], nums[low]] = [nums[low], nums[mid]]
            mid++
            low++
        } else if(nums[mid] === 1){
            mid++
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]]
            high--
        }
    }
};