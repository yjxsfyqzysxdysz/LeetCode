/**
 * 1005. K 次取反后最大化的数组和
 *
 * 给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：
 * 选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
 * 重复这个过程恰好 k 次。可以多次选择同一个下标 i 。
 * 以这种方式修改数组后，返回数组 可能的最大和 。
 *
 * 示例 1：
 * 输入：nums = [4,2,3], k = 1
 * 输出：5
 * 解释：选择下标 1 ，nums 变为 [4,-2,3] 。
 *
 * 示例 2：
 * 输入：nums = [3,-1,0,2], k = 3
 * 输出：6
 * 解释：选择下标 (1, 2, 2) ，nums 变为 [3,1,0,2] 。
 *
 * 示例 3：
 * 输入：nums = [2,-3,-1,5,-4], k = 2
 * 输出：13
 * 解释：选择下标 (1, 4) ，nums 变为 [2,3,-1,5,4] 。
 *
 * 提示：
 * 1 <= nums.length <= 10^4
 * -100 <= nums[i] <= 100
 * 1 <= k <= 10^4
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var largestSumAfterKNegations = function (nums, k) {
//   let negativeNum = 0
//   let min = 1e4
//   let total = nums.reduce((a, b) => {
//     if (b < 0) negativeNum++
//     min = Math.min(min, Math.abs(b))
//     return a + b
//   }, 0)
//   nums.sort((a, b) => a - b)
//   if (negativeNum) {
//     if (negativeNum >= k) {
//       total -= 2 * nums.slice(0, k).reduce((a, b) => a + b, 0)
//     } else {
//       if (min != 0) {
//         let dif = k - negativeNum
//         total -= dif % 2 ? 2 * min : 0
//       }
//       total -= 2 * nums.slice(0, negativeNum).reduce((a, b) => a + b, 0)
//     }
//   } else if (min != 0 && k % 2) {
//     total -= 2 * min
//   }
//   return total
// }

var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => Math.abs(a) - Math.abs(b))
  let sum = 0
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i]
      k--
    }
    sum += nums[i]
  }
  if (k && k % 2 != 0) {
    sum -= 2 * nums[0]
  }
  return sum
}

// console.log(largestSumAfterKNegations([-2, 9, 9, 8, 4], 5))
console.log(largestSumAfterKNegations([5, 6, 9, -3, 3], 2))
// console.log(largestSumAfterKNegations([4, 2, 3], 1))
// console.log(largestSumAfterKNegations([3, -1, 0, 2], 3))
// console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2))
