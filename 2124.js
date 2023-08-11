/**
 * 检查是否所有 A 都在 B 之前
 *
 * 给你一个 仅 由字符 'a' 和 'b' 组成的字符串  s 。如果字符串中 每个 'a' 都出现在 每个 'b' 之前，返回 true ；否则，返回 false 。
 *
 * 示例 1：
 * 输入：s = "aaabbb"
 * 输出：true
 * 解释：
 * 'a' 位于下标 0、1 和 2 ；而 'b' 位于下标 3、4 和 5 。
 * 因此，每个 'a' 都出现在每个 'b' 之前，所以返回 true 。
 *
 * 示例 2：
 * 输入：s = "abab"
 * 输出：false
 * 解释：
 * 存在一个 'a' 位于下标 2 ，而一个 'b' 位于下标 1 。
 * 因此，不能满足每个 'a' 都出现在每个 'b' 之前，所以返回 false 。
 *
 * 示例 3：
 * 输入：s = "bbb"
 * 输出：true
 * 解释：
 * 不存在 'a' ，因此可以视作每个 'a' 都出现在每个 'b' 之前，所以返回 true 。
 *
 * 提示：
 * 1 <= s.length <= 100
 * s[i] 为 'a' 或 'b'
 */

/**
 * @param {string} s
 * @return {boolean}
 */
// var checkString = function (s) {
//   const bIndex = s.indexOf('b')
//   if (bIndex == -1) return true
//   const aIndex = s.indexOf('a', bIndex)
//   return aIndex == -1
// }

// var checkString = function (s) {
//   const bIndex = s.indexOf('b')
//   const aIndex = s.lastIndexOf('a')
//   return [aIndex, bIndex].includes(-1) || aIndex < bIndex
// }

// var checkString = function (s) {
//   return !/ba/.test(s)
// }

var checkString = function (s) {
  return s.lastIndexOf('ba') === -1
}

console.log(checkString('aaabbb'))
console.log(checkString('abab'))
console.log(checkString('bbb'))
