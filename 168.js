/**
 * Excel表列名称
 * 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。
 *
 * 例如：
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28
 * ...
 *
 * 示例 1：
 * 输入：columnNumber = 1
 * 输出："A"
 *
 * 示例 2：
 * 输入：columnNumber = 28
 * 输出："AB"
 *
 * 示例 3：
 * 输入：columnNumber = 701
 * 输出："ZY"
 *
 * 示例 4：
 * 输入：columnNumber = 2147483647
 * 输出："FXSHRXW"
 *
 * 提示：
 * 1 <= columnNumber <= 2^31 - 1
 */

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const res = []
  let n = Math.trunc(columnNumber / 26)
  let m = columnNumber % 26
  while (n || m) {
    if (!m && n) {
      m = 26
      n--
    }
    res.unshift(String.fromCharCode(m + 64))
    m = n % 26
    n = Math.trunc(n / 26)
  }
  return res.join('')
}

// console.log(convertToTitle(1))
console.log(convertToTitle(26))
// console.log(convertToTitle(28))
console.log(convertToTitle(701))
// console.log(convertToTitle(2147483647))