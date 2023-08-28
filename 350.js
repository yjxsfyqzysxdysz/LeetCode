/**
 * 两个数组的交集 II
 *
 * 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
 *
 * 示例 1：
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2,2]
 *
 * 示例 2:
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[4,9]
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
// var intersect = function (nums1, nums2) {
//   nums1.sort((a, b) => a - b)
//   nums2.sort((a, b) => a - b)
//   let i = 0,
//     j = 0
//   const arr = [],
//     m = nums1.length,
//     n = nums2.length
//   while (i < m && j < n) {
//     const num1 = nums1[i]
//     const num2 = nums2[j]
//     if (num1 === num2) {
//       arr.push(num1)
//       i++
//       j++
//     } else if (num1 < num2) i++
//     else if (num1 > num2) j++
//   }
//   return arr
// }

var intersect = function (nums1, nums2) {
  const map = {}
  const arr = []
  nums1.forEach(e => {
    if (!map[e]) {
      map[e] = 0
    }
    map[e]++
  })
  nums2.forEach(e => {
    if (map[e]) {
      map[e]--
      arr.push(e)
    }
  })
  return arr
}

console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
