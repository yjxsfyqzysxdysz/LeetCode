/**
 * 485. 最大连续 1 的个数
 *
 * 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。
 *
 * 示例 1：
 * 输入：nums = [1,1,0,1,1,1]
 * 输出：3
 * 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
 *
 * 示例 2:
 * 输入：nums = [1,0,1,1,0,1]
 * 输出：2
 *
 * 提示：
 * 1 <= nums.length <= 10^5
 * nums[i] 不是 0 就是 1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 双指针
// var findMaxConsecutiveOnes = function (nums) {
//   let maxNum = 0
//   for (let i = 0, isAtk = false, tmp = 0; i <= nums.length; i++) {
//     if (isAtk) {
//       if (nums[i]) {
//         tmp++
//       } else {
//         isAtk = !isAtk
//         maxNum = Math.max(maxNum, tmp)
//         tmp = 0
//       }
//     } else if (nums[i]) {
//       tmp++
//       isAtk = !isAtk
//     }
//   }
//   return maxNum
// }

// 正则
// var findMaxConsecutiveOnes = function (nums) {
//   return (nums.join('').match(/1+/g) || []).reduce((res, cur) => Math.max(cur.length, res), 0)
// }

// 双指针
// var findMaxConsecutiveOnes = function (nums) {
//   let max = 0,
//     index = 0,
//     len = 0,
//     limit = nums.length
//   while (index + len <= limit) {
//     if (nums[index + len] === 1) {
//       len++
//     } else {
//       max = Math.max(max, len)
//       index += len + 1
//       len = 0
//     }
//   }
//   return max
// }

// 一次遍历
// var findMaxConsecutiveOnes = function (nums) {
//   let max = 0,
//     count = 0
//   for (const e of nums) {
//     if (e === 1) {
//       count++
//     } else {
//       max = Math.max(max, count)
//       count = 0
//     }
//   }
//   max = Math.max(max, count)
//   return max
// }

// 双指针 快慢针
var findMaxConsecutiveOnes = function (nums) {
  let max = 0
  for (let fast = 0, slow = 0; fast <= nums.length; fast++) {
    if (nums[fast]) continue
    max = Math.max(max, fast - slow)
    slow = fast + 1
  }
  return max
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]))
