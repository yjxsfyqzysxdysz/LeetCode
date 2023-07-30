/**
 * 杨辉三角
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 *
 * 示例:
 * 输入: 5
 * 输出:
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
// C(n,m) = n! / (m! * (n - m)!)
// var generate = function (numRows) {
//   const ret = []
//   for (let i = 0; i < numRows; i++) {
//     const row = new Array(i + 1).fill(1)
//     for (let j = 1; j < row.length - 1; j++) {
//       row[j] = ret[i - 1][j - 1] + ret[i - 1][j]
//     }
//     ret.push(row)
//   }
//   return ret
// }

// 错位相加
// var generate = function (numRows) {
//   /**
//    * 1 3 3 1 0
//    * 0 1 3 3 1
//    * --------
//    * 1 4 6 4 1
//    */
//   let res = [], item = []
//   for (let i = 0; i < numRows; i++) {
//     item = item.map((e, i, arr) =>  e + (arr[i + 1] || 0))
//     item.unshift(1)
//     res.push(item)
//   }
//   return res
// }

var generate = function (numRows) {
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1, 1]]
  const res = [[1], [1, 1]]
  for (let i = 2; i < numRows; i++) {
    let tmp = []
    for (let j = 1, arr = res[i - 1]; j < i; j++) {
      tmp.push(arr[j] + arr[j - 1])
    }
    res.push([1, ...tmp, 1])
  }
  return res
}

console.log(generate(5))
