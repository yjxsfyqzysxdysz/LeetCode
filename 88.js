/**
 * 合并两个有序数组
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
 *
 * 示例 1：
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 输出：[1,2,2,3,5,6]
 *
 * 示例 2：
 * 输入：nums1 = [1], m = 1, nums2 = [], n = 0
 * 输出：[1]
 *
 * 提示：
 * nums1.length == m + n
 * nums2.length == n
 * 0 <= m, n <= 200
 * 1 <= m + n <= 200
 * -109 <= nums1[i], nums2[i] <= 109
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//   nums1.splice(m, nums1.length - m, ...nums2.slice(0, n))
//   nums1.sort((a, b) => a - b)
// }

// var merge = function (nums1, m, nums2, n) {
//   for (let i = 0, j = 0; i < nums1.length; i++) {
//     for (; j < n; j++) {
//       if (i >= m && !nums1[i]) {
//         nums1.splice(i, nums1.length - i, ...nums2.slice(j))
//         return
//       } else if (nums1[i] >= nums2[j]) {
//         nums1.splice(i, 0, nums2[j])
//         nums1.pop()
//         if (nums1[i] === nums2[j]) {
//           j++
//         }
//       }
//       if (nums1[i] <= nums2[j]) {
//         break
//       }
//     }
//   }
// }

var merge = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0
  while (i < m && j < n) {
    const n2 = nums2[j]
    if (nums1[i] >= n2) {
      nums1.splice(i, 0, n2)
      j++
      m++
    }
    i++
  }
  nums1.splice(m, nums1.length, ...(nums2.slice(j) || ''))
}

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3
// let nums1 = [1],
//   m = 1,
//   nums2 = [],
//   n = 0
// let nums1 = [2, 0],
//   m = 1,
//   nums2 = [1],
//   n = 1
merge(nums1, m, nums2, n)
console.log(nums1)
