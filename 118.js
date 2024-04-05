// https://leetcode.com/problems/pascals-triangle/description/\

var generate = function (numRows) {
    let res = []

    for(let i = 0; i < numRows; i++) {
        if(i === 0) {
            res.push([1])
        } else if(i === 1) {
            res.push([1, 1])
        } else {
            res.push([])
            for(let j = 0; j <= i; j++) {
                if(j === 0 || j === i) {
                    res[i].push(1)
                } else {
                    res[i].push(res[i-1][j-1] + res[i-1][j])
                }
            }
        }
    }

    return res
};