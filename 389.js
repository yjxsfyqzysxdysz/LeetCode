/**
 * 找不同
 *
 * 给定两个字符串 s 和 t ，它们只包含小写字母。
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 请找出在 t 中被添加的字母。
 *
 * 示例 1：
 * 输入：s = "abcd", t = "abcde"
 * 输出："e"
 * 解释：'e' 是那个被添加的字母。
 *
 * 示例 2：
 * 输入：s = "", t = "y"
 * 输出："y"
 *
 * 提示：
 * 0 <= s.length <= 1000
 * t.length == s.length + 1
 * s 和 t 只包含小写字母
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// var findTheDifference = function (s, t) {
//   if (!s.length) return t
//     const r = Array.from(s)
//     const m = Array.from(t)
//     for (const e of m) {
//       const i = r.indexOf(e)
//       if (!~i) return e
//       r.splice(i, 1)
//     }
// }

// 计数
// var findTheDifference = function (s, t) {
//   if (!s.length) return t
//   const c = new Array(26).fill(0)
//   for (const ch of s) {
//     c[ch.charCodeAt() - 97]++
//   }
//   for (const ch of t) {
//     const i = ch.charCodeAt() - 97
//     c[i]--
//     if (!~c[i]) return ch
//   }
// }

// 求和
// var findTheDifference = function (s, t) {
//   if (!s.length) return t
//   let res = 0
//   for (let i = 0, len = t.length; i < len; i++) {
//     res += t.charCodeAt(i)
//   }
//   for (let i = 0, len = s.length; i < len; i++) {
//     res -= s.charCodeAt(i)
//   }
//   return String.fromCharCode(res)
// }

// 见 136 题，将其拼接为一整个长串，查找唯一项
// 使用 异或 解决
var findTheDifference = function (s, t) {
  let ret = 0
  for (const ch of s) {
    ret ^= ch.charCodeAt()
  }
  for (const ch of t) {
    ret ^= ch.charCodeAt()
  }
  return String.fromCharCode(ret)
}

console.log(findTheDifference('abcd', 'abcde'))
console.log(findTheDifference('', 'y'))
