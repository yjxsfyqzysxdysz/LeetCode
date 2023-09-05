/**
 * 989. 数组形式的整数加法
 *
 * 整数的 数组形式  num 是按照从左到右的顺序表示其数字的数组。
 * 例如，对于 num = 1321 ，数组形式是 [1,3,2,1] 。
 * 给定 num ，整数的 数组形式 ，和整数 k ，返回 整数 num + k 的 数组形式 。
 *
 * 示例 1：
 * 输入：num = [1,2,0,0], k = 34
 * 输出：[1,2,3,4]
 * 解释：1200 + 34 = 1234
 *
 * 示例 2：
 * 输入：num = [2,7,4], k = 181
 * 输出：[4,5,5]
 * 解释：274 + 181 = 455
 *
 * 示例 3：
 * 输入：num = [2,1,5], k = 806
 * 输出：[1,0,2,1]
 * 解释：215 + 806 = 1021
 *
 * 提示：
 * 1 <= num.length <= 10^4
 * 0 <= num[i] <= 9
 * num 不包含任何前导零，除了零本身
 * 1 <= k <= 10^4
 */

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
// var addToArrayForm = function (num, k) {
//   return `${+num.join('') + k}`.split('').map(e => +e)
// }

// 逐位相加
// var addToArrayForm = function (num, k) {
//   const kList = `${k}`
//   for (let m = kList.length, n = num.length, i = 0, tag = 0; i < m || tag; i++) {
//     const index = n - i - 1
//     const dif = `${+(kList[m - i - 1] || 0) + (num[index] || 0) + tag}`
//     if (dif < 10) {
//       tag = 0
//       if (index < 0) {
//         if (!(i == m && dif == 0)) {
//           n++
//           num.unshift(+dif)
//         }
//       } else {
//         num[index] = +dif
//       }
//     } else {
//       tag = +dif[0]
//       if (index < 0) {
//         n++
//         num.unshift(+dif[1])
//       } else {
//         num[index] = +dif[1]
//       }
//     }
//   }
//   return num
// }

var addToArrayForm = function (num, k) {
  k += ''
  let m = num.length - 1
  let n = `${k}`.length - 1
  let carry = 0
  while (m >= 0 || n >= 0) {
    const val = `${(num[m] || 0) + (+k[n] || 0) + carry}`.padStart(2, '0')
    carry = +val[0]
    if (m < 0) {
      num.unshift(+val[1])
    } else {
      num[m] = +val[1]
    }
    m--
    n--
  }
  if (carry) num.unshift(carry)
  return num
}

console.log(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1))
console.log(addToArrayForm([1, 2, 0, 0], 34))
console.log(addToArrayForm([2, 7, 4], 181))
console.log(addToArrayForm([2, 1, 5], 806))
console.log(addToArrayForm([0], 23))
console.log(addToArrayForm([7], 993))
