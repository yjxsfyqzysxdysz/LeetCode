/**
 * 896. 单调数列
 *
 * 如果数组是单调递增或单调递减的，那么它是 单调 的。
 * 如果对于所有 i <= j，nums[i] <= nums[j]，那么数组 nums 是单调递增的。 如果对于所有 i <= j，nums[i]> = nums[j]，那么数组 nums 是单调递减的。
 * 当给定的数组 nums 是单调数组时返回 true，否则返回 false。
 *
 * 示例 1：
 * 输入：nums = [1,2,2,3]
 * 输出：true
 *
 * 示例 2：
 * 输入：nums = [6,5,4,4]
 * 输出：true
 *
 * 示例 3：
 * 输入：nums = [1,3,2]
 * 输出：false
 *
 * 提示：
 * 1 <= nums.length <= 10^5
 * -10^5 <= nums[i] <= 10^5
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var isMonotonic = function (nums) {
//   for (let i = 0, status = 0, n = nums.length - 1; i < n; i++) {
//     const dif = nums[i] - nums[i + 1]
//     !status && (status = dif)
//     if (dif > 0 && status > 0) {
//     } else if (dif < 0 && status < 0) {
//     } else if (dif === 0) continue
//     else return false
//   }
//   return true
// }
var isMonotonic = function (nums) {
  for (let i = 0, status = 0, n = nums.length - 1; i < n; i++) {
    const dif = nums[i] - nums[i + 1]
    !status && (status = dif)
    if (dif * status >= 0) continue
    else return false
  }
  return true
}

console.log(isMonotonic([1, 2, 2, 3]))
console.log(isMonotonic([6, 5, 4, 4]))
console.log(isMonotonic([1, 3, 2]))
