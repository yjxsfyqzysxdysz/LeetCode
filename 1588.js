/**
 * 所有奇数长度子数组的和
 *
 * 给你一个正整数数组 arr ，请你计算所有可能的奇数长度子数组的和。
 * 子数组 定义为原数组中的一个连续子序列。
 * 请你返回 arr 中 所有奇数长度子数组的和 。
 *
 * 示例 1：
 * 输入：arr = [1,4,2,5,3]
 * 输出：58
 * 解释：所有奇数长度子数组和它们的和为：
 * [1] = 1
 * [4] = 4
 * [2] = 2
 * [5] = 5
 * [3] = 3
 * [1,4,2] = 7
 * [4,2,5] = 11
 * [2,5,3] = 10
 * [1,4,2,5,3] = 15
 * 我们将所有值求和得到 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
 *
 * 示例 2：
 * 输入：arr = [1,2]
 * 输出：3
 * 解释：总共只有 2 个长度为奇数的子数组，[1] 和 [2]。它们的和为 3 。
 *
 * 示例 3：
 * 输入：arr = [10,11,12]
 * 输出：66
 *
 * 提示：
 * 1 <= arr.length <= 100
 * 1 <= arr[i] <= 1000
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = function (arr) {
  let res = []
  for (let i = 0, len = arr.length; i < len; i++) {
    const tmp = [arr[i]]
    let j = i
    while (j + 2 <= len - 1) {
      j += 2
      tmp.push(...arr.slice(i, j + 1))
    }
    res.push(...tmp)
  }
  const map = {}
  res.forEach(e => {
    !map[e] && (map[e] = 0)
    map[e]++
  })
  return res.reduce((acc, cur) => acc + cur)
}
const sumOddLengthSubarrays2 = function (arr) {
  let sum = 0
  for (let i = 0, len = arr.length; i < len; i++) {
    const leftOdd = Math.floor((i + 1) / 2)
    const rightOdd = Math.floor((len - i) / 2)
    const leftEven = Math.floor((i + 2) / 2)
    const rightEven = Math.floor((len - i + 1) / 2)
    sum += arr[i] * (leftOdd * rightOdd + leftEven * rightEven)
  }
  return sum
}
const sumOddLengthSubarrays3 = function (arr) {
  const len = arr.length
  return arr.reduce((acc, cur, i) => {
    const leftOdd = Math.floor((i + 1) / 2)
    const rightOdd = Math.floor((len - i) / 2)
    const leftEven = Math.floor((i + 2) / 2)
    const rightEven = Math.floor((len - i + 1) / 2)
    return acc + cur * (leftOdd * rightOdd + leftEven * rightEven)
  }, 0)
}

console.log(sumOddLengthSubarrays3([1, 2, 3, 4, 5, 6, 7, 8, 9]))
/**
 * 1 2  3  4  5  6  7 8 9
 * 5 8 11 12 13 12 11 8 5
 * 425
 */
