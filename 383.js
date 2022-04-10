/**
 * 赎金信
 *
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
 * 如果可以，返回 true ；否则返回 false 。
 * magazine 中的每个字符只能在 ransomNote 中使用一次。
 *
 * 示例 1：
 * 输入：ransomNote = "a", magazine = "b"
 * 输出：false
 *
 * 示例 2：
 * 输入：ransomNote = "aa", magazine = "ab"
 * 输出：false
 *
 * 示例 3：
 * 输入：ransomNote = "aa", magazine = "aab"
 * 输出：true
 *
 * 提示：
 * 1 <= ransomNote.length, magazine.length <= 10^5
 * ransomNote 和 magazine 由小写英文字母组成
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// var canConstruct = function (ransomNote, magazine) {
//   if (ransomNote.length > magazine.length) return false
//   const r = Array.from(ransomNote)
//   const m = Array.from(magazine)
//   for (const e of r) {
//     const i = m.indexOf(e)
//     if (!~i) return false
//     m.splice(i, 1)
//   }
//   return true
// }

var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false
  const cnt = new Array(26).fill(0)
  for (const c of magazine) {
    cnt[c.charCodeAt() - 97]++
  }
  for (const c of ransomNote) {
    cnt[c.charCodeAt() - 97]--
    if (!~cnt[c.charCodeAt() - 97]) return false
  }
  return true
}

console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))
console.log(canConstruct('aa', 'aab'))
