/**
 * 15. 三数之和
 *
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
 * 你返回所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 *
 * 示例 1：
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 解释：
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
 * 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
 * 注意，输出的顺序和三元组的顺序并不重要。
 *
 * 示例 2：
 * 输入：nums = [0,1,1]
 * 输出：[]
 * 解释：唯一可能的三元组和不为 0 。
 *
 * 示例 3：
 * 输入：nums = [0,0,0]
 * 输出：[[0,0,0]]
 * 解释：唯一可能的三元组和为 0 。
 *
 * 提示：
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//   /** base */
//   nums.sort()
//   for (let i = 0; i < nums.length; i++) {
//     // 过滤相同值(返回所有和为 0 且不重复的三元组)
//     if (i && nums[i] == nums[i - 1]) continue
//     for (let j = i + 1; j < nums.length; j++) {
//       // 过滤相同值(返回所有和为 0 且不重复的三元组)
//       if (j != i + 1 && nums[j] == nums[j - 1]) continue
//       for (let k = j + 1; k < nums.length; k++) {
//         // 过滤相同值(返回所有和为 0 且不重复的三元组)
//         if (k != j + 1 && nums[k] == nums[k - 1]) continue
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           console.log([nums[i], nums[j], nums[k]])
//         }
//       }
//     }
//   }
// }

// // 排序+双指针
// var threeSum = function (nums) {
//   nums.sort((a, b) => a - b)
//   const n = nums.length
//   const res = []
//   for (let i = 0; i < n; i++) {
//     if (i && nums[i] == nums[i - 1]) continue
//     let k = n - 1
//     for (let j = i + 1; j < n; j++) {
//       if (j != i + 1 && nums[j] == nums[j - 1]) continue
//       while (j < k && nums[i] + nums[j] + nums[k] > 0) {
//         k--
//       }
//       if (j == k) break
//       if (nums[i] + nums[j] + nums[k] == 0) {
//         res.push([nums[i], nums[j], nums[k]])
//       }
//     }
//   }
//   return res
// }

// var threeSum = function (nums) {
//   nums.sort()
//   const n = nums.length
//   const ans = []
//   // 枚举 a
//   for (let first = 0; first < n; ++first) {
//     // 需要和上一次枚举的数不相同
//     if (first > 0 && nums[first] == nums[first - 1]) continue
//     // c 对应的指针初始指向数组的最右端
//     let third = n - 1
//     const target = -nums[first]
//     // 枚举 b
//     for (let second = first + 1; second < n; ++second) {
//       // 需要和上一次枚举的数不相同
//       if (second > first + 1 && nums[second] == nums[second - 1]) continue
//       // 需要保证 b 的指针在 c 的指针的左侧
//       while (second < third && nums[second] + nums[third] > target) {
//         --third
//       }
//       // 如果指针重合，随着 b 后续的增加
//       // 就不会有满足 a+b+c=0 并且 b<c 的 c 了，可以退出循环
//       if (second == third) break
//       if (nums[second] + nums[third] == target) {
//         ans.push([nums[first], nums[second], nums[third]])
//       }
//     }
//   }
//   return ans
// }

// 排序+双指针
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const res = []
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] > 0) break
    let l = i + 1,
      r = n - 1
    while (l < r) {
      const curSum = nums[i] + nums[l] + nums[r]
      if (curSum > 0) r--
      else if (curSum < 0) l++
      else {
        res.push([nums[i], nums[l], nums[r]])
        // 去重
        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r--
        r--
        l++
      }
    }
  }
  return res
}

console.log(threeSum([-4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4]))
// console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))
// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// console.log(threeSum([0, 1, 1]))
// console.log(threeSum([0, 0, 0]))
