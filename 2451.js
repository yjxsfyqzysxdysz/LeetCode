/**
 * 差值数组不同的字符串
 *
 * 给你一个字符串数组 words ，每一个字符串长度都相同，令所有字符串的长度都为 n 。
 * 每个字符串 words[i] 可以被转化为一个长度为 n - 1 的 差值整数数组 difference[i] ，其中对于 0 <= j <= n - 2 有 difference[i][j] = words[i][j+1] - words[i][j] 。注意两个字母的差值定义为它们在字母表中 位置 之差，也就是说 'a' 的位置是 0 ，'b' 的位置是 1 ，'z' 的位置是 25 。
 * 比方说，字符串 "acb" 的差值整数数组是 [2 - 0, 1 - 2] = [2, -1] 。
 * words 中所有字符串 除了一个字符串以外 ，其他字符串的差值整数数组都相同。你需要找到那个不同的字符串。
 * 请你返回 words中 差值整数数组 不同的字符串。
 *
 * 示例 1：
 * 输入：words = ["adc","wzy","abc"]
 * 输出："abc"
 * 解释：
 * - "adc" 的差值整数数组是 [3 - 0, 2 - 3] = [3, -1] 。
 * - "wzy" 的差值整数数组是 [25 - 22, 24 - 25]= [3, -1] 。
 * - "abc" 的差值整数数组是 [1 - 0, 2 - 1] = [1, 1] 。
 * 不同的数组是 [1, 1]，所以返回对应的字符串，"abc"。
 *
 * 示例 2：
 * 输入：words = ["aaa","bob","ccc","ddd"]
 * 输出："bob"
 * 解释：除了 "bob" 的差值整数数组是 [13, -13] 以外，其他字符串的差值整数数组都是 [0, 0] 。
 *
 * 提示：
 * 3 <= words.length <= 100
 * n == words[i].length
 * 2 <= n <= 20
 * words[i] 只含有小写英文字母。
 */

/**
 * @param {string[]} words
 * @return {string}
 */
// var oddString = function (words) {
//   let res = new Map()
//   let index = 0
//   for (const e of words) {
//     let num = ''
//     for (let i = 0; i < e.length - 1; i++) {
//       num += e[i].charCodeAt() - e[i + 1].charCodeAt()
//     }
//     index++
//     if (index === 1) {
//       res.set(num, e)
//     } else if (!res.has(num)) {
//       if (index === 2) {
//         res.set(num, e)
//       } else {
//         return e
//       }
//     } else if (res.size === 2) {
//       for (const [key, value] of res.entries()) {
//         if (key !== num) return value
//       }
//     }
//   }
// }

var oddString = function (words) {
  const map = {}
  let index = 0
  for (const e of words) {
    let num = ''
    for (let i = 1; i < e.length; i++) {
      num += e.charCodeAt(i) - e.charCodeAt(i - 1) + ','
    }
    console.log(num)
    index++
    if (index >= 3) {
      if (map[num]) {
        for (const f in map) {
          if (f != num) return map[f][0]
        }
      } else {
        return e
      }
    }
    if (!map[num]) map[num] = []
    map[num].push(e)
  }
}

console.log(oddString(['abm', 'bcn', 'alm']))
// console.log(oddString(['ddd', 'poo', 'baa', 'onn']))
// console.log(oddString(['adc', 'wzy', 'abc']))
// console.log(oddString(['aaa', 'bob', 'ccc', 'ddd']))
