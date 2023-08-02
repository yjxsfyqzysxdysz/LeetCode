/**
 * 删除字符使字符串变好
 *
 * 一个字符串如果没有 三个连续 相同字符，那么它就是一个 好字符串 。
 * 给你一个字符串 s ，请你从 s 删除 最少 的字符，使它变成一个 好字符串 。
 * 请你返回删除后的字符串。题目数据保证答案总是 唯一的 。
 *
 * 示例 1：
 * 输入：s = "leeetcode"
 * 输出："leetcode"
 * 解释：
 * 从第一组 'e' 里面删除一个 'e' ，得到 "leetcode" 。
 * 没有连续三个相同字符，所以返回 "leetcode" 。
 *
 * 示例 2：
 * 输入：s = "aaabaaaa"
 * 输出："aabaa"
 * 解释：
 * 从第一组 'a' 里面删除一个 'a' ，得到 "aabaaaa" 。
 * 从第二组 'a' 里面删除两个 'a' ，得到 "aabaa" 。
 * 没有连续三个相同字符，所以返回 "aabaa" 。
 *
 * 示例 3：
 * 输入：s = "aab"
 * 输出："aab"
 * 解释：没有连续三个相同字符，所以返回 "aab" 。
 *
 * 提示：
 * 1 <= s.length <= 10^5
 * s 只包含小写英文字母。
 */

/**
 * @param {string} s
 * @return {string}
 */
// var makeFancyString = function (s) {
//   while (/([a-z])(\1{2})/.test(s)) {
//     s = s.replace(/([a-z])(\1{2})/g, '$2')
//     console.log(s)
//   }
//   return s
// }

// var makeFancyString = function (s) {
//   for (let i = 0, len = s.length - 2; i < len; i++) {
//     const size = new Set([s[i]], s[i + 1], s[i + 2]]).size
//     if (size === 1) {
//       s = s.slice(0, i) + s.slice(i + 1)
//       i--
//       len--
//     }
//   }
//   return s
// }

// var makeFancyString = function (s) {
//   for (let i = 0, len = s.length - 2; i < len; i++) {
//     if (s[i] === s[i + 1] && s[i] === s[i + 2]) {
//       s = s.slice(0, i) + s.slice(i + 1)
//       i--
//       len--
//     }
//   }
//   return s
// }

var makeFancyString = function (s) {
  const stack = []
  for (const e of s) {
    if (stack.length < 2) {
      stack.push(e)
    } else if (e !== stack[stack.length - 1] || e !== stack[stack.length - 2]) {
      stack.push(e)
    }
  }
  return stack.join('')
}

console.log(makeFancyString('aaabaaaa'))
// console.log(makeFancyString('leeetcode'))
// console.log(makeFancyString('aaabaaaa'))
// console.log(makeFancyString('aab'))
