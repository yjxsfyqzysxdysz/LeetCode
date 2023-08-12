/**
 * 强密码检验器 II
 *
 * 如果一个密码满足以下所有条件，我们称它是一个 强 密码：
 * 它有至少 8 个字符。
 * 至少包含 一个小写英文 字母。
 * 至少包含 一个大写英文 字母。
 * 至少包含 一个数字 。
 * 至少包含 一个特殊字符 。特殊字符为："!@#$%^&*()-+" 中的一个。
 * 它 不 包含 2 个连续相同的字符（比方说 "aab" 不符合该条件，但是 "aba" 符合该条件）。
 * 给你一个字符串 password ，如果它是一个 强 密码，返回 true，否则返回 false 。
 *
 * 示例 1：
 * 输入：password = "IloveLe3tcode!"
 * 输出：true
 * 解释：密码满足所有的要求，所以我们返回 true 。
 *
 * 示例 2：
 * 输入：password = "Me+You--IsMyDream"
 * 输出：false
 * 解释：密码不包含数字，且包含 2 个连续相同的字符。所以我们返回 false 。
 *
 * 示例 3：
 * 输入：password = "1aB!"
 * 输出：false
 * 解释：密码不符合长度要求。所以我们返回 false 。
 *
 * 提示：
 * 1 <= password.length <= 100
 * password 包含字母，数字和 "!@#$%^&*()-+" 这些特殊字符。
 */

/**
 * @param {string} password
 * @return {boolean}
 */
// var strongPasswordCheckerII = function (password) {
//   if (password.length < 8) return false
//   if (!/[a-z]/.test(password)) return false
//   if (!/[A-Z]/.test(password)) return false
//   if (!/\d/.test(password)) return false
//   if (!/[!@#$%^&*()\-+]/.test(password)) return false
//   if (/([!@#$%^&*()\-+\da-zA-Z])\1{1,}/.test(password)) return false
//   return true
// }

var strongPasswordCheckerII = function (password) {
  const len = password.length
  if (len < 8) return false
  let status = 0
  for (let i = 0; i < len; i++) {
    const e = password[i]
    if (e === password[i + 1]) return false
    if ('0123456789'.includes(e)) {
      status |= 1 << 1
    } else if ('!@#$%^&*()-+'.includes(e)) {
      status |= 1 << 2
    } else if ('qwertyuiopasdfghjklzxcvbnm'.includes(e)) {
      status |= 1 << 3
    } else {
      status |= 1 << 4
    }
  }
  return status === 30
}

console.log(strongPasswordCheckerII('IloveLe3tcode!'))
console.log(strongPasswordCheckerII('Me+You--IsMyDream'))
console.log(strongPasswordCheckerII('1aB!'))
console.log(strongPasswordCheckerII('-Aa1a1a1'))
console.log(strongPasswordCheckerII('11A!A!Aa'))
console.log(strongPasswordCheckerII('IloveLe3tcode!'))
