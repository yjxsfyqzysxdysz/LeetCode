/**
 * 亲密字符串
 *
 * 给你两个字符串 s 和 goal ，只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果，就返回 true ；否则返回 false 。
 * 交换字母的定义是：取两个下标 i 和 j （下标从 0 开始）且满足 i != j ，接着交换 s[i] 和 s[j] 处的字符。
 * 例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。
 *
 * 示例 1：
 * 输入：s = "ab", goal = "ba"
 * 输出：true
 * 解释：你可以交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 相等。
 *
 * 示例 2：
 * 输入：s = "ab", goal = "ab"
 * 输出：false
 * 解释：你只能交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 不相等。
 *
 * 示例 3：
 * 输入：s = "aa", goal = "aa"
 * 输出：true
 * 解释：你可以交换 s[0] = 'a' 和 s[1] = 'a' 生成 "aa"，此时 s 和 goal 相等。
 *
 * 提示：
 * 1 <= s.length, goal.length <= 2 * 10^4
 * s 和 goal 由小写英文字母组成
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false
  if (s === goal) {
    return new Set(s.split('')).size !== s.length
  }
  let index = 0
  const preList = []
  const nextList = []
  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] !== goal[i]) {
      if (++index > 2) return false
      preList.push(s[i])
      nextList.push(goal[i])
    }
  }
  return index === 2 && preList[0] === nextList[1] && preList[1] === nextList[0]
}

// console.log(buddyStrings('ab', 'ba'))
// console.log(buddyStrings('ab', 'ab'))
// console.log(buddyStrings('aa', 'aa'))
console.log(buddyStrings('abab', 'abab'))
