/**
 * 多数元素
 *
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *
 * 示例 1：
 * 输入：nums = [3,2,3]
 * 输出：3
 *
 * 示例 2：
 * 输入：nums = [2,2,1,1,1,2,2]
 * 输出：2
 *
 * 提示：
 * n == nums.length
 * 1 <= n <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//   const limit = Math.floor(nums.length / 2)
//   const map = {}
//   for (const e of nums) {
//     if (!map[e]) {
//       map[e] = 1
//     } else {
//       map[e]++
//     }
//     if (map[e] > limit) return e
//   }
// }

// 多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素
// 即 该元素总数至少比其余所有元素总和 多一个
var majorityElement = function (nums) {
  let num = 0
  let count = 0
  for (let i of nums) {
    if (!count) {
      num = i
      count = 1
      continue
    }
    num === i ? count++ : count--
  }
  return num
}

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
