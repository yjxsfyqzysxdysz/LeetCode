/**
 * 搜索插入位置
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 *
 * 示例 1:
 * 输入: [1,3,5,6], 5
 * 输出: 2
 *
 * 示例 2:
 * 输入: [1,3,5,6], 2
 * 输出: 1
 *
 * 示例 3:
 * 输入: [1,3,5,6], 7
 * 输出: 4
 *
 * 示例 4:
 * 输入: [1,3,5,6], 0
 * 输出: 0
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
//   let index = 0
//   for (let i = 0, len = nums.length; i < len; i++) {
//     if (nums[i] < target) {
//       index = i
//       if (i === len -1) index++
//     } else {
//       index = i
//       break
//     }
//   }
//   return index
// }

// var searchInsert = function (nums, target) {
//   const len = nums.length
//   for (let i = 0; i < len; i++) {
//     if (nums[i] >= target) return i
//   }
//   return len
// }

var searchInsert = function (nums, target) {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const mid = Math.floor((l + r) / 2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return l
}

console.log(searchInsert([1], 2))
