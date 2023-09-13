/**
 * 1346. 检查整数及其两倍数是否存在
 *
 * 给你一个整数数组 arr，请你检查是否存在两个整数 N 和 M，满足 N 是 M 的两倍（即，N = 2 * M）。
 * 更正式地，检查是否存在两个下标 i 和 j 满足：
 * i != j
 * 0 <= i, j < arr.length
 * arr[i] == 2 * arr[j]
 *
 * 示例 1：
 * 输入：arr = [10,2,5,3]
 * 输出：true
 * 解释：N = 10 是 M = 5 的两倍，即 10 = 2 * 5 。
 *
 * 示例 2：
 * 输入：arr = [7,1,14,11]
 * 输出：true
 * 解释：N = 14 是 M = 7 的两倍，即 14 = 2 * 7 。
 *
 * 示例 3：
 * 输入：arr = [3,1,7,11]
 * 输出：false
 * 解释：在该情况下不存在 N 和 M 满足 N = 2 * M 。
 *
 * 提示：
 * 2 <= arr.length <= 500
 * -10^3 <= arr[i] <= 10^3
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
// var checkIfExist = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j && arr[i] * 2 == arr[j]) return true
//     }
//   }
//   return false
// }

var checkIfExist = function (arr) {
  arr.sort((a, b) => a - b)
  const len = arr.length
  for (let i = 0; i < len; i++) {
    const cur = arr[i] * 2
    if (cur < 0) {
      let j = i - 1
      while (j >= 0) {
        if (cur == arr[j]) return true
        j--
      }
    } else {
      let j = i + 1
      while (j < len) {
        if (cur == arr[j]) return true
        j++
      }
    }
  }
  return false
}

console.log(checkIfExist([0, 0]))
console.log(checkIfExist([10, 2, 5, 3]))
console.log(checkIfExist([7, 1, 14, 11]))
console.log(checkIfExist([3, 1, 7, 11]))
