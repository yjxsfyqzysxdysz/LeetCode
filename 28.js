/**
 * 实现 strStr()
 *
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 *
 * 示例 1:
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 *
 * 示例 2:
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 *
 * 说明:
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 */

// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function (haystack, needle) {
//   return haystack.indexOf(needle)
// }

// var strStr = function (haystack, needle) {
//   return haystack.search(needle)
// }

var strStr = function (haystack, needle) {
  let l = 0,
    index = 0,
    hLen = haystack.length,
    nLen = needle.length
  while (l < hLen) {
    // 定标起始指针
    if (haystack[l] !== needle[index]) {
      l++
      continue
    }
    // 确认起始指针后 逐个校验
    index++
    for (; index < nLen; index++) {
      // 校验失败 起始指针 +1, needle 指针恢复
      if (haystack[l + index] !== needle[index]) {
        l++
        index = 0
        break
      }
    }
    // needle 指针未恢复 则校验未失败
    if (index) return l
  }
  return -1
}

console.log(strStr('hello', 'll'))
