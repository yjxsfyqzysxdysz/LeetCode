/**
 * 千位分隔数
 *
 * 给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。
 *
 * 示例 1：
 * 输入：n = 987
 * 输出："987"
 *
 * 示例 2：
 * 输入：n = 1234
 * 输出："1.234"
 *
 * 示例 3：
 * 输入：n = 123456789
 * 输出："123.456.789"
 *
 * 示例 4：
 * 输入：n = 0
 * 输出："0"
 *
 * 提示：
 * 0 <= n < 2^31
 */

/**
 * @param {number} n
 * @return {string}
 */
// var thousandSeparator = function (n) {
//   let num = ''
//   for (let str = `${n}`, len = str.length, i = 0; i < len; i++) {
//     if (num && len - i > 1 && !((len - i) % 3)) num += '.'
//     num += str[i]
//   }
//   return num
// }

var thousandSeparator = function (n) {
  return `${n}`
    .split('')
    .reduce((pre, cur, index, arr) => {
      pre.push(cur)
      if (arr.length - index > 1 && !((arr.length - index - 1) % 3)) pre.push('.')
      return pre
    }, [])
    .join('')
}

console.log(thousandSeparator(987))
console.log(thousandSeparator(1234)) // 1.234
console.log(thousandSeparator(123456789)) // 123.456.789
// console.log(thousandSeparator(0))
