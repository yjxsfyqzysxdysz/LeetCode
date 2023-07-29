/**
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
 *
 * 示例 1：
 * 输入：x = 4
 * 输出：2
 *
 * 示例 2：
 * 输入：x = 8
 * 输出：2
 * 解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
 *
 * 提示：
 * 0 <= x <= 2^31 - 1
 */

/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function (x) {
//   if (!(x >> 1)) return x
//   let l = 1,
//     r = x
//   while (l <= r) {
//     const mid = l + Math.floor((r - l) / 2)
//     const num = mid * mid
//     if (num === x) {
//       return mid
//     } else if (num < x) {
//       l = mid + 1
//     } else {
//       r = mid - 1
//     }
//   }
//   return l * l > x ? l - 1 : l
// }

var mySqrt = function (x) {
  if (!(x >> 1)) return x
  let l = 1,
    r = x
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2)
    if (mid <= x / mid) {
      if (mid + 1 > x / (mid + 1)) {
        return mid
      }
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return l
}

console.log(mySqrt(4))
console.log(mySqrt(8))
