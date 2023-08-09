/**
 * 统计字符串中的元音子字符串
 *
 * 子字符串 是字符串中的一个连续（非空）的字符序列。
 * 元音子字符串 是 仅 由元音（'a'、'e'、'i'、'o' 和 'u'）组成的一个子字符串，且必须包含 全部五种 元音。
 * 给你一个字符串 word ，统计并返回 word 中 元音子字符串的数目 。
 *
 * 示例 1：
 * 输入：word = "aeiouu"
 * 输出：2
 * 解释：下面列出 word 中的元音子字符串（斜体加粗部分）：
 * - "**aeiou**u"
 * - "**aeiouu**"
 *
 * 示例 2：
 * 输入：word = "unicornarihan"
 * 输出：0
 * 解释：word 中不含 5 种元音，所以也不会存在元音子字符串。
 *
 * 示例 3：
 * 输入：word = "cuaieuouac"
 * 输出：7
 * 解释：下面列出 word 中的元音子字符串（斜体加粗部分）：
 * - "c**uaieuo**uac"
 * - "c**uaieuou**ac"
 * - "c**uaieuoua**c"
 * - "cu**aieuo**uac"
 * - "cu**aieuou**ac"
 * - "cu**aieuoua**c"
 * - "cua**ieuoua**c"
 *
 * 示例 4：
 * 输入：word = "bbaeixoubb"
 * 输出：0
 * 解释：所有包含全部五种元音的子字符串都含有辅音，所以不存在元音子字符串。
 *
 * 提示：
 * 1 <= word.length <= 100
 * word 仅由小写英文字母组成
 */

/**
 * @param {string} word
 * @return {number}
 */
// var countVowelSubstrings = function (word) {
//   const len = word.length
//   let resNum = 0
//   if (len < 5) return resNum
//   const yin = new Set(['a', 'e', 'i', 'o', 'u'])
//   for (let i = 0; i <= len - 5; i++) {
//     for (let j = i + 5; j <= len; j++) {
//       const cur = new Set(word.slice(i, j))
//       if ([...cur].every(o => yin.has(o))) {
//           if ([...yin].every(o => cur.has(o))) {
//           resNum++
//         }
//       } else {
//         break
//       }
//     }
//   }
//   return resNum
// }

// var countVowelSubstrings = function (word) {
//   const a = new Set(['a', 'e', 'i', 'o', 'u'])
//   let resNum = 0
//   for (let i = 0; i <= word.length - 5; i++) {
//     const c = new Set()
//     for (let j = i + 5; j <= word.length; j++) {
//       if (a.has(word[j])) {
//         c.add(word[j])
//         if (c.size === 5) {
//           resNum++
//         }
//       } else {
//         break
//       }
//     }
//   }
//   return resNum
// }

var countVowelSubstrings = function (word) {
  let ans = 0
  for (let i = 0; i < word.length; i++) {
    const set = new Set()
    for (let j = i; j < word.length; j++) {
      if (!'aeiou'.includes(word[j])) break
      set.add(word[j])
      if (set.size === 5) ans++
    }
  }
  return ans
}

// console.log(countVowelSubstrings('aeiouu'))
// console.log(countVowelSubstrings('unicornarihan'))
// console.log(countVowelSubstrings('cuaieuouac'))
// console.log(countVowelSubstrings('bbaeixoubb'))
console.log(countVowelSubstrings('duuebuaeeeeeeuaoeiueaoui'))
