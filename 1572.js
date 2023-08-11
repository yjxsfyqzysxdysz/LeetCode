/**
 * 矩阵对角线元素的和
 *
 * 给你一个正方形矩阵 mat，请你返回矩阵对角线元素的和。
 * 请你返回在矩阵主对角线上的元素和副对角线上且不在主对角线上元素的和。
 *
 * 示例  1：
 * 输入：mat = [[1,2,3],
 *             [4,5,6],
 *             [7,8,9]]
 * 输出：25
 * 解释：对角线的和为：1 + 5 + 9 + 3 + 7 = 25
 * 请注意，元素 mat[1][1] = 5 只会被计算一次。
 *
 * 示例  2：
 * 输入：mat = [[1,1,1,1],
 *             [1,1,1,1],
 *             [1,1,1,1],
 *             [1,1,1,1]]
 * 输出：8
 *
 * 示例 3：
 * 输入：mat = [[5]]
 * 输出：5
 *
 * 提示：
 * n == mat.length == mat[i].length
 * 1 <= n <= 100
 * 1 <= mat[i][j] <= 100
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
// var diagonalSum = function (mat) {
//   const len = mat.length
//   let left = 0,
//     right = len - 1
//   let res = 0
//   while (left < len) {
//     res += left === right ? mat[left][left] : mat[left][left] + mat[left][right]
//     left++
//     right--
//   }
//   return res
// }
var diagonalSum = function (mat) {
  const len = mat.length - 1
  return mat.reduce((res, cur, i) => {
    return res + (i === len - i ? cur[i] : cur[i] + cur[len - i])
  }, 0)
}

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
)
console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ])
)
console.log(diagonalSum([[5]]))
