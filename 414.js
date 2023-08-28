/**
 * 第三大的数
 *
 * 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
 *
 * 示例 1：
 * 输入：[3, 2, 1]
 * 输出：1
 * 解释：第三大的数是 1 。
 *
 * 示例 2：
 * 输入：[1, 2]
 * 输出：2
 * 解释：第三大的数不存在, 所以返回最大的数 2 。
 *
 * 示例 3：
 * 输入：[2, 2, 3, 1]
 * 输出：1
 * 解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
 * 此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。
 *
 * 提示：
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// var thirdMax = function (nums) {
//   nums = [...new Set(nums)].sort((a, b) => b - a)
//   return nums[2] ?? nums[0]
// }

var thirdMax = function (nums) {
  const arr = [nums[0]]
  nums.forEach(e => {
    if (!arr.includes(e)) {
      if ((arr[0] ?? Number.MIN_SAFE_INTEGER) < e) {
        ;[arr[0], arr[1], arr[2]] = [e, arr[0], arr[1]]
      } else if ((arr[1] ?? Number.MIN_SAFE_INTEGER) < e) {
        ;[arr[1], arr[2]] = [e, arr[1]]
      } else if ((arr[2] ?? Number.MIN_SAFE_INTEGER) < e) {
        arr[2] = e
      }
    }
  })
  return arr[2] ?? arr[0]
}

console.log(thirdMax([3, 2, 1]))
console.log(thirdMax([1, 2]))
console.log(thirdMax([2, 2, 3, 1]))
