/**
 * LCR 018. 验证回文串
 *
 * 给定一个字符串 s ，验证 s 是否是 回文串 ，只考虑字母和数字字符，可以忽略字母的大小写。
 * 本题中，将空字符串定义为有效的 回文串 。
 *
 * 示例 1:
 * 输入: s = "A man, a plan, a canal: Panama"
 * 输出: true
 * 解释："amanaplanacanalpanama" 是回文串
 *
 * 示例 2:
 * 输入: s = "race a car"
 * 输出: false
 * 解释："raceacar" 不是回文串
 *
 * 提示：
 * 1 <= s.length <= 2 * 105
 * 字符串 s 由 ASCII 字符组成
 *
 * 注意：本题与主站 125 题相同： https://leetcode-cn.com/problems/valid-palindrome/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function (s) {
//   s = s.match(/[a-z\d]+/gi)
//   if (!s) return true
//   s = s.join('').toLocaleLowerCase()
//   for (let i = 0, len = s.length, arr = [], middle = Math.floor(len / 2), isM = len % 2; i < len; i++) {
//     if (i < middle) {
//       arr.push(s[i])
//     } else if (i > middle || (i === middle && !isM)) {
//       if (arr.pop() !== s[i]) return false
//     }
//   }
//   return true
// }

var isPalindrome = function (s) {
  const arr = []
  for (const e of s) {
    if (/[a-z\d]/i.test(e)) arr.push(e)
  }
  return arr.join('').toLocaleLowerCase() === arr.reverse().join('').toLocaleLowerCase()
}

console.log(isPalindrome(' '))
console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))
