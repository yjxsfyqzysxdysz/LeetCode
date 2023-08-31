/**
 * 643. 子数组最大平均数 I
 *
 * 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。
 * 请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。
 * 任何误差小于 10-5 的答案都将被视为正确答案。
 *
 * 示例 1：
 * 输入：nums = [1,12,-5,-6,50,3], k = 4
 * 输出：12.75
 * 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
 *
 * 示例 2：
 * 输入：nums = [5], k = 1
 * 输出：5.00000
 *
 * 提示：
 * n == nums.length
 * 1 <= k <= n <= 10^5
 * -10^4 <= nums[i] <= 10^4
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let res = nums.slice(0, k).reduce((a, b) => a + b) / k
  let max = res
  for (let i = 1; i <= nums.length - k; i++) {
    // [i, i+k)
    const dif = (nums[i + k - 1] - nums[i - 1]) / k
    console.log(nums[i + k - 1], nums[i - 1], dif)
    res += dif
    max = Math.max(max, res)
  }
  return max
}

// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
// console.log(findMaxAverage([5], 1))
console.log(findMaxAverage([0, 4, 0, 3, 2], 1))
// console.log(findMaxAverage([0, 1, 1, 3, 3], 4))
