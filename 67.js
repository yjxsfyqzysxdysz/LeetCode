/**
 * 二进制求和
 *
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 * 输入为 非空 字符串且只包含数字 1 和 0。
 *
 * 示例 1:
 * 输入: a = "11", b = "1"
 * 输出: "100"
 *
 * 示例 2:
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 *
 * 提示：
 * 每个字符串仅由字符 '0' 或 '1' 组成。
 * 1 <= a.length, b.length <= 10^4
 * 字符串如果不是 "0" ，就都不含前导零。
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let carry = 0
  const res = []
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || carry) {
    const val = (+a.pop() || 0) + (+b.pop() || 0) + carry
    if (val < 2) {
      carry = 0
      res.unshift(val)
    } else {
      carry = 1
      res.unshift(val % 2)
    }
  }
  return res.join('')
}
console.log(addBinary('11', '1'))
console.log(addBinary('1010', '1011'))
