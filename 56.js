// https://leetcode.com/problems/merge-intervals/

var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = []
    let start = intervals[0][0]
    let end = intervals[0][1]

    for(let i = 0; i < intervals.length; i++) {
        if(i < intervals.length - 1) {
            if(end >= intervals[i+1][0]) {
                if(end < intervals[i+1][1]) {
                    end = intervals[i+1][1]
                }
            } else {
                res.push([start, end])
                start = intervals[i+1][0]
                end = intervals[i+1][1]
            }
        } else {
            res.push([start, end])
        }
    }

    return res
};