/**
 * 498. 对角线遍历
 * 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。
 *
 * 示例 1：
 * 输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,4,7,5,3,6,8,9]
 *
 * 示例 2：
 * 输入：mat = [[1,2],[3,4]]
 * 输出：[1,2,3,4]
 *
 * 提示：
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 10^4
 * 1 <= m * n <= 10^4
 * -10^5 <= mat[i][j] <= 10^5
 */

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
// var findDiagonalOrder = function (mat) {
//   const n = mat.length
//   const m = mat[0].length
//   const arr = []
//   for (let i = 0, j = 0, k = 0, isUp = true; k < m * n; k++) {
//     console.log(i, j, isUp)
//     arr.push(mat[i][j])
//     if (isUp && (i == 0 || j == m - 1)) {
//       if (j == m - 1) {
//         i = i + 1
//         j = j
//       } else {
//         i = i
//         j = j + 1
//       }
//       isUp = false
//     } else if (!isUp && (j == 0 || i == n - 1)) {
//       if (i == n - 1) {
//         i = i
//         j = j + 1
//       } else {
//         i = i + 1
//         j = j
//       }
//       isUp = true
//     } else if (isUp) {
//       i--
//       j++
//     } else {
//       i++
//       j--
//     }
//   }
//   return arr
// }

var findDiagonalOrder = function (mat) {
  /**
   * 一共有 m + n - 1 条对角线，相邻的对角线的遍历方向不同，当前遍历方向为从左下到右上，则紧挨着的下一条对角线遍历方向为从右上到左下；
   *
   * 设对角线从上到下的编号为 i ∈ [0, m + n − 2]：
   * 当 i 为偶数时，则第 i 条对角线的走向是从下往上遍历；
   * 当 i 为奇数时，则第 i 条对角线的走向是从上往下遍历；
   *
   * 当第 i 条对角线从下往上遍历时，每次行索引减 1，列索引加 1，直到矩阵的边缘为止：
   * 当 i < m 时，则此时对角线遍历的起点位置为 (i, 0)；
   * 当 i ≥ m 时，则此时对角线遍历的起点位置为 (m - 1, i - m + 1)；
   *
   * 当第 i 条对角线从上往下遍历时，每次行索引加 1，列索引减 1，直到矩阵的边缘为止：
   * 当 i < n 时，则此时对角线遍历的起点位置为 (0, i)；
   * 当 i ≥ n 时，则此时对角线遍历的起点位置为 (i - n + 1, n - 1)；
   */
  const m = mat.length
  const n = mat[0].length
  const arr = []
  for (let i = 0; i < n + m - 1; i++) {
    if (i % 2) {
      // 从上往下遍历
      let [x, y] = i < n ? [0, i] : [i - n + 1, n - 1]
      while (x < m && y >= 0) {
        arr.push(mat[x++][y--])
      }
    } else {
      // 从下往上遍历
      let [x, y] = i < m ? [i, 0] : [m - 1, i - m + 1]
      while (y < n && x >= 0) {
        arr.push(mat[x--][y++])
      }
    }
  }
  return arr
}

console.log(
  findDiagonalOrder([
    [2, 5, 8],
    [4, 0, -1]
  ])
)
// console.log(
//   findDiagonalOrder([
//     [2, 5],
//     [8, 4],
//     [0, -1]
//   ])
// )
// console.log(
//   findDiagonalOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ])
// )
// console.log(
//   findDiagonalOrder([
//     [1, 2],
//     [3, 4]
//   ])
// )
