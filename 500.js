/**
 * 键盘行
 *
 * 给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。
 * 美式键盘 中：
 * 第一行由字符 "qwertyuiop" 组成。
 * 第二行由字符 "asdfghjkl" 组成。
 * 第三行由字符 "zxcvbnm" 组成。
 *
 * 示例 1：
 * 输入：words = ["Hello","Alaska","Dad","Peace"]
 * 输出：["Alaska","Dad"]
 *
 * 示例 2：
 * 输入：words = ["omk"]
 * 输出：[]
 *
 * 示例 3：
 * 输入：words = ["adsdf","sfd"]
 * 输出：["adsdf","sfd"]
 *
 * 提示：
 * 1 <= words.length <= 20
 * 1 <= words[i].length <= 100
 * words[i] 由英文字母（小写和大写字母）组成
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const key = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
  return words.filter(e => {
    const len = e.length
    const reg = new RegExp(`[${key[0]}]{${len}}|[${key[1]}]{${len}}|[${key[2]}]{${len}}`, 'gi')
    return reg.test(e)
  })
}

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']))
console.log(findWords(['omk']))
console.log(findWords(['adsdf', 'sfd']))
