/**
 * 260. 只出现一次的数字 III
 *
 * 给你一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。
 * 你必须设计并实现线性时间复杂度的算法且仅使用常量额外空间来解决此问题。
 *
 * 示例 1：
 * 输入：nums = [1,2,1,3,2,5]
 * 输出：[3,5]
 * 解释：[5, 3] 也是有效的答案。
 *
 * 示例 2：
 * 输入：nums = [-1,0]
 * 输出：[-1,0]
 *
 * 示例 3：
 * 输入：nums = [0,1]
 * 输出：[1,0]
 *
 * 提示：
 * 2 <= nums.length <= 3 * 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 * 除两个只出现一次的整数外，nums 中的其他数字都出现两次
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const n = nums.length
  if (n == 2) return nums
  const res = []
  nums.sort()
  for (let i = 0, j = 1; i < n; ) {
    if (nums[i] !== nums[j]) {
      res.push(nums[i])
      if (res.length === 2) return res
      i++
      j++
    } else {
      i += 2
      j += 2
    }
  }
}

console.log(singleNumber([1, 2, 1, 3, 2, 5]))
console.log(singleNumber([-1, 0]))
console.log(singleNumber([0, 1]))
