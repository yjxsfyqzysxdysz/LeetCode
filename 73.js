/**
 * 73. 矩阵置零
 *
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 *
 * 示例 1：
 * 输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
 * 输出：[[1,0,1],[0,0,0],[1,0,1]]
 *
 * 示例 2：
 * 输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 * 输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 *
 * 提示：
 * m == matrix.length
 * n == matrix[0].length
 * 1 <= m, n <= 200
 * -231 <= matrix[i][j] <= 2^31 - 1
 *
 * 进阶：
 * 一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
 * 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
 * 你能想出一个仅使用常量空间的解决方案吗？
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const r = matrix.length
  const c = matrix[0].length
  const colList = Array(r).fill(false)
  const rowList = Array(r).fill(false)
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (!matrix[i][j]) {
        rowList[i] = true
        colList[j] = true
      }
    }
  }
  for (let i = 0; i < r; i++) {
    if (rowList[i]) {
      matrix[i] = Array(c).fill(0)
      continue
    }
    colList.forEach((e, j) => {
      if (e) {
        matrix[i][j] = 0
      }
    })
  }
  return matrix
}

// console.log(
//   setZeroes([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1]
//   ])
// )
console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
  ])
)
