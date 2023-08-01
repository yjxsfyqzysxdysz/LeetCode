/**
 * 最长的美好子字符串
 *
 * 当一个字符串 s 包含的每一种字母的大写和小写形式 同时 出现在 s 中，就称这个字符串 s 是 美好 字符串。比方说，"abABB" 是美好字符串，因为 'A' 和 'a' 同时出现了，且 'B' 和 'b' 也同时出现了。然而，"abA" 不是美好字符串因为 'b' 出现了，而 'B' 没有出现。
 * 给你一个字符串 s ，请你返回 s 最长的 美好子字符串 。如果有多个答案，请你返回 最早 出现的一个。如果不存在美好子字符串，请你返回一个空字符串。
 *
 * 示例 1：
 * 输入：s = "YazaAay"
 * 输出："aAa"
 * 解释："aAa" 是一个美好字符串，因为这个子串中仅含一种字母，其小写形式 'a' 和大写形式 'A' 也同时出现了。
 * "aAa" 是最长的美好子字符串。
 *
 * 示例 2：
 * 输入：s = "Bb"
 * 输出："Bb"
 * 解释："Bb" 是美好字符串，因为 'B' 和 'b' 都出现了。整个字符串也是原字符串的子字符串。
 *
 * 示例 3：
 * 输入：s = "c"
 * 输出：""
 * 解释：没有美好子字符串。
 *
 * 示例 4：
 * 输入：s = "dDzeE"
 * 输出："dD"
 * 解释："dD" 和 "eE" 都是最长美好子字符串。
 * 由于有多个美好子字符串，返回 "dD" ，因为它出现得最早。
 *
 * 提示：
 * 1 <= s.length <= 100
 * s 只包含大写和小写英文字母。
 */

/**
 * @param {string} s
 * @return {string}
 */
// var longestNiceSubstring = function (s) {
//   const len = s.length
//   if (len < 2) return ''
//   // 65-90 A-Z   97-122 a-z
//   const res = Array(len - 1).fill(' ')
//   for (let i = 0; i < len; i++) {
//     if (res[i] !== ' ') continue
//     const curCode = s[i].charCodeAt()
//     const otherCode = curCode > 95 ? curCode - 32 : curCode + 32
//     const otherCodeList = [...s.matchAll(`${String.fromCharCode(otherCode)}`)]
//     if (!otherCodeList.length) continue
//     const curCodeList = [...s.matchAll(`${s[i]}`)]
//     otherCodeList.forEach(e => {
//       res[e.index] = e[0]
//     })
//     curCodeList.forEach(e => {
//       res[e.index] = e[0]
//     })
//   }
//   if (!res.some(e => e === ' ')) return res.join('')
//   let maxVal = ''
//   for (let e of res.join('').split(' ')) {
//     const ret = longestNiceSubstring(e)
//     if (ret) {
//       maxVal = maxVal.length < ret.length ? ret : maxVal
//     }
//   }
//   return maxVal
// }

var longestNiceSubstring = function (s) {
  const n = s.length
  let maxPos = 0
  let maxLen = 0
  for (let i = 0; i < n; ++i) {
    let lower = 0
    let upper = 0
    for (let j = i; j < n; ++j) {
      if ('a' <= s[j] && s[j] <= 'z') {
        /**
         * 2进制 存储
         * 0 - 1
         * 1 - 10
         * 2 - 100
         * 3 - 1000
         * ...
         *
         * |= —— 1|0=1；0|0=0；1|1=1
         */
        lower |= 1 << (s[j].charCodeAt() - 'a'.charCodeAt())
      } else {
        upper |= 1 << (s[j].charCodeAt() - 'A'.charCodeAt())
      }
      if (lower === upper && j - i + 1 > maxLen) {
        maxPos = i
        maxLen = j - i + 1
      }
    }
  }
  return s.slice(maxPos, maxPos + maxLen)
}

console.log(longestNiceSubstring('qlERNCNVvWLOrrkAaDcXnlaDQxNEneRXQMKnrNN'))
console.log(longestNiceSubstring('BebjJE'))
console.log(longestNiceSubstring('cChH'))
console.log(longestNiceSubstring('YazaAay'))
console.log(longestNiceSubstring('Bb'))
console.log(longestNiceSubstring('c'))
console.log(longestNiceSubstring('dDzeE'))
