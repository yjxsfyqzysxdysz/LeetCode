/**
 * 较大分组的位置
 *
 * 在一个由小写字母构成的字符串 s 中，包含由一些连续的相同字符所构成的分组。
 * 例如，在字符串 s = "abbxxxxzyy" 中，就含有 "a", "bb", "xxxx", "z" 和 "yy" 这样的一些分组。
 * 分组可以用区间 [start, end] 表示，其中 start 和 end 分别表示该分组的起始和终止位置的下标。上例中的 "xxxx" 分组用区间表示为 [3,6] 。
 * 我们称所有包含大于或等于三个连续字符的分组为 较大分组 。
 * 找到每一个 较大分组 的区间，按起始位置下标递增顺序排序后，返回结果。
 *
 * 示例 1：
 * 输入：s = "abbxxxxzzy"
 * 输出：[[3,6]]
 * 解释："xxxx" 是一个起始于 3 且终止于 6 的较大分组。
 *
 * 示例 2：
 * 输入：s = "abc"
 * 输出：[]
 * 解释："a","b" 和 "c" 均不是符合要求的较大分组。
 *
 * 示例 3：
 * 输入：s = "abcdddeeeeaabbbcd"
 * 输出：[[3,5],[6,9],[12,14]]
 * 解释：较大分组为 "ddd", "eeee" 和 "bbb"
 *
 * 示例 4：
 * 输入：s = "aba"
 * 输出：[]
 *
 * 提示：
 * 1 <= s.length <= 1000
 * s 仅含小写英文字母
 */

/**
 * @param {string} s
 * @return {number[][]}
 */
/**
 * 1、正则表达式中  “\number” 表示反向引用，表示引用一个捕获组，需要和小括号 “()” 一起使用
 * 2、正则捕获组的下标从 0 开始，下标为 0 的组是整个表达式，下标为 1 的表示从左到右开始的第一个左括号所包含的值，后面的数字以此类推
 * 3、捕获组在匹配成功时，会将子表达式匹配到的内容，保存到内存中一个以数字编号的组里，可以简单的认为是对一个局部变量进行了赋值，这时就可以通过反向引用的方式，引用这个局部变量的值。
 * 4、反向引用必须要与捕获组一同使用，如果没有捕获组，而使用了反向引用的语法，不同语言的处理方式不一致，有的语言会抛异常，有的语言会当作普通的转义处理
 */
// 正则
// var largeGroupPositions = function (s) {
//   const res = []
//   if (s.length < 3) return res
//   const check = [...s.matchAll(/([a-z])\1{2,}/g)]
//   res.push(...check.map(e => [e.index, e.index + e[0].length - 1]))
//   return res
// }

// 扫描
// var largeGroupPositions = function (s) {
//   let res = []
//   for (let i = 0, start = 0, len = s.length; i <= len; i++) {
//     if (s[start] !== s[i]) {
//       if (i - start > 2) res.push([start, i - 1])
//       start = i
//     }
//   }
//   return res
// }

// 滑动窗口
var largeGroupPositions = function (s) {
  let l = 0,
    r = 0,
    n = s.length,
    res = []
  while (l < n) {
    while (r + 1 < n && s[r] === s[r + 1]) r++
    if (r - l > 1) res.push([l, r])
    l = ++r
  }
  return res
}

console.log(largeGroupPositions('abbbxxxxzzyxxx'))
console.log(largeGroupPositions('abbxxxxzzy'))
console.log(largeGroupPositions('abc'))
console.log(largeGroupPositions('abcdddeeeeaabbbcd'))
console.log(largeGroupPositions('aba'))
