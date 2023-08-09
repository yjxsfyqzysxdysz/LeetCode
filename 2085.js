/**
 * 统计出现过一次的公共字符串
 *
 * 给你两个字符串数组 words1 和 words2 ，请你返回在两个字符串数组中 都恰好出现一次 的字符串的数目。
 *
 * 示例 1：
 * 输入：words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
 * 输出：2
 * 解释：
 * - "leetcode" 在两个数组中都恰好出现一次，计入答案。
 * - "amazing" 在两个数组中都恰好出现一次，计入答案。
 * - "is" 在两个数组中都出现过，但在 words1 中出现了 2 次，不计入答案。
 * - "as" 在 words1 中出现了一次，但是在 words2 中没有出现过，不计入答案。
 * 所以，有 2 个字符串在两个数组中都恰好出现了一次。
 *
 * 示例 2：
 * 输入：words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
 * 输出：0
 * 解释：没有字符串在两个数组中都恰好出现一次。
 *
 * 示例 3：
 * 输入：words1 = ["a","ab"], words2 = ["a","a","a","ab"]
 * 输出：1
 * 解释：唯一在两个数组中都出现一次的字符串是 "ab" 。
 *
 * 提示：
 * 1 <= words1.length, words2.length <= 1000
 * 1 <= words1[i].length, words2[j].length <= 30
 * words1[i] 和 words2[j] 都只包含小写英文字母。
 */

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  const map1 = {}
  const map2 = {}
  let resNum = 0
  for (const e of words1) {
    map1[e] = (map1[e] || 0) + 1
  }
  for (const e of words2) {
    map2[e] = (map2[e] || 0) + 1
  }
  for (const key in map1) {
    if (map1[key] !== 1 || map2[key] !== 1) continue
    resNum++
  }
  return resNum
}

// var countWords = function (words1, words2) {
//   const map1 = {}
//   let resNum = 0
//   for (const e of [...words1, ...words2]) {
//     map1[e] = (map1[e] || 0) + 1
//   }
//   for (const key in map1) {
//     if (map1[key] === 2 && words1.indexOf(key) !== -1 && words2.indexOf(key) !== -1) resNum++
//   }
//   return resNum
// }

console.log(countWords(['leetcode', 'is', 'amazing', 'as', 'is'], ['amazing', 'leetcode', 'is']))
console.log(countWords(['b', 'bb', 'bbb'], ['a', 'aa', 'aaa']))
console.log(countWords(['a', 'ab'], ['a', 'a', 'a', 'ab']))
