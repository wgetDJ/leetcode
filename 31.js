// https://leetcode.com/problems/next-permutation/

// Time O(N) | Space O(1)
var nextPermutation = function(nums) {
    let n = nums.length
    let ind = -1

    for(let i = n-2; i >=0; i--) {
        if(nums[i] < nums[i+1]) {
            ind = i
            break
        }
    }

    if(ind === -1) {
        nums = nums.reverse()
    } else {
        for(let i = n-1; i > ind; i--) {
            if(nums[i] > nums[ind]) {
                [nums[i], nums[ind]] = [nums[ind], nums[i]]
                break
            }
        }

        nums = nums.slice(0, ind + 1).concat(nums.slice(ind+1).sort())
        console.log(nums)
    }
};