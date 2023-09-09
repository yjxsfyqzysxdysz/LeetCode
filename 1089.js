/**
 * 1089. 复写零
 *
 * 给你一个长度固定的整数数组 arr ，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。
 * 注意：请不要在超过该数组长度的位置写入元素。请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。
 *
 * 示例 1：
 * 输入：arr = [1,0,2,3,0,4,5,0]
 * 输出：[1,0,0,2,3,0,0,4]
 * 解释：调用函数后，输入的数组将被修改为：[1,0,0,2,3,0,0,4]
 *
 * 示例 2：
 * 输入：arr = [1,2,3]
 * 输出：[1,2,3]
 * 解释：调用函数后，输入的数组将被修改为：[1,2,3]
 *
 * 提示：
 * 1 <= arr.length <= 10^4
 * 0 <= arr[i] <= 9
 */

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  if (!arr.includes(0)) return arr
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0)
      i++
    }
  }
  arr.length = len
  return arr
}

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))
console.log(duplicateZeros([1, 2, 3]))
