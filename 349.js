/**
 * 两个数组的交集
 *
 * 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 *
 * 示例 1：
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 *
 * 示例 2：
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 * 解释：[4,9] 也是可通过的
 *
 * 提示：
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function (nums1, nums2) {
//   const nList1 = new Set(nums1)
//   const nList2 = new Set(nums2)
//   const arr = []
//   nList1.forEach(e => {
//     if (nList2.has(e)) {
//       arr.push(e)
//     }
//   })
//   return arr
// }

var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let i = 0,
    j = 0
  const arr = [],
    m = nums1.length,
    n = nums2.length
  while (i < m && j < n) {
    const num1 = nums1[i]
    const num2 = nums2[j]
    if (num1 === num2) {
      if (arr.at(-1) !== num1) {
        arr.push(num1)
      }
      i++
      j++
    } else if (num1 < num2) i++
    else if (num1 > num2) j++
  }
  return arr
}

console.log(intersection([1, 2, 2, 1], [2, 2]))
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
