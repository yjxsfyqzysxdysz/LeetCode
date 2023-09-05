/**
 * 941. 有效的山脉数组
 *
 * 给定一个整数数组 arr，如果它是有效的山脉数组就返回 true，否则返回 false。
 * 让我们回顾一下，如果 arr 满足下述条件，那么它是一个山脉数组：
 * arr.length >= 3
 * 在 0 < i < arr.length - 1 条件下，存在 i 使得：
 * arr[0] < arr[1] < ... arr[i-1] < arr[i]
 * arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 *
 *
 * 示例 1：
 * 输入：arr = [2,1]
 * 输出：false
 *
 * 示例 2：
 * 输入：arr = [3,5,5]
 * 输出：false
 *
 * 示例 3：
 * 输入：arr = [0,3,2,1]
 * 输出：true
 *
 * 提示：
 * 1 <= arr.length <= 10^4
 * 0 <= arr[i] <= 10^4
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
// var validMountainArray = function (arr) {
//   const n = arr.length
//   if (n < 3) return false
//   let status = 1
//   for (let i = 0; i < n - 1; i++) {
//     const dif = arr[i + 1] - arr[i]
//     if (!dif) return false
//     if (status == 1 && dif > 0) {
//     } else if (status == -1 && dif < 0) {
//     } else if (status == 1 && dif < 0) {
//       status = -1
//     } else if (status == -1 && dif > 0) return false
//   }
//   return status == -1
// }

var validMountainArray = function (arr) {
  // 左右两端找最高点
  // 校验最高点
  const n = arr.length
  if (n < 3) return false
  let left = 0,
    right = n - 1
  while (left < right) {
    const leftDif = arr[left + 1] > arr[left]
    const rightDif = arr[right - 1] > arr[right]
    if (leftDif) left++
    if (rightDif) right--
    if (!leftDif && !rightDif) break
  }
  if (left < right) return false
  if (left == 0 || right == n - 1) return false
  return true
}

console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
// console.log(validMountainArray([0, 1, 2, 3, 4, 8, 9, 10, 11, 12, 11]))
// console.log(validMountainArray([2, 1]))
// console.log(validMountainArray([3, 5, 5]))
// console.log(validMountainArray([0, 3, 2, 1]))
