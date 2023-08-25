/**
 * 283. 移动零
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 示例1:
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 * 示例 2:
 * 输入: nums = [0]
 * 输出: [0]
 *
 * 说明:
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 *
 * 提示:
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//   let tmp = nums.toString()
//   let num = tmp.match(/\b0(,)?/g).length
//   tmp = eval('[' + tmp.replace(/\b0(,)?/g, '') + ']')
//   tmp.push(...new Array(num).fill(0))
//   return tmp
// }

// var moveZeroes = function (nums) {
//   let len = nums.length
//   for (let i = 0; i < len; i++) {
//     if (!nums[i]) {
//       nums.splice(i, 1)
//       nums.push(0)
//       len--;
//       i--;
//     }
//   }
//   return nums
// }

// var moveZeroes = function (nums) {
//   let len = nums.length
//   while ((len--, len >= 0)) {
//     if (!nums[len]) {
//       nums.splice(len, 1)
//       nums.push(0)
//     }
//   }
//   return nums
// }

// 双指针 快慢针
var moveZeroes = function (nums) {
  for (let slow = 0, fast = 0; fast < nums.length; fast++) {
    if (nums[fast]) {
      if (slow !== fast) {
        ;[nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      }
      slow++
    }
  }
  return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([0]))
