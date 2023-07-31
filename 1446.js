/**
 * 连续字符
 *
 * 给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。
 * 请你返回字符串 s 的 能量。
 *
 * 示例 1：
 * 输入：s = "leetcode"
 * 输出：2
 * 解释：子字符串 "ee" 长度为 2 ，只包含字符 'e' 。
 *
 * 示例 2：
 * 输入：s = "abbcccddddeeeeedcba"
 * 输出：5
 * 解释：子字符串 "eeeee" 长度为 5 ，只包含字符 'e' 。
 *
 * 提示：
 * 1 <= s.length <= 500
 * s 只包含小写英文字母。
 */

/**
 * @param {string} s
 * @return {number}
 */
// var maxPower = function (s) {
//   let res = 0
//   loop: for (let i = 0, len = s.length; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (s[i] !== s[j]) {
//         i = j - 1
//         if (len - i - 1 < res) {
//           break loop
//         } else {
//           break
//         }
//       }
//       res = Math.max(res, j - i + 1)
//     }
//   }
//   return res || 1
// }

// var maxPower = function (s) {
//   let res = 1
//   for (let i = 1, len = s.length, tmp = 1; i < len; i++) {
//     if (s[i - 1] === s[i]) {
//       tmp++
//       res = Math.max(res, tmp)
//     } else {
//       tmp = 1
//     }
//   }
//   return res
// }

var maxPower = function (s) {
  let subStr = '',
    max = 0
  for (let a of s) {
    if (subStr[0] === a) {
      subStr += a
    } else {
      subStr = a
    }
    max = Math.max(max, subStr.length)
  }
  return max
}
console.log(maxPower('cc'))
console.log(maxPower('leetcode'))
console.log(maxPower('abbcccddddeeeeedcba'))
