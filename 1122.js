/**
 * 1122. 数组的相对排序
 *
 * 给你两个数组，arr1 和 arr2，arr2 中的元素各不相同，arr2 中的每个元素都出现在 arr1 中。
 * 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
 *
 * 示例 1：
 * 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * 输出：[2,2,2,1,4,3,3,9,6,7,19]
 *
 * 示例  2:
 * 输入：arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
 * 输出：[22,28,8,6,17,44]
 *
 * 提示：
 * 1 <= arr1.length, arr2.length <= 1000
 * 0 <= arr1[i], arr2[i] <= 1000
 * arr2 中的元素 arr2[i]  各不相同
 * arr2 中的每个元素 arr2[i] 都出现在 arr1 中
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// var relativeSortArray = function (arr1, arr2) {
//   const arr = Array(arr2.length)
//     .fill('')
//     .map(() => [])
//   const list = []
//   const map = {}
//   for (let i = 0; i < arr2.length; i++) {
//     map[arr2[i]] = i
//   }
//   for (const e of arr1) {
//     if (arr2.includes(e)) {
//       arr[map[e]].push(e)
//     } else {
//       list.push(e)
//     }
//   }
//   return [].concat(
//     arr.flat(),
//     list.sort((a, b) => a - b)
//   )
// }

var relativeSortArray = function (arr1, arr2) {
  const map = {}
  for (const e of arr1) {
    if (!map[e]) map[e] = 0
    map[e]++
  }
  const ans = []
  for (const e of arr2) {
    ans.push(...Array(map[e]).fill(e))
    map[e] = 0
  }
  for (const e in map) {
    if (map[e]) {
      ans.push(...Array(map[e]).fill(+e))
    }
  }
  return ans
}

console.log(
  relativeSortArray(
    [2, 21, 43, 38, 0, 42, 33, 7, 24, 13, 12, 27, 12, 24, 5, 23, 29, 48, 30, 31],
    [2, 42, 38, 0, 43, 21]
  )
)
// console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]))
// console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]))
