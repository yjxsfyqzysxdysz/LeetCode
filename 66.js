/**
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * 示例 1：
 * 输入：digits = [1,2,3]
 * 输出：[1,2,4]
 * 解释：输入数组表示数字 123。
 *
 * 示例 2：
 * 输入：digits = [4,3,2,1]
 * 输出：[4,3,2,2]
 * 解释：输入数组表示数字 4321。
 *
 * 示例 3：
 * 输入：digits = [0]
 * 输出：[1]
 *
 * 提示：
 * 1 <= digits.length <= 100
 * 0 <= digits[i] <= 9
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function (digits) {
//   return Array.from((BigInt(digits.join('')) + 1n).toString(), n => +n)
// }

// var plusOne = function (digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] < 9) {
//       digits[i]++
//       break
//     } else {
//       digits[i] = 0
//       if (!i) {
//         digits.unshift(1)
//       }
//     }
//   }
//   return digits
// }

var plusOne = function (digits) {
  // 1、若 末项 不为 9 则原地 +1
  const len = digits.length
  if (digits[len - 1] !== 9) {
    digits[len - 1]++
  } else {
    // 2、若 末项 为 9 则找到自末尾往左连续 9 的首项
    const i = digits.join('').search(/9+$/)
    if (!i) {
      digits.splice(i, len, 1, ...new Array(len).fill(0))
    } else {
      digits.splice(i - 1, len, digits[i - 1] + 1, ...new Array(len - i).fill(0))
    }
  }
  return digits
}

console.log(plusOne([9, 9]))
console.log(plusOne([1, 2, 3]))
console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([0]))
