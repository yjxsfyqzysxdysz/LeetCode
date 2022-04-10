/**
 * 同构字符串
 *
 * 给定两个字符串 s 和 t ，判断它们是否是同构的。
 * 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
 * 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
 *
 * 示例 1:
 * 输入：s = "egg", t = "add"
 * 输出：true
 *
 * 示例 2：
 * 输入：s = "foo", t = "bar"
 * 输出：false
 *
 * 示例 3：
 * 输入：s = "paper", t = "title"
 * 输出：true
 *
 * 提示：
 * 1 <= s.length <= 5 * 104
 * t.length == s.length
 * s 和 t 由任意有效的 ASCII 字符组成
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = new Map()
  for (let i = 0, len = s.length; i < len; i++) {
    const [sItem, tItem] = [`_${s[i]}`, `+${t[i]}`]
    if (!map.has(sItem)) {
      map.set(sItem, tItem)
    }
    if (!map.has(tItem)) {
      map.set(tItem, sItem)
    }
    
    if (map.get(sItem) !== tItem || map.get(tItem) !== sItem) {
      return false
    }
  }
  return true
}

console.log(isIsomorphic('badc', 'baba'))
console.log(isIsomorphic('bbbaaaba', 'aaabbbba'))
console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
