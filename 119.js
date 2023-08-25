/**
 * 119. 杨辉三角 II
 *
 * 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 *
 * [
 * 0                     [1],
 * 1                    [1,1],
 * 2                   [1,2,1],
 * 3                  [1,3,3,1],
 * 4                 [1,4,6,4,1],
 * 5               [1,5,10,10,5,1],
 * 6              [1,6,15,20,15,6,1],
 * 7             [1,7,21,35,35,21,7,1]
 * 8           [1,8,28,56,70,56,28,8,1],
 * 9        [1,9,36,84,126,126,84,36,9,1],
 * 10   [1,10,45,120,210,252,210,120,45,10,1],     1\5(n-1)\12\21\8(n-1)
 * 11 [1,11,55,165,330,462,462,330,165,55,11,1],   1\5\15\30\42
 * ]
 *
 * 示例 1:
 * 输入: rowIndex = 3
 * 输出: [1,3,3,1]
 *
 * 示例 2:
 * 输入: rowIndex = 0
 * 输出: [1]
 *
 * 示例 3:
 * 输入: rowIndex = 1
 * 输出: [1,1]
 *
 * 提示:
 * 0 <= rowIndex <= 33
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// var getRow = function (rowIndex) {
//   if (rowIndex === 0) return [1]
//   if (rowIndex === 1) return [1, 1]
//   const res = [[1], [1, 1]]
//   for (let i = 2; i <= rowIndex; i++) {
//     let tmp = []
//     for (let j = 1, arr = res[i - 1]; j < i; j++) {
//       tmp.push(arr[j] + arr[j - 1])
//     }
//     res.push([1, ...tmp, 1])
//   }
//   return res[rowIndex]
// }

// var getRow = function (rowIndex) {
//   let row = []
//   for (let i = 0; i <= rowIndex; i++) {
//     let tmp = new Array(i + 1).fill(1)
//     for (let j = 1, arr = row[i - 1]; j < i; j++) {
//       tmp[j] = arr[j - 1] + arr[j]
//     }
//     row[i] = tmp
//   }
//   return row[rowIndex]
// }

// 错位相加
var getRow = function (rowIndex) {
  let res = []
  for (let i = 0; i <= rowIndex; i++) {
    res = [1, ...res.map((e, i, arr) => e + (arr[i + 1] || 0))]
  }
  return res
}

console.log(getRow(0))
console.log(getRow(1))
console.log(getRow(2))
console.log(getRow(3))
