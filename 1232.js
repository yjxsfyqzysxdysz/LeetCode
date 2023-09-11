/**
 * 1232. 缀点成线
 *
 * 给定一个数组 coordinates ，其中 coordinates[i] = [x, y] ， [x, y] 表示横坐标为 x、纵坐标为 y 的点。请你来判断，这些点是否在该坐标系中属于同一条直线上。
 *
 * 示例 1：
 * 输入：coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
 * 输出：true
 *
 * 示例 2：
 * 输入：coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
 * 输出：false
 *
 * 提示：
 * 2 <= coordinates.length <= 1000
 * coordinates[i].length == 2
 * -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
 * coordinates 中不含重复的点
 */

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  const len = coordinates.length
  for (let i = 1, rate = 2, status = 0; i < len; i++) {
    const [x1, y1] = coordinates[i - 1]
    const [x2, y2] = coordinates[i]
    if (x1 == x2) {
      if (!status) {
        status = 1
      } else if (status != 1 || y1 == y2) return false
    } else {
      const val = ((y2 - y1) / (x2 - x1)).toFixed(2)
      if (!status) {
        status = 2
      } else if (status != 2) return false
      if (rate == 2) {
        rate = val
      } else if (rate !== val) return false
    }
  }
  return true
}

// console.log(
//   checkStraightLine([
//     [1, 2],
//     [2, 3],
//     [3, 4],
//     [4, 5],
//     [5, 6],
//     [6, 7]
//   ])
// )
// console.log(
//   checkStraightLine([
//     [1, 1],
//     [2, 2],
//     [3, 4],
//     [4, 5],
//     [5, 6],
//     [7, 7]
//   ])
// )

// console.log(
//   checkStraightLine([
//     [0, 0],
//     [0, 1],
//     [0, -1]
//   ])
// )

// console.log(
//   checkStraightLine([
//     [1, 1],
//     [2, 2],
//     [2, 0]
//   ])
// )

console.log(
  checkStraightLine([
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [6, 7]
  ])
)
