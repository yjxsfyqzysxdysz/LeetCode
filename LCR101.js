/**
 * LCR 101. 分割等和子集
 *
 * 给定一个非空的正整数数组 nums ，请判断能否将这些数字分成元素和相等的两部分。
 *
 * 示例 1：
 * 输入：nums = [1,5,11,5]
 * 输出：true
 * 解释：nums 可以分割成 [1, 5, 5] 和 [11] 。
 *
 * 示例 2：
 * 输入：nums = [1,2,3,5]
 * 输出：false
 * 解释：nums 不可以分为和相等的两部分
 *
 * 提示：
 * 1 <= nums.length <= 200
 * 1 <= nums[i] <= 100
 *
 * 注意：本题与主站 416 题相同： https://leetcode-cn.com/problems/partition-equal-subset-sum/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  if (nums.length < 2) return false
  const maxNum = Math.max(...nums)
  const sum = nums.reduce((a, b) => a + b)
  const target = sum / 2
  console.log(target)
  if (sum % 2 || maxNum > target) return false
  const dp = [1, ...new Array(target).fill(0)]
  // 从 大往小 填
  for (const num of nums) {
    for (let j = target; j >= num; --j) {
      dp[j] |= dp[j - num]
    }
  }
  return !!dp[target]
}

console.log(canPartition([1, 2, 3, 4, 5, 6, 7]))
// console.log(canPartition([1, 5, 11, 5]))
// console.log(canPartition([1, 2, 3, 5]))
