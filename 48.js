// https://leetcode.com/problems/rotate-image/


// Brute Force
let newMatrix = [...matrix]

for(let i = 0; i < matrix.length ; i++) {
  for(let j = 0; j < matrix[0].length; j++) {
    newMatrix[j][(matrix[0].length - 1)-i] = matrix[i][j]
  }
}

// Optimized Solution
var rotate = function(matrix) {
    // Transpose the matrix. i.e. swap rows with columns
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(i > j) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
            }
        }
    }

    // Reverse the columns
    for(let i = 0; i < matrix.length; i++) {
        matrix[i].reverse()
    }
};