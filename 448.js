/**
 * 448. 找到所有数组中消失的数字
 *
 * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
 *
 * 示例 1：
 * 输入：nums = [4,3,2,7,8,2,3,1]
 * 输出：[5,6]
 *
 * 示例 2：
 * 输入：nums = [1,1]
 * 输出：[2]
 *
 * 提示：
 * n == nums.length
 * 1 <= n <= 10^5
 * 1 <= nums[i] <= n
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length
  const map = Array(n).fill(0)
  const arr = []
  nums.forEach(e => map[e - 1]++)
  map.forEach((e, i) => !e && arr.push(i + 1))
  return arr
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(findDisappearedNumbers([1, 1]))
