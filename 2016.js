/**
 * 2016. 增量元素之间的最大差值
 *
 * 给你一个下标从 0 开始的整数数组 nums ，该数组的大小为 n ，请你计算 nums[j] - nums[i] 能求得的 最大差值 ，其中 0 <= i < j < n 且 nums[i] < nums[j] 。
 * 返回 最大差值 。如果不存在满足要求的 i 和 j ，返回 -1 。
 *
 * 示例 1：
 * 输入：nums = [7,1,5,4]
 * 输出：4
 * 解释：
 * 最大差值出现在 i = 1 且 j = 2 时，nums[j] - nums[i] = 5 - 1 = 4 。
 * 注意，尽管 i = 1 且 j = 0 时 ，nums[j] - nums[i] = 7 - 1 = 6 > 4 ，但 i > j 不满足题面要求，所以 6 不是有效的答案。
 *
 * 示例 2：
 * 输入：nums = [9,4,3,2]
 * 输出：-1
 * 解释：
 * 不存在同时满足 i < j 和 nums[i] < nums[j] 这两个条件的 i, j 组合。
 *
 *  示例 3：
 * 输入：nums = [1,5,2,10]
 * 输出：9
 * 解释：
 * 最大差值出现在 i = 0 且 j = 3 时，nums[j] - nums[i] = 10 - 1 = 9 。
 *
 * 提示：
 * n == nums.length
 * 2 <= n <= 1000
 * 1 <= nums[i] <= 10^9
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 前缀最小值
// var maximumDifference = function (nums) {
//   const n = nums.length
//   let ans = -1,
//     premin = nums[0]
//   for (let i = 1; i < n; ++i) {
//     if (nums[i] > premin) {
//       ans = Math.max(ans, nums[i] - premin)
//     } else {
//       premin = nums[i]
//     }
//   }
//   return ans
// }

var maximumDifference = function (nums) {
  const n = nums.length
  const dif = Array(n + 1).fill(0)
  for (let i = n - 1; i >= 0; i--) {
    const preVal = Math.max(dif[i + 1] + (nums[i + 1] || 0), nums[i + 1] || 0)
    dif[i] = preVal - nums[i]
  }
  return Math.max(...dif) || -1
}

// console.log(maximumDifference([7, 1, 5, 4]))
console.log(maximumDifference([9, 4, 3, 2]))
// console.log(maximumDifference([1, 5, 2, 10]))
console.log(
  maximumDifference([
    999,
    997,
    980,
    976,
    948,
    940,
    938,
    928,
    924,
    917,
    907,
    907,
    881,
    878,
    864,
    862,
    859,
    857,
    848,
    840,
    824,
    824,
    824,
    805,
    802,
    798,
    788,
    777,
    775,
    766,
    755,
    748,
    735,
    732,
    727,
    705,
    700,
    697,
    693,
    679,
    676,
    644,
    634,
    624,
    599,
    596,
    588,
    583,
    562,
    558,
    553,
    539,
    537,
    536,
    509,
    491,
    485,
    483,
    454,
    449,
    438,
    425,
    403,
    368,
    345,
    327,
    287,
    285,
    270,
    263,
    255,
    248,
    235,
    234,
    224,
    221,
    201,
    189,
    187,
    183,
    179,
    168,
    155,
    153,
    150,
    144,
    107,
    102,
    102,
    87,
    80,
    57,
    55,
    49,
    48,
    45,
    26,
    26,
    23,
    15
  ])
)
