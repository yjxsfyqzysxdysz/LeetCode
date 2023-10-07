/**
 * 1886. 判断矩阵经轮转后是否一致
 *
 * 给你两个大小为 n x n 的二进制矩阵 mat 和 target 。现 以 90 度顺时针轮转 矩阵 mat 中的元素 若干次 ，如果能够使 mat 与 target 一致，返回 true ；否则，返回 false 。
 *
 * 示例 1：
 * 输入：mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
 * 输出：true
 * 解释：顺时针轮转 90 度一次可以使 mat 和 target 一致。
 *
 * 示例 2：
 * 输入：mat = [[0,1],[1,1]], target = [[1,0],[0,1]]
 * 输出：false
 * 解释：无法通过轮转矩阵中的元素使 equal 与 target 一致。
 *
 * 示例 3：
 * 输入：mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]
 * 输出：true
 * 解释：顺时针轮转 90 度两次可以使 mat 和 target 一致。
 *
 * 提示：
 * n == mat.length == target.length
 * n == mat[i].length == target[i].length
 * 1 <= n <= 10
 * mat[i][j] 和 target[i][j] 不是 0 就是 1
 */

/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  // 转度数       原坐标         转换坐标
  // 90°            [x, y]   ->    [y, n-x]
  // 180°           [x, y]   ->    [n-x, n-y]
  // 270°           [x, y]   ->    [n-y, x]
  const n = mat.length
  if (check(mat, target, n)) return true
  for (let i = 0; i < 3; i++) {
    // 旋转
    rota(mat, n)
    if (check(mat, target, n)) return true
  }
  return false
}

function rota(list, n) {
  for (let i = 0; i < ~~(n / 2); i++) {
    for (let j = 0; j < ~~((n + 1) / 2); j++) {
      ;[list[i][j], list[n - 1 - j][i], list[n - 1 - i][n - 1 - j], list[j][n - 1 - i]] = [
        list[n - 1 - j][i],
        list[n - 1 - i][n - 1 - j],
        list[j][n - 1 - i],
        list[i][j]
      ]
    }
  }
}

function check(list1, list2, n) {
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (list1[i][j] !== list2[i][j]) return false
  //   }
  // }
  // return true
  return JSON.stringify(list1) == JSON.stringify(list2)
}

// console.log(
//   findRotation(
//     [
//       [0, 1],
//       [1, 0]
//     ],
//     [
//       [1, 0],
//       [0, 1]
//     ]
//   )
// )
// console.log(
//   findRotation(
//     [
//       [0, 1],
//       [1, 1]
//     ],
//     [
//       [1, 0],
//       [0, 1]
//     ]
//   )
// )
console.log(
  findRotation(
    [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1]
    ],
    [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0]
    ]
  )
)
