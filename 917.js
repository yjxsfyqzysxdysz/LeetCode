/**
 * 仅仅反转字母
 *
 * 给你一个字符串 s ，根据下述规则反转字符串：
 * 所有非英文字母保留在原有位置。
 * 所有英文字母（小写或大写）位置反转。
 * 返回反转后的 s 。
 *
 * 示例 1：
 * 输入：s = "ab-cd"
 * 输出："dc-ba"
 *
 * 示例 2：
 * 输入：s = "a-bC-dEf-ghIj"
 * 输出："j-Ih-gfE-dCba"
 *
 * 示例 3：
 * 输入：s = "Test1ng-Leet=code-Q!"
 * 输出："Qedo1ct-eeLg=ntse-T!"
 *
 * 提示
 * 1 <= s.length <= 100
 * s 仅由 ASCII 值在范围 [33, 122] 的字符组成
 * s 不含 '\"' 或 '\\'
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const res = []
  const fu = []
  for (let i = 0, len = s.length; i < len; i++) {
    const val = s[i]
    if (/[a-z]/i.test(val)) {
      res.push(val)
    } else {
      fu.push({ index: i, val })
    }
  }
  res.reverse()
  for (const { index, val } of fu) {
    res.splice(index, 0, val)
  }
  return res.join('')
}

console.log(reverseOnlyLetters('ab-cd'))
console.log(reverseOnlyLetters('a-bC-dEf-ghIj'))
console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'))
