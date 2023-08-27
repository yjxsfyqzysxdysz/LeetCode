/**
 * 56. 合并区间
 *
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 *
 * 示例 1：
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 * 示例 2：
 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 *
 * 提示：
 * 1 <= intervals.length <= 104
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 104
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function (intervals) {
//   intervals.sort((a, b) => a[0] - b[0])
//   const arr = [intervals[0]]
//   for (let i = 1, index = 0, len = intervals.length; i < len; i++) {
//     if (arr[index][1] >= intervals[i][0]) {
//       arr[index][1] = Math.max(arr[index][1], intervals[i][1])
//     } else {
//       arr.push(intervals[i])
//       index++
//     }
//   }
//   return arr
// }

// var merge = function (intervals) {
//   intervals.sort((a, b) => a[0] - b[0])
//   const arr = []
//   for (let i = 0, j = 1, len = intervals.length; j <= len; ) {
//     const rightMaxVal = intervals.slice(i, j).reduce((res, [, right]) => Math.max(res, right), 0)
//     if (j !== len && rightMaxVal >= intervals[j][0]) {
//       j++
//     } else if (j - i === 1) {
//       arr.push(intervals[i])
//       i = j++
//     } else {
//       arr.push([intervals[i][0], rightMaxVal])
//       i = j++
//     }
//   }
//   return arr
// }

var merge = function (intervals) {
  intervals.sort(([a], [b]) => a - b)
  const arr = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    const [curPre, curNext] = intervals[i]
    const lastNext = arr.at(-1)[1]
    if (lastNext < curPre) {
      arr.push([curPre, curNext])
    } else if (lastNext < curNext) {
      arr.at(-1)[1] = curNext
    }
  }
  return arr
}

console.log(
  merge([
    [1, 4],
    [0, 2],
    [3, 5]
  ])
)
console.log(
  merge([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10]
  ])
)
console.log(
  merge([
    [1, 4],
    [2, 3]
  ])
)
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ])
)
console.log(
  merge([
    [1, 4],
    [4, 5]
  ])
)
