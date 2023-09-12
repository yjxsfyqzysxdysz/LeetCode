/**
 * 1304. 和为零的 N 个不同整数
 *
 * 给你一个整数 n，请你返回 任意 一个由 n 个 各不相同 的整数组成的数组，并且这 n 个数相加和为 0 。
 *
 * 示例 1：
 * 输入：n = 5
 * 输出：[-7,-1,1,3,4]
 * 解释：这些数组也是正确的 [-5,-1,1,2,3]，[-3,-1,2,-2,4]。
 *
 * 示例 2：
 * 输入：n = 3
 * 输出：[-1,0,1]
 *
 * 示例 3：
 * 输入：n = 1
 * 输出：[0]
 *
 * 提示：
 * 1 <= n <= 1000
 */

/**
 * @param {number} n
 * @return {number[]}
 */
// var sumZero = function (n) {
//   const arr = []
//   if (n & 1) arr.push(0)
//   for (let i = 1; i <= n / 2; i++) {
//     arr.push(i, -i)
//   }
//   return arr
// }

var sumZero = function (n) {
  const arr = []
  let sum = 0
  for (let i = 0; i < n - 1; ++i) {
    arr.push(i)
    sum += i
  }
  arr.push(-sum)
  return arr
}

console.log(sumZero(5))
console.log(sumZero(3))
console.log(sumZero(1))
