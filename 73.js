// https://leetcode.com/problems/set-matrix-zeroes/description/

// Time O((N*M)*(N+M)+(N*M)) | Space O(N*M)
var setZeroes = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length

    const convertRow = (i) => {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] !== 0) {
            matrix[i][j] = -1
            }
        }
    }

    const convertColumn = (j) => {
        for(let i = 0; i < m; i++) {
            if(matrix[i][j] !== 0) {
            matrix[i][j] = -1
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] === 0) {
                convertRow(i)
                convertColumn(j)
            }
        }
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] === -1) {
                matrix[i][j] = 0
            }
        }
    }

    return matrix
};

// Time O(2*N*M) | Space O(N+M)
var setZeroes = function (matrix) {
    let column = Array(matrix[0].length).fill(0)
    let row = Array(matrix.length).fill(0)

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                row[i] = 1
                column[j] = 1
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[0].length; j++) {
            if (row[i] === 1 || column[j] === 1) {
                matrix[i][j] = 0
            }
        }
    }

    return matrix
};

// Time O(N*M) | Space O(1)
var setZeroes = function (matrix) {
    let colZero = 1

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0

                if (j > 0) {
                    matrix[0][j] = 0
                } else {
                    colZero = 0
                }
            }
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] != 0) {
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0
                }
            }
        }
    }

    if (matrix[0][0] === 0) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0
        }
    }

    if (colZero === 0) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0
        }
    }
    return matrix
};