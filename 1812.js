/**
 * 判断国际象棋棋盘中一个格子的颜色
 *
 * 给你一个坐标 coordinates ，它是一个字符串，表示国际象棋棋盘中一个格子的坐标。下图是国际象棋棋盘示意图。
 *  8 w b w b w b w b
 *  7 b w b w b w b w
 *  6 w b w b w b w b
 *  5 b w b w b w b w
 *  4 w b w b w b w b
 *  3 b w b w b w b w
 *  2 w b w b w b w b
 *  1 b w b w b w b w
 *    a b c d e f g h       w - 白; b - 黑
 *
 * 如果所给格子的颜色是白色，请你返回 true，如果是黑色，请返回 false 。
 * 给定坐标一定代表国际象棋棋盘上一个存在的格子。坐标第一个字符是字母，第二个字符是数字。
 *
 * 示例 1：
 * 输入：coordinates = "a1"
 * 输出：false
 * 解释：如上图棋盘所示，"a1" 坐标的格子是黑色的，所以返回 false 。
 *
 * 示例 2：
 * 输入：coordinates = "h3"
 * 输出：true
 * 解释：如上图棋盘所示，"h3" 坐标的格子是白色的，所以返回 true 。
 *
 * 示例 3：
 * 输入：coordinates = "c7"
 * 输出：false
 *
 * 提示：
 * coordinates.length == 2
 * 'a' <= coordinates[0] <= 'h'
 * '1' <= coordinates[1] <= '8'
 */

/**
 * @param {string} coordinates
 * @return {boolean}
 */
// var squareIsWhite = function (coordinates) {
//   const [col, row] = [...coordinates]
//   const isColEven = (col.charCodeAt() - 'a'.charCodeAt() + 1) % 2
//   const isRowEven = row % 2
//   // 异或
//   if (isColEven ^ isRowEven) return true
//   return false
// }

var squareIsWhite = function (coordinates) {
  const [col, row] = [...coordinates]
  return !!((col.charCodeAt() - 'a'.charCodeAt() + 1 + +row) % 2)
}

console.log(squareIsWhite('a1'))
console.log(squareIsWhite('h3'))
console.log(squareIsWhite('c7'))
