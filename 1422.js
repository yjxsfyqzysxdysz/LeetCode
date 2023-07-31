/**
 * 分割字符串的最大得分
 *
 * 给你一个由若干 0 和 1 组成的字符串 s ，请你计算并返回将该字符串分割成两个 非空 子字符串（即 左 子字符串和 右 子字符串）所能获得的最大得分。
 * 「分割字符串的得分」为 左 子字符串中 0 的数量加上 右 子字符串中 1 的数量。
 *
 * 示例 1：
 * 输入：s = "011101"
 * 输出：5
 * 解释：
 * 将字符串 s 划分为两个非空子字符串的可行方案有：
 * 左子字符串 = "0" 且 右子字符串 = "11101"，得分 = 1 + 4 = 5
 * 左子字符串 = "01" 且 右子字符串 = "1101"，得分 = 1 + 3 = 4
 * 左子字符串 = "011" 且 右子字符串 = "101"，得分 = 1 + 2 = 3
 * 左子字符串 = "0111" 且 右子字符串 = "01"，得分 = 1 + 1 = 2
 * 左子字符串 = "01110" 且 右子字符串 = "1"，得分 = 2 + 1 = 3
 *
 * 示例 2：
 * 输入：s = "00111"
 * 输出：5
 * 解释：当 左子字符串 = "00" 且 右子字符串 = "111" 时，我们得到最大得分 = 2 + 3 = 5
 *
 * 示例 3：
 * 输入：s = "1111"
 * 输出：3
 *
 * 提示：
 * 2 <= s.length <= 500
 * 字符串 s 仅由字符 '0' 和 '1' 组成。
 */

/**
 * @param {string} s
 * @return {number}
 */
// var maxScore = function (s) {
//   let val = 0
//   for (let i = 1, len = s.length; i < len; i++) {
//     const leftVal = (s.slice(0, i).match(/0/g) || []).length
//     const rightVal = (s.slice(i).match(/1/g) || []).length
//     val = Math.max(val, leftVal + rightVal)
//   }
//   return val
// }

// var maxScore = function (s) {
//   const map = [0, 0]
//   for (const e of s) {
//     map[e]++
//   }
//   map[0] = 0
//   let maxVal = 0
//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] === '0') {
//       map[0]++
//     } else {
//       map[1]--
//     }
//     maxVal = Math.max(maxVal, map[0] + map[1])
//   }
//   return maxVal
// }

var maxScore = function (s) {
  const map = [0, (s.match(/1/g) || []).length]
  const maxVals = []
  for (let i = 0; i < s.length - 1; i++) {
    s[i] === '0' ? map[0]++ : map[1]--
    maxVals.push(map[0] + map[1])
  }
  return Math.max(...maxVals)
}

console.log(maxScore('01001'))
console.log(maxScore('011101'))
console.log(maxScore('00111'))
console.log(maxScore('1111'))