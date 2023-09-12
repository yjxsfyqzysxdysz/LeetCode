/**
 * 有序数组中出现次数超过25%的元素
 *
 * 给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。
 * 请你找到并返回这个整数
 *
 * 示例：
 * 输入：arr = [1,2,2,6,6,6,6,7,10]
 * 输出：6
 *
 * 提示：
 * 1 <= arr.length <= 10^4
 * 0 <= arr[i] <= 10^5
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
// var findSpecialInteger = function (arr) {
//   const len = arr.length
//   if (len === 1) return arr[0]
//   const limit = len / 4
//   for (let i = 0, j = 0; i < len; i++) {
//     j++
//     if (j > limit) return arr[i]
//     if (arr[i] !== arr[i + 1]) {
//       j = 0
//     }
//   }
// }

var findSpecialInteger = function (arr) {
  const len = arr.length
  if (len === 1) return arr[0]
  const limit = len / 4
  for (const e of `${arr.join(',')},`.match(/(\d+,)\1+/g)) {
    const tmp = e.split(',')
    if (tmp.length - 1 > limit) return +tmp[0]
  }
}

console.log(findSpecialInteger([6700, 8858, 8858, 8858, 8858]))
// console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]))
// console.log(findSpecialInteger([1]))
// console.log(findSpecialInteger([1, 2, 3, 3]))
