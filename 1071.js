/**
 * 字符串的最大公因子
 *
 * 对于字符串 s 和 t，只有在 s = t + ... + t（t 自身连接 1 次或多次）时，我们才认定 “t 能除尽 s”。
 * 给定两个字符串 str1 和 str2 。返回 最长字符串 x，要求满足 x 能除尽 str1 且 X 能除尽 str2 。
 *
 * 示例 1：
 * 输入：str1 = "ABCABC", str2 = "ABC"
 * 输出："ABC"
 *
 * 示例 2：
 * 输入：str1 = "ABABAB", str2 = "ABAB"
 * 输出："AB"
 *
 * 示例 3：
 * 输入：str1 = "LEET", str2 = "CODE"
 * 输出：""
 *
 * 提示：
 * 1 <= str1.length, str2.length <= 1000
 * str1 和 str2 由大写英文字母组成
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  const str = str1 + str2
  let [lenStr1, lenStr2] = [str1.length, str2.length]
  // 查找最大公约数
  while (lenStr1 !== lenStr2) {
    if (lenStr1 < lenStr2) {
      lenStr2 -= lenStr1
    } else {
      lenStr1 -= lenStr2
    }
  }
  const tag = str1.slice(0, lenStr1)
  if (str === ''.padEnd(str.length, tag)) return tag
  return ''
}

console.log(gcdOfStrings('ABCABC', 'ABC'))
console.log(gcdOfStrings('ABABAB', 'ABAB'))
console.log(gcdOfStrings('LEET', 'CODE'))