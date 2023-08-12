/**
 * 兼具大小写的最好英文字母
 *
 * 给你一个由英文字母组成的字符串 s ，请你找出并返回 s 中的 最好 英文字母。返回的字母必须为大写形式。如果不存在满足条件的字母，则返回一个空字符串。
 * 最好 英文字母的大写和小写形式必须 都 在 s 中出现。
 * 英文字母 b 比另一个英文字母 a 更好 的前提是：英文字母表中，b 在 a 之 后 出现。
 *
 * 示例 1：
 * 输入：s = "lEeTcOdE"
 * 输出："E"
 * 解释：
 * 字母 'E' 是唯一一个大写和小写形式都出现的字母。
 *
 * 示例 2：
 * 输入：s = "arRAzFif"
 * 输出："R"
 * 解释：
 * 字母 'R' 是大写和小写形式都出现的最好英文字母。
 * 注意 'A' 和 'F' 的大写和小写形式也都出现了，但是 'R' 比 'F' 和 'A' 更好。
 *
 * 示例 3：
 * 输入：s = "AbCdEfGhIjK"
 * 输出：""
 * 解释：
 * 不存在大写和小写形式都出现的字母。
 *
 * 提示：
 * 1 <= s.length <= 1000
 * s 由小写和大写英文字母组成
 */

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let upList = 0,
    lowList = 0
  const aCode = 'a'.charCodeAt()
  const ACode = 'A'.charCodeAt()
  for (const e of s) {
    if (e >= 'a') {
      lowList |= 1 << (e.charCodeAt() - aCode + 1)
    } else {
      upList |= 1 << (e.charCodeAt() - ACode + 1)
    }
  }
  const sameVal = upList & lowList
  if (!sameVal) return ''
  const valIndex = sameVal.toString(2).length - 1
  return String.fromCharCode(ACode + valIndex - 1)
}

console.log(greatestLetter('lEeTcOdE'))
console.log(greatestLetter('arRAzFif'))
console.log(greatestLetter('AbCdEfGhIjK'))
