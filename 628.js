/**
 * 628. 三个数的最大乘积
 *
 * 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 *
 * 示例 1：
 * 输入：nums = [1,2,3]
 * 输出：6
 *
 * 示例 2：
 * 输入：nums = [1,2,3,4]
 * 输出：24
 *
 * 示例 3：
 * 输入：nums = [-1,-2,-3]
 * 输出：-6
 *
 * 提示：
 * 3 <= nums.length <= 10^4
 * -1000 <= nums[i] <= 1000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maximumProduct = function (nums) {
//   nums.sort((a, b) => b - a)
//   return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums.at(-1) * nums.at(-2))
// }

// 线性扫描
var maximumProduct = function (nums) {
  let min1 = 1e3,
    min2 = 1e3,
    max1 = -1e3,
    max2 = -1e3,
    max3 = -1e3
  for (const e of nums) {
    if (e > max1) {
      ;[max1, max2, max3] = [e, max1, max2]
    } else if (e > max2) {
      ;[max2, max3] = [e, max2]
    } else if (e > max3) {
      max3 = e
    }
    if (e < min1) {
      ;[min1, min2] = [e, min1]
    } else if (e < min2) {
      min2 = e
    }
  }
  return Math.max(max1 * max2 * max3, max1 * min1 * min2)
}

console.log(maximumProduct([1, 2, 3]))
console.log(maximumProduct([1, 2, 3, 4]))
console.log(maximumProduct([-1, -2, -3]))
console.log(maximumProduct([-1, -2, -3, -4]))
