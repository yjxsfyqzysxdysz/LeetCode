/**
 * 75. 颜色分类
 *
 * 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 必须在不使用库内置的 sort 函数的情况下解决这个问题。
 *
 * 示例 1：
 * 输入：nums = [2,0,2,1,1,0]
 * 输出：[0,0,1,1,2,2]
 *
 * 示例 2：
 * 输入：nums = [2,0,1]
 * 输出：[0,1,2]
 *
 * 提示：
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] 为 0、1 或 2
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function (nums) {
//   const tmp = Array(3).fill(0)
//   for (const e of nums) {
//     tmp[e]++
//   }
//   for (let i = 0, index = 0; i < 3; i++) {
//     const count = tmp[i]
//     nums.splice(index, index + count, ...Array(count).fill(i))
//     index += count
//   }
//   return nums
// }

var sortColors = function (nums) {
  const n = nums.length
  let p0 = 0,
    p1 = 0
  for (let i = 0; i < n; i++) {
    const cur = nums[i]
    if (cur === 0) {
      ;[nums[i], nums[p0]] = [nums[p0], nums[i]]
      if (p0 < p1) {
        ;[nums[i], nums[p1]] = [nums[p1], nums[i]]
      }
      p0++
      p1++
    } else if (cur === 1) {
      ;[nums[i], nums[p1]] = [nums[p1], nums[i]]
      p1++
    }
  }
  return nums
}

console.log(sortColors([2, 0, 2, 1, 1, 0]))
console.log(sortColors([2, 0, 1]))
