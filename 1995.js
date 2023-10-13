/**
 * 1995. 统计特殊四元组
 *
 * 给你一个 下标从 0 开始 的整数数组 nums ，返回满足下述条件的 不同 四元组 (a, b, c, d) 的 数目 ：
 *
 * nums[a] + nums[b] + nums[c] == nums[d] ，且
 *  a < b < c < d
 *
 * 示例 1：
 *
 * 输入：nums = [1,2,3,6]
 * 输出：1
 * 解释：满足要求的唯一一个四元组是 (0, 1, 2, 3) 因为 1 + 2 + 3 == 6 。
 *
 * 示例 2：
 *
 * 输入：nums = [3,3,6,4,5]
 * 输出：0
 * 解释：[3,3,6,4,5] 中不存在满足要求的四元组。
 *
 * 示例 3：
 *
 * 输入：nums = [1,1,1,3,5]
 * 输出：4
 * 解释：满足要求的 4 个四元组如下：
 * - (0, 1, 2, 3): 1 + 1 + 1 == 3
 * - (0, 1, 3, 4): 1 + 1 + 3 == 5
 * - (0, 2, 3, 4): 1 + 1 + 3 == 5
 * - (1, 2, 3, 4): 1 + 1 + 3 == 5
 *
 * 提示：
 * 4 <= nums.length <= 50
 * 1 <= nums[i] <= 100
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// var countQuadruplets = function (nums) {
//   // 暴力
//   let res = 0
//   for (let a = 0, n = nums.length; a < n; a++) {
//     for (let b = a + 1; b < n - 1; b++) {
//       for (let c = b + 1; c < n - 2; c++) {
//         for (let d = c + 1; d < n - 3; d++) {
//           if (nums[a] + nums[b] + nums[c] == nums[d]) res++
//         }
//       }
//     }
//   }
//   return res
// }

console.log(countQuadruplets([1, 2, 3, 6]))
console.log(countQuadruplets([3, 3, 6, 4, 5]))
console.log(countQuadruplets([1, 1, 1, 3, 5]))
