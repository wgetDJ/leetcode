// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

var maxDepth = function(s) {
    let res = 0
    let count = 0
    let depth = 0

    for (ele of s) {
        if(ele === "(") {
            count++
        }
        if(count > 0 && count > depth) {
            depth++
        }
        if(ele === ")") {
            count--
        }
        if(count === 0 && res < depth) {
            res = depth
        }
    }
    return res
};

// Second Solution
var maxDepth = function(s) {
    let stack = []
    let count = 0

    for(ele of s) {
        if(ele === "(") {
            stack.push(ele)
            count = count > stack.length ? count : stack.length
        } else if(ele === ")") {
            stack.pop()
        }
    }

    return count
};