/**
 * 467. 环绕字符串中唯一的子字符串
 *
 * 把字符串 s 看作是 “abcdefghijklmnopqrstuvwxyz” 的无限环绕字符串，所以 s 看起来是这样的：
 * "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd...." .
 * 现在给定另一个字符串 p 。返回 s 中 唯一 的 p 的 非空子串 的数量 。
 *
 * 示例 1:
 * 输入: p = "a"
 * 输出: 1
 * 解释: 字符串 s 中只有一个"a"子字符。
 *
 * 示例 2:
 * 输入: p = "cac"
 * 输出: 2
 * 解释: 字符串 s 中的字符串“cac”只有两个子串“a”、“c”。.
 *
 * 示例 3:
 * 输入: p = "zab"
 * 输出: 6
 * 解释: 在字符串 s 中有六个子串“z”、“a”、“b”、“za”、“ab”、“zab”。
 *
 * 提示:
 * 1 <= p.length <= 10^5
 * p 由小写英文字母构成
 */

/**
 * @param {string} p
 * @return {number}
 */
// var findSubstringInWraproundString = function (p) {
//   const n = p.length
//   if (n === 1) return 1
//   const subList = new Set()
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i; j++) {
//       const str = p.slice(j, j + i + 1)
//       let sub = ''
//       if (str.length === 1) {
//         sub = str
//       } else if (
//         subList.has(str.slice(0, -1)) &&
//         [1, -25].includes(str.charCodeAt(i) - str.charCodeAt(i - 1))
//       ) {
//         sub = str
//       }
//       if (sub && !subList.has(sub)) {
//         subList.add(sub)
//       }
//     }
//   }
//   return subList.size
// }

// 前缀式 太复杂
// var findSubstringInWraproundString = function (p) {
//   const n = p.length
//   if (n === 1) return 1
//   const subList = new Set()
//   p += ' '
//   for (let start = 0, end = 1; end <= n; end++) {
//     const dif = p[end].charCodeAt() - p[end - 1].charCodeAt()
//     if (![1, -25].includes(dif) || end === n) {
//       subList.add(p.slice(start, end))
//       start = end
//     }
//   }
//   subList.forEach(e => {
//     const n = e.length
//     if (n === 1) return
//     for (let i = 0; i < n; i++) {
//       for (let j = i + 1; j <= n; j++) {
//         subList.add(e.slice(i, j))
//       }
//     }
//   })
//   return subList.size
// }

// 两个以同一个字符结尾的子串，长的那个子串必然包含短的那个
// 一种思路是总的连续子数组个数等于：以索引为 0 结尾的子数组个数 + 以索引为 1 结尾的子数组个数 + ... + 以索引为 n - 1 结尾的子数组个数
// var findSubstringInWraproundString = function (p) {
//   const arr = Array(26).fill(0)
//   for (let i = 0; i < p.length; i++) {
//     // 字符差 1; 防止出现负数
//     if (i && (p[i].charCodeAt() - p[i - 1].charCodeAt() + 26) % 26 === 1) k++
//     else k = 1
//     const index = p[i].charCodeAt() - 97
//     arr[index] = Math.max(arr[index], k)
//   }
//   return arr.reduce((a, b) => a + b)
// }

// 同 1297. 子串的最大出现次数
// 滑动窗口
var findSubstringInWraproundString = function (p) {
  p = '^' + p
  let k = 1,
    res = 0
  for (let i = 1; i < p.length; i++) {
    if ([1, -25].includes(p[i].charCodeAt() - p[i - 1].charCodeAt())) k++
    else k = 1
    res += k
  }
  return res
}

console.log(findSubstringInWraproundString('a'))
console.log(findSubstringInWraproundString('cac'))
console.log(findSubstringInWraproundString('zab'))
