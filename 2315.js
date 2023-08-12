/**
 * 统计星号
 *
 * 给你一个字符串 s ，每 两个 连续竖线 '|' 为 一对 。换言之，第一个和第二个 '|' 为一对，第三个和第四个 '|' 为一对，以此类推。
 * 请你返回 不在 竖线对之间，s 中 '*' 的数目。
 * 注意，每个竖线 '|' 都会 恰好 属于一个对。
 *
 * 示例 1：
 * 输入：s = "l|*e*et|c**o|*de|"
 * 输出：2
 * 解释：不在竖线对之间的字符加粗加斜体后，得到字符串："l|*e*et|c**o|*de|" 。
 * 第一和第二条竖线 '|' 之间的字符不计入答案。
 * 同时，第三条和第四条竖线 '|' 之间的字符也不计入答案。
 * 不在竖线对之间总共有 2 个星号，所以我们返回 2 。
 *
 * 示例 2：
 * 输入：s = "iamprogrammer"
 * 输出：0
 * 解释：在这个例子中，s 中没有星号。所以返回 0 。
 *
 * 示例 3：
 * 输入：s = "yo|uar|e**|b|e***au|tifu|l"
 * 输出：5
 * 解释：需要考虑的字符加粗加斜体后："yo|uar|e**|b|e***au|tifu|l" 。不在竖线对之间总共有 5 个星号。所以我们返回 5 。
 *
 * 提示：
 * 1 <= s.length <= 1000
 * s 只包含小写英文字母，竖线 '|' 和星号 '*' 。
 * s 包含 偶数 个竖线 '|' 。
 */

/**
 * @param {string} s
 * @return {number}
 */
// var countAsterisks = function (s) {
//   return (
//     s
//       .replace(/(^[a-z*]*\|?)|(\|?[a-z*]*$)/g, '')
//       .split('|')
//       .reduce((res, cur, index) => {
//         if (index % 2) return res + (cur.match(/\*/g) || []).length
//         return res
//       }, 0) +
//     (s.match(/(^[a-z*]*\|?)|(\|?[a-z*]*$)/g) || []).reduce((res, cur) => res + (cur.match(/\*/g) || []).length, 0)
//   )
// }

var countAsterisks = function (s) {
  let num = 0
  for (let i = 0, len = s.length, status = true; i < len; i++) {
    const val = s[i]
    if (val === '|') {
      status = !status
      continue
    } else if (status && val === '*') {
      num++
    }
  }
  return num
}

console.log(countAsterisks('*||*|||||*|*|***||*||***|'))
console.log(countAsterisks('l|*e*et|c**o|*de|'))
console.log(countAsterisks('iamprogrammer'))
console.log(countAsterisks('yo|uar|e**|b|e***au|tifu|l'))
