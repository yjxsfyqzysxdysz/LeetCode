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
 *
 * 提示：
 * 1 <= haystack.length, needle.length <= 10^4
 * haystack 和 needle 仅由小写英文字符组成
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

// var strStr = function (haystack, needle) {
//   let l = 0,
//     index = 0,
//     hLen = haystack.length,
//     nLen = needle.length
//   while (l < hLen) {
//     // 定标起始指针
//     if (haystack[l] !== needle[index]) {
//       l++
//       continue
//     }
//     // 确认起始指针后 逐个校验
//     index++
//     for (; index < nLen; index++) {
//       // 校验失败 起始指针 +1, needle 指针恢复
//       if (haystack[l + index] !== needle[index]) {
//         l++
//         index = 0
//         break
//       }
//     }
//     // needle 指针未恢复 则校验未失败
//     if (index) return l
//   }
//   return -1
// }

// KMP 算法
// 无哨兵
function getNextList(list) {
  const len = list.length
  // 构建 next 数组
  // 首项为 0
  const next = Array(len).fill(0)
  // 原链从 1 开始
  // 匹配链从 0 开始
  for (let i = 1, j = 0; i < len; ) {
    if (list[j] === list[i]) {
      next[i] = j + 1
      i++
      j++
    } else {
      // list[i] != list[j]
      // j 指针指向前一位置的 next 数组所对应的值
      // j == 0 边界
      if (j === 0) {
        next[i] = 0
        i++
      } else {
        j = next[j - 1]
      }
    }
  }
  return next
}

var strStr = function (s, p) {
  if (!p) return 0
  // next 数组
  const next = getNextList(p)
  // s:    [a, b, e, a, b, a, b, e, a, b, f]
  // p:    [a, b, e, a, b, f]
  // next: [0, 0, 0, 1, 2, 0]
  for (let i = 0, j = 0, n = s.length, m = p.length; i < n; i++) {
    // 匹配不成功，needle 指针 j 回退并继续比较
    while (j && s[i] != p[j]) j = next[j - 1]
    // 匹配成功，needle 指针 j 自加 1
    if (s[i] == p[j]) j++
    // 边界 j == m 时，子串全部匹配完 返回下标
    if (j == m) return i - m + 1
  }
  return -1
}

/**
 * 带哨兵
 * 往原串和匹配串头部追加一个空格（哨兵）
 * 目的是让 j 下标从 0 开始，省去 j 从 -1 开始的麻烦
 */
// var strStr = function (s, p) {
//   let n = s.length,
//     m = p.length
//   if (m == 0) return 0
//   //设置哨兵
//   s = ' ' + s
//   p = ' ' + p
//   const next = Array(m + 1).fill(0)
//   //预处理next数组
//   for (let i = 2, j = 0; i <= m; i++) {
//     while (j && p[i] != p[j + 1]) j = next[j]
//     if (p[i] == p[j + 1]) j++
//     next[i] = j
//   }
//   // 匹配过程
//   for (let i = 1, j = 0; i <= n; i++) {
//     while (j && s[i] != p[j + 1]) {
//       j = next[j]
//     }
//     if (s[i] == p[j + 1]) j++
//     if (j == m) return i - m
//   }
//   return -1
// }

console.log(strStr('abeababeabf', 'abeabf')) // next:     [0, 0, 0, 1, 2, 0]
// console.log(strStr('hello', 'll'))
// console.log(strStr('aaaaa', 'bba'))
