/**
 * 594. 最长和谐子序列
 *
 * 和谐数组是指一个数组里元素的最大值和最小值之间的差别 正好是 1 。
 * 现在，给你一个整数数组 nums ，请你在所有可能的子序列中找到最长的和谐子序列的长度。
 * 数组的子序列是一个由数组派生出来的序列，它可以通过删除一些元素或不删除元素、且不改变其余元素的顺序而得到。
 *
 * 示例 1：
 * 输入：nums = [1,3,2,2,5,2,3,7]
 * 输出：5
 * 解释：最长的和谐子序列是 [3,2,2,2,3]
 *
 * 示例 2：
 * 输入：nums = [1,2,3,4]
 * 输出：2
 *
 * 示例 3：
 * 输入：nums = [1,1,1,1]
 * 输出：0
 *
 * 提示：
 * 1 <= nums.length <= 2 * 10^4
 * -10^9 <= nums[i] <= 10^9
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// var findLHS = function (nums) {
//   // 暴力
//   const map = new Set(nums)
//   let count = 0
//   map.forEach(e => {
//     let s = 0,
//       m = 0,
//       l = 0
//     nums.forEach(f => {
//       if (f == e - 1) s++
//       else if (f == e) m++
//       else if (f == e + 1) l++
//     })
//     if (s || l) {
//       count = Math.max(count, Math.max(s, l) + m)
//     }
//   })
//   return count
// }

// var findLHS = function (nums) {
//   // 哈希
//   const map = {}
//   let count = 0
//   nums.forEach(e => {
//     map[e] = (map[e] || 0) + 1
//   })
//   for (const key in map) {
//     const s = map[key - 1] || 0
//     const m = map[key] || 0
//     const l = map[+key + 1] || 0
//     if (s || l) {
//       count = Math.max(count, s + m, l + m)
//     }
//   }
//   return count
// }

var findLHS = function (nums) {
  // 排序 + 双指针
  nums.sort((a, b) => a - b)
  let begin = 0
  let res = 0
  for (let end = 0; end < nums.length; end++) {
    while (nums[end] - nums[begin] > 1) {
      begin++
    }
    if (nums[end] - nums[begin] === 1) {
      res = Math.max(res, end - begin + 1)
    }
  }
  return res
}

// console.log(
//   findLHS([
//     5,
//     2,
//     2,
//     6,
//     7,
//     3,
//     5,
//     4,
//     4,
//     6,
//     0,
//     8,
//     0,
//     8,
//     1,
//     10,
//     0,
//     2,
//     0,
//     10,
//     1,
//     9,
//     7,
//     -10,
//     3,
//     3,
//     2,
//     9,
//     9,
//     1,
//     5,
//     9,
//     1,
//     8,
//     1,
//     8,
//     0,
//     5,
//     8,
//     7,
//     6,
//     10,
//     5,
//     -8,
//     10,
//     5,
//     6,
//     10,
//     1,
//     2,
//     4,
//     5,
//     5,
//     0,
//     9,
//     8,
//     5,
//     2,
//     6,
//     1,
//     3,
//     3,
//     10,
//     5,
//     -7,
//     0,
//     7,
//     0,
//     4,
//     2,
//     5,
//     10,
//     7,
//     7,
//     8,
//     0,
//     1,
//     0,
//     4,
//     0,
//     3,
//     1,
//     6,
//     10,
//     10,
//     7,
//     8
//   ])
// ) // 20
// console.log(findLHS([-3, -1, -1, -1, -3, -2])) // 4
// console.log(findLHS([3, 2, 2, 3, 2, 1, 3, 3, 3, -2, 0, 3, 2, 1, 0, 3, 1, 0, 1, 3, 0, 3, 3])) // 14
// console.log(findLHS([1, 2, 2, 2, 3, 3, 5, 7])) // 5
// console.log(findLHS([1, 2, 3, 4])) // 2
// console.log(findLHS([1, 1, 1, 1])) // 0
// console.log(findLHS([1, 2, 2, 1])) // 4
// console.log(findLHS([1, 2])) // 2
console.log(findLHS([83, 86, 77, 15, 93, 35, 86, 92, 49, 21])) // 2
// console.log(findLHS([0, 3, 0, 0, 1, 1, 1, 3, 1, 3, 2, 3, 2, 3, -1, 0, 2, 1, 0, 0, 0, 1, 3, 3, -3, 3, 3, 1, 3])) // 14
