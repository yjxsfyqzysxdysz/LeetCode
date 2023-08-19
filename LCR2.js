/**
 * 二进制求和
 *
 * 给定两个 01 字符串 a 和 b ，请计算它们的和，并以二进制字符串的形式输出。
 * 输入为 非空 字符串且只包含数字 1 和 0。
 *
 * 示例 1:
 * 输入: a =
 * 输出: "101"
 *
 * 示例 2:
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 *
 * 提示：
 * 每个字符串仅由字符 '0' 或 '1' 组成。
 * 1 <= a.length, b.length <= 10^4
 * 字符串如果不是 "0" ，就都不含前导零。
 *
 * 注意：本题与主站 67 题相同：https://leetcode-cn.com/problems/add-binary/
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const len = Math.max(a.length, b.length)
  a = a.padStart(len, '0')
  b = b.padStart(len, '0')
  let carry = 0,
    res = ''
  for (let i = len - 1; i >= 0; i--) {
    const [hiW, lowW] = (+a[i] + +b[i] + +carry).toString(2).padStart(2, '0')
    carry = hiW
    res = lowW + res
  }
  return +carry ? carry + res : res
}

console.log(addBinary('11', '10'))
console.log(addBinary('1010', '1011'))
