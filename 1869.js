/**
 * 哪种连续子字符串更长
 *
 * 给你一个二进制字符串 s 。如果字符串中由 1 组成的 最长 连续子字符串 严格长于 由 0 组成的 最长 连续子字符串，返回 true ；否则，返回 false 。
 * 例如，s = "110100010" 中，由 1 组成的最长连续子字符串的长度是 2 ，由 0 组成的最长连续子字符串的长度是 3 。
 * 注意，如果字符串中不存在 0 ，此时认为由 0 组成的最长连续子字符串的长度是 0 。字符串中不存在 1 的情况也适用此规则。
 *
 * 示例 1：
 * 输入：s = "1101"
 * 输出：true
 * 解释：
 * 由 1 组成的最长连续子字符串的长度是 2："1101"
 * 由 0 组成的最长连续子字符串的长度是 1："1101"
 * 由 1 组成的子字符串更长，故返回 true 。
 *
 * 示例 2：
 * 输入：s = "111000"
 * 输出：false
 * 解释：
 * 由 1 组成的最长连续子字符串的长度是 3："111000"
 * 由 0 组成的最长连续子字符串的长度是 3："111000"
 * 由 1 组成的子字符串不比由 0 组成的子字符串长，故返回 false 。
 *
 * 示例 3：
 * 输入：s = "110100010"
 * 输出：false
 * 解释：
 * 由 1 组成的最长连续子字符串的长度是 2："110100010"
 * 由 0 组成的最长连续子字符串的长度是 3："110100010"
 * 由 1 组成的子字符串不比由 0 组成的子字符串长，故返回 false 。
 *
 * 提示：
 * 1 <= s.length <= 100
 * s[i] 不是 '0' 就是 '1'
 */

/**
 * @param {string} s
 * @return {boolean}
 */
// var checkZeroOnes = function (s) {
//   return (
//     (s.match(/1+/g) || []).reduce((res, cur) => (res.length > cur.length ? res : cur), '').length >
//     (s.match(/0+/g) || []).reduce((res, cur) => (res.length > cur.length ? res : cur), '').length
//   )
// }

// var checkZeroOnes = function (s) {
//   let oneMaxNum = 0,
//     zeroMaxNum = 0
//   for (let i = 0, curVal = '', curNum = 0, len = s.length; i < len; i++) {
//     if (s[i] !== curVal) {
//       curVal = s[i]
//       curNum = 0
//     }
//     if (s[i] === '1') {
//       curNum++
//       oneMaxNum = Math.max(oneMaxNum, curNum)
//     } else {
//       curNum++
//       zeroMaxNum = Math.max(zeroMaxNum, curNum)
//     }
//   }
//   return oneMaxNum > zeroMaxNum
// }

var checkZeroOnes = function (s) {
  let oneMaxNum = 0,
    zeroMaxNum = 0
  for (let i = 0, curVal = '', curNum = 0, len = s.length, halfLen = Math.ceil(len / 2); i < len; i++) {
    if (s[i] !== curVal) {
      curVal = s[i]
      curNum = 0
    }
    if (s[i] === '1') {
      curNum++
      oneMaxNum = Math.max(oneMaxNum, curNum)
    } else {
      curNum++
      zeroMaxNum = Math.max(zeroMaxNum, curNum)
    }
    if (i >= halfLen && oneMaxNum !== zeroMaxNum && Math.abs(oneMaxNum - zeroMaxNum) > curNum + len - i) {
      console.log(i, len, s[i], oneMaxNum, zeroMaxNum)
      break
    }
  }
  return oneMaxNum > zeroMaxNum
}

console.log(checkZeroOnes('1011110110110010110100100100101100101011101001010101010000011000111000000101')) // F
console.log(checkZeroOnes('00011011110')) // T
console.log(checkZeroOnes('1')) // T
console.log(checkZeroOnes('1101')) // T
console.log(checkZeroOnes('111000')) // F
console.log(checkZeroOnes('110100010')) // F
