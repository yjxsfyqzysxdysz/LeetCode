/**
 * 查找共用字符
 *
 * 给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案。
 *
 * 示例 1：
 * 输入：words = ["bella","label","roller"]
 * 输出：["e","l","l"]
 *
 * 示例 2：
 * 输入：words = ["cool","lock","cook"]
 * 输出：["c","o"]
 *
 * 提示：
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 100
 * words[i] 由小写英文字母组成
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const defineHash = []
  for (let i = 0; i < words.length; i++) {
    const currHash = new Array(26).fill(0)
    for (let j = 0; j < words[i].length; j++) {
      currHash[words[i][j].charCodeAt() - 97]++
    }
    if (!defineHash.length) {
      defineHash.push(...currHash)
    } else {
      for (let j = 0; j < 26; j++) {
        defineHash[j] = Math.min(defineHash[j], currHash[j])
      }
    }
  }
  return defineHash.reduce((total, cur, index) => {
    if (!cur) return total
    const str = String.fromCharCode(index + 97)
    return total + str.padEnd(cur, str)
  }, '').split('')
}

console.log(commonChars(['bella', 'label', 'roller']))
console.log(commonChars(['cool', 'lock', 'cook']))
