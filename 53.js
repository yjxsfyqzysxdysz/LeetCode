/**
 * 最大子序和
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例 1：
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 *
 * 示例 2：
 * 输入：nums = [1]
 * 输出：1
 *
 * 示例 3：
 * 输入：nums = [0]
 * 输出：0
 *
 * 示例 4：
 * 输入：nums = [-1]
 * 输出：-1
 *
 * 示例 5：
 * 输入：nums = [-100000]
 * 输出：-100000
 *
 * 提示：
 * 1 <= nums.length <= 3 * 10^4
 * -10^5 <= nums[i] <= 10^5
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0]
  let max
  nums.forEach((e, i) => {
    nums.slice(i).reduce((acc, cur) => {
      const total = acc + cur
      ;(total > max || max === undefined) && (max = total)
      return total
    }, 0)
  })
  return max
}
var maxSubArray2 = function (nums) {
  let max = -105
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    max = Math.max(max, sum)
    if (sum < 0) {
      sum = 0
    }
  }
  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([0]))
console.log(maxSubArray([-1]))
console.log(maxSubArray([-100000]))
