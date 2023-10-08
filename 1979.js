/**
 * 1979. 找出数组的最大公约数
 *
 * 给你一个整数数组 nums ，返回数组中最大数和最小数的 最大公约数 。
 * 两个数的 最大公约数 是能够被两个数整除的最大正整数。
 *
 * 示例 1：
 * 输入：nums = [2,5,6,9,10]
 * 输出：2
 * 解释：
 * nums 中最小的数是 2
 * nums 中最大的数是 10
 * 2 和 10 的最大公约数是 2
 *
 * 示例 2：
 * 输入：nums = [7,5,6,8,3]
 * 输出：1
 * 解释：
 * nums 中最小的数是 3
 * nums 中最大的数是 8
 * 3 和 8 的最大公约数是 1
 *
 * 示例 3：
 * 输入：nums = [3,3]
 * 输出：3
 * 解释：
 * nums 中最小的数是 3
 * nums 中最大的数是 3
 * 3 和 3 的最大公约数是 3
 *
 * 提示：
 * 2 <= nums.length <= 1000
 * 1 <= nums[i] <= 1000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// var findGCD = function (nums) {
//   const max = Math.max(...nums)
//   const min = Math.min(...nums)
//   let num = max
//   while (max % num || min % num) num--
//   return num
// }

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  const min = Math.min(...nums)
  const max = Math.max(...nums)
  return gcd(min, max)
}

function gcd(a, b) {
  if (a === b) return a

  // 都是偶数
  if ((a & 1) === 0 && (b & 1) === 0) return gcd(a / 2, b / 2) * 2
  // a偶数b奇数
  else if ((a & 1) === 0 && (b & 1) !== 0) return gcd(a / 2, b)
  // a奇数b偶数
  else if ((a & 1) !== 0 && (b & 1) === 0) return gcd(a, b / 2)
  else {
    if (a < b) [a, b] = [b, a]
    return gcd(a - b, b)
  }
}

console.log(findGCD([2, 5, 6, 9, 10]))
console.log(findGCD([7, 5, 6, 8, 3]))
console.log(findGCD([3, 3]))
