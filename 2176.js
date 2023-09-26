/**
 * 2176. 统计数组中相等且可以被整除的数对
 *
 * 给你一个下标从 0 开始长度为 n 的整数数组 nums 和一个整数 k ，请你返回满足 0 <= i < j < n ，nums[i] == nums[j] 且 (i * j) 能被 k 整除的数对 (i, j) 的 数目 。
 *
 * 示例 1：
 * 输入：nums = [3,1,2,2,2,1,3], k = 2
 * 输出：4
 * 解释：
 * 总共有 4 对数符合所有要求：
 * - nums[0] == nums[6] 且 0 * 6 == 0 ，能被 2 整除。
 * - nums[2] == nums[3] 且 2 * 3 == 6 ，能被 2 整除。
 * - nums[2] == nums[4] 且 2 * 4 == 8 ，能被 2 整除。
 * - nums[3] == nums[4] 且 3 * 4 == 12 ，能被 2 整除。
 *
 * 示例 2：
 * 输入：nums = [1,2,3,4], k = 1
 * 输出：0
 * 解释：由于数组中没有重复数值，所以没有数对 (i,j) 符合所有要求。
 *
 * 提示：
 * 1 <= nums.length <= 100
 * 1 <= nums[i], k <= 100
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    if (!map.has(cur)) map.set(cur, [])
    map.get(cur).push(i)
  }
  console.log(map)
  let count = 0
  for (const item of map.values()) {
    const n = item.length
    if (n < 2) continue
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if ((item[i] * item[j]) % k == 0) count++
      }
    }
  }
  return count
}

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2))
console.log(countPairs([1, 2, 3, 4], 1))
