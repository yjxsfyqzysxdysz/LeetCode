/**
 * 1200. 最小绝对差
 *
 * 给你个整数数组 arr，其中每个元素都 不相同。
 * 请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。
 * 每对元素对 [a,b] 如下：
 * a , b 均为数组 arr 中的元素
 * a < b
 * b - a 等于 arr 中任意两个元素的最小绝对差
 *
 * 示例 1：
 * 输入：arr = [4,2,1,3]
 * 输出：[[1,2],[2,3],[3,4]]
 *
 * 示例 2：
 * 输入：arr = [1,3,6,10,15]
 * 输出：[[1,3]]
 *
 * 示例 3：
 * 输入：arr = [3,8,-10,23,19,-4,-14,27]
 * 输出：[[-14,-10],[19,23],[23,27]]
 *
 * 提示：
 * 2 <= arr.length <= 10^5
 * -10^6 <= arr[i] <= 10^6
 */

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
// var minimumAbsDifference = function (arr) {
//   arr.sort((a, b) => a - b)
//   const map = {}
//   let minDif = Number.MAX_SAFE_INTEGER
//   for (let i = 1, n = arr.length; i < n; i++) {
//     const dif = Math.abs(arr[i] - arr[i - 1])
//     if (!map[dif]) {
//       minDif = Math.min(minDif, dif)
//       map[dif] = []
//     }
//     map[dif].push([arr[i - 1], arr[i]])
//   }
//   return map[minDif]
// }

var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b)
  let minDif = Number.MAX_SAFE_INTEGER
  const res = []
  for (let i = 1, len = arr.length; i < len; i++) {
    const dif = Math.abs(arr[i] - arr[i - 1])
    if (dif < minDif) {
      minDif = dif
      res.splice(0, res.length, [arr[i - 1], arr[i]])
    } else if (dif === minDif) {
      res.push([arr[i - 1], arr[i]])
    }
  }
  return res
}

console.log(minimumAbsDifference([4, 2, 1, 3]))
console.log(minimumAbsDifference([1, 3, 6, 10, 15]))
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]))
