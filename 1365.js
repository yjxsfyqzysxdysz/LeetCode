/**
 * 1365. 有多少小于当前数字的数字
 *
 * 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。
 * 换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。
 * 以数组形式返回答案。
 *
 * 示例 1：
 * 输入：nums = [8,1,2,2,3]
 * 输出：[4,0,1,1,3]
 * 解释：
 * 对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。
 * 对于 nums[1]=1 不存在比它小的数字。
 * 对于 nums[2]=2 存在一个比它小的数字：（1）。
 * 对于 nums[3]=2 存在一个比它小的数字：（1）。
 * 对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。
 *
 * 示例 2：
 * 输入：nums = [6,5,4,8]
 * 输出：[2,1,0,3]
 *
 * 示例 3：
 * 输入：nums = [7,7,7,7]
 * 输出：[0,0,0,0]
 *
 * 提示：
 * 2 <= nums.length <= 500
 * 0 <= nums[i] <= 100
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var smallerNumbersThanCurrent = function (nums) {
//   const map = {}
//   for (const e of nums) {
//     if (!map[e]) map[e] = 0
//     map[e]++
//   }
//   const map2 = {}
//   let tmp = 0
//   for (const e in map) {
//     map2[e] = tmp
//     tmp+=map[e]
//   }
//   const res = []
//   for (const e of nums) {
//     res.push(map2[e])
//   }
//   return res
// }

var smallerNumbersThanCurrent = function (nums) {
  const list = [...nums].sort((a, b) => b - a)
  const arr = []
  const map = new Map()
  for (let i = 0, n = nums.length; i < n; i++) {
    const cur = nums[i]
    if (!map.has(cur)) {
      let tmp = n - 1
      for (let j = 0; j < n; j++) {
        if (list[j] == list[j + 1]) continue
        if (cur >= list[j]) {
          tmp = n - j - 1
          break
        }
      }
      map.set(cur, tmp)
    }
    arr.push(map.get(cur))
  }
  return arr
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]))
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]))
