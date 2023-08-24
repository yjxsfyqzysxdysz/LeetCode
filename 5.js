/**
 * 最长回文子串
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
 *
 * 示例 1：
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 *
 * 示例 2：
 * 输入: "cbbd"
 * 输出: "bb"
 *
 * 提示：
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 */

/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//   if (!s || s.length < 2) return s
//   let start = 0
//   let end = 0
//   const expandCenter = function (s, l, r) {
//     while (l >= 0 && r < s.length && s[l] === s[r]) {
//       l--
//       r++
//     }
//     return r - l - 1
//   }

//   for (let i = 0; i < s.length; i++) {
//     let len = Math.max(expandCenter(s, i, i), expandCenter(s, i, i + 1)) // 中心点位奇数 比如: aabaa 中心在偶数 比如: aabbcc
//     if (len > end - start) {
//       start = i - Math.floor((len - 1) / 2)
//       end = i + Math.floor(len / 2)
//     }
//   }
//   return s.substring(start, end + 1)
// }

// var longestPalindrome = function (s) {
//   let str = s[0]
//   for (let i = 0; i < s.length; i++) {
//     let j = i + 1
//     while (j <= s.length) {
//       if (tmp === tmp.split('').reverse().join('')) {
//         str = str.length > tmp.length ? str : tmp
//       }
//     }
//   }
//   return str
// }

// 暴力解法
// var longestPalindrome = function (s) {
//   const len = s.length
//   if (len <= 1) return s
//   // 由于截取字符串有一定性能消耗
//   // 应记录 起始下标 及 长度
//   let maxLen = 1
//   let begin = 0
//   // 枚举所有长度大于 1 的回文子串
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (j - i + 1 > maxLen && check(i, j)) {
//         begin = i
//         maxLen = j - i + 1
//       }
//     }
//   }
//   function check(i, j) {
//     while (i < j) {
//       if (s[i++] != s[j--]) return false
//     }
//     return true
//   }
//   return s.substr(begin, maxLen)
// }

// 中心扩展法
// function longestPalindrome(s) {
//   if (s.length <= 1) return s
//   let res = []
//   for (let i = 1; i < 2 * (s.length - 1); i++) {
//     let start, end
//     if (i % 2) {
//       start = i / 2 - 0.5
//       end = i / 2 + 0.5
//     } else {
//       start = i / 2 - 1
//       end = i / 2 + 1
//     }
//     // 先判断在执行
//     while (start >= 0 && end < s.length && s[start] === s[end]) {
//       start--
//       end++
//     }
//     ++start
//     if (start <= end - 1 && (!res.length || res[1] - res[0] < end - start)) {
//       res = [start, end]
//     }
//   }
//   return res.length ? s.slice(...res) : s[0]
// }

// 中心扩展法
// function longestPalindrome(s) {
//   const len = s.length
//   if (len < 2) return s
//   let begin = 0
//   let maxLen = 1
//   for (let i = 0; i < len - 1; i++) {
//     const l = Math.max(check(i, i), check(i, i + 1))
//     if (l > maxLen) {
//       maxLen = l
//       begin = i - Math.floor((l - 1) / 2)
//     }
//   }
//   function check(left, right) {
//     while (left >= 0 && right < len && s[left] === s[right]) {
//       left--
//       right++
//     }
//     return right - left - 1
//   }
//   return s.substr(begin, maxLen)
// }

// 动态规划
function longestPalindrome(s) {
  /**
   * 记录之前的对比结果
   * 横轴 右子串边界
   * 纵轴 左子串边界
   * [
   *   [  T,  F,  F,  F,  F ],
   *   [ '',  T,  F,  F,  F ],
   *   [ '', '',  T,  F,  T ],
   *   [ '', '', '',  T,  F ],
   *   [ '', '', '', '',  T ]
   * ]
   */
  const len = s.length
  if (len < 2) return s
  let begin = 0
  let maxLen = 1
  const dp = Array(len)
    .fill('')
    .map(() => Array(len).fill(''))
  for (let i = 0; i < len; i++) {
    dp[i][i] = true
  }

  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      /**
       * dp[i][j] = s[i] == s[j] && dp[i+1][j-1]
       * 边界条件:
       * j - 1 - (i + 1) + 1 < 2
       * 整理 j - i < 3
       */
      if (s[i] !== s[j]) {
        dp[i][j] = false
      } else if (j - i < 3) {
        dp[i][j] = true
      } else {
        dp[i][j] = dp[i + 1][j - 1]
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        begin = i
      }
    }
  }

  return s.substr(begin, maxLen)
}

console.log(longestPalindrome('eabcb'))
console.log(longestPalindrome('babad'))
console.log(longestPalindrome('bb'))
console.log(longestPalindrome('a'))
console.log(longestPalindrome('abba'))
