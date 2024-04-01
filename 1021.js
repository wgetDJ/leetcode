// https://leetcode.com/problems/remove-outermost-parentheses/description/

var removeOuterParentheses = function(s) {
    let res = ""
    let count = 0

    for (ele of s) {
        if(ele === "(") {
            count++
        }
        if(count > 1) {
            res += ele
        }
        if(ele === ")") {
            count--
        }
    }

    return res
};

// Explanation:
// 1. when encounter the outer most parentheses, count will be 1
// 2. when encounter the inner most parentheses, count will be 0
// to get the result, we have to remove 1 and 2.
// So wehn we encounter the (, which is not the outer most parentheses, we increase the count and add it to the result
// When we encounter the ), which is not the inner most parentheses, theount will be more than 1, so we add it to the result, then we reduce the count.