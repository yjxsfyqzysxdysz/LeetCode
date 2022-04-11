/**
 * 统计各位数字都不同的数字个数
 *
 * 给你一个整数 n ，统计并返回各位数字都不同的数字 x 的个数，其中 0 <= x < 10n
 *
 * 示例 1：
 * 输入：n = 2
 * 输出：91
 * 解释：答案应为除去 11、22、33、44、55、66、77、88、99 外，在 0 ≤ x < 100 范围内的所有数字。
 *
 * 示例 2：
 * 输入：n = 0
 * 输出：1
 *
 * 提示：
 * 0 <= n <= 8
 */

/**
 * @param {number} n
 * @return {number}
 */
// var countNumbersWithUniqueDigits = function (n) {
//   if (n < 2) return Math.pow(10, n)
//   let res = 10,
//     cur = 9
//   for (let i = 0, lim = n - 1; i < lim; i++) {
//     cur *= 9 - i
//     res += cur
//   }
//   return res
// }
/**
 * 通过推演，可得：
 * f(0)=1
 * f(1)=10
 * f(2)=9x9+f(1)
 * f(3)=9x9x8+f(2)
 * f(4)=9x9x8x7+f(3)
 * 根据以上规律，可以得到递推公式：f(i) = f(i-1) + (f(i-1)-f(i-2))x(10-(i-1))
 */
var countNumbersWithUniqueDigits = function (n) {
  const arr = [1, 10]
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + (arr[i - 1] - arr[i - 2]) * (10 - (i - 1))
  }
  return arr[n]
}

console.log(countNumbersWithUniqueDigits(0)) // 1
console.log(countNumbersWithUniqueDigits(1)) // 10
console.log(countNumbersWithUniqueDigits(2)) // 91
console.log(countNumbersWithUniqueDigits(3)) //
console.log(countNumbersWithUniqueDigits(4)) //
console.log(countNumbersWithUniqueDigits(5)) //
console.log(countNumbersWithUniqueDigits(6)) //
console.log(countNumbersWithUniqueDigits(7)) //
console.log(countNumbersWithUniqueDigits(8)) //
