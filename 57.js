/**
 * 57. 插入区间
 *
 * 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 *
 * 示例 1：
 * 输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出：[[1,5],[6,9]]
 *
 * 示例 2：
 * 输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出：[[1,2],[3,10],[12,16]]
 * 解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 *
 * 示例 3：
 * 输入：intervals = [], newInterval = [5,7]
 * 输出：[[5,7]]
 *
 * 示例 4：
 * 输入：intervals = [[1,5]], newInterval = [2,3]
 * 输出：[[1,5]]
 *
 * 示例 5：
 * 输入：intervals = [[1,5]], newInterval = [2,7]
 * 输出：[[1,7]]
 *
 * 提示：
 * 0 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= intervals[i][0] <= intervals[i][1] <= 10^5
 * intervals 根据 intervals[i][0] 按 升序 排列
 * newInterval.length == 2
 * 0 <= newInterval[0] <= newInterval[1] <= 10^5
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// var insert = function (intervals, newInterval) {
//   const tmp = [...intervals, newInterval].sort(([a], [b]) => a - b)
//   const arr = [tmp[0]]
//   for (let i = 1, len = tmp.length; i < len; i++) {
//     const cur = tmp[i]
//     if (arr.at(-1)[1] < cur[0]) {
//       arr.push(cur)
//     } else {
//       arr.splice(-1, 1, [Math.min(arr.at(-1)[0], cur[0]), Math.max(arr.at(-1)[1], cur[1])])
//     }
//   }
//   return arr
// }

// var insert = function (intervals, newInterval) {
//   if (!intervals.length) return [newInterval]
//   const arr = []
//   let [preVal, nextVal] = newInterval
//   for (let i = 0, status = false, n = intervals.length - 1; i <= n; i++) {
//     const current = intervals[i]
//     // current < target
//     if (current[1] < preVal) {
//       arr.push(current)
//       if (status || i === n) {
//         arr.push([preVal, nextVal], ...intervals.slice(i + 1))
//         break
//       }
//     }
//     //  target < current
//     else if (nextVal < current[0]) {
//       arr.push([preVal, nextVal], ...intervals.slice(i))
//       break
//     } else {
//       // target 相交 current
//       if (!status) {
//         status = true
//       }
//       preVal = Math.min(preVal, current[0])
//       nextVal = Math.max(nextVal, current[1])
//       if (i === n) {
//         arr.push([preVal, nextVal])
//       }
//     }
//   }
//   return arr
// }

function insert(intervals, newInterval) {
  const res = []
  let i = 0
  const len = intervals.length

  // 当前遍历 不重叠的区间
  while (i < len && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i])
    i++
  }

  // 当前遍历 重叠的区间
  while (i < len && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]) //左端取较小者，更新给兰区间的左端
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]) //右端取较大者，更新给兰区间的右端
    i++
  }
  res.push(newInterval) // 合并

  // 当前遍历 不重叠的区间
  // while (i < len) {
  //   res.push(intervals[i])
  //   i++
  // }
  res.push(...intervals.slice(i))

  return res
}

console.log(
  insert(
    [
      [1, 3],
      [6, 9]
    ],
    [2, 5]
  )
)
// console.log(insert([[1, 5]], [6, 8]))
// console.log(
//   insert(
//     [
//       [1, 3],
//       [6, 9]
//     ],
//     [2, 5]
//   )
// )
// console.log(
//   insert(
//     [
//       [1, 2],
//       [3, 5],
//       [6, 7],
//       [8, 10],
//       [12, 16]
//     ],
//     [4, 8]
//   )
// )
// console.log(insert([], [5, 7]))
// console.log(insert([[1, 5]], [2, 3]))
// console.log(insert([[1, 5]], [2, 7]))
