/**
 * 888. 公平的糖果交换
 *
 * 爱丽丝和鲍勃拥有不同总数量的糖果。给你两个数组 aliceSizes 和 bobSizes ，aliceSizes[i] 是爱丽丝拥有的第 i 盒糖果中的糖果数量，bobSizes[j] 是鲍勃拥有的第 j 盒糖果中的糖果数量。
 * 两人想要互相交换一盒糖果，这样在交换之后，他们就可以拥有相同总数量的糖果。一个人拥有的糖果总数量是他们每盒糖果数量的总和。
 * 返回一个整数数组 answer，其中 answer[0] 是爱丽丝必须交换的糖果盒中的糖果的数目，answer[1] 是鲍勃必须交换的糖果盒中的糖果的数目。如果存在多个答案，你可以返回其中 任何一个 。题目测试用例保证存在与输入对应的答案。
 *
 * 示例 1：
 * 输入：aliceSizes = [1,1], bobSizes = [2,2]
 * 输出：[1,2]
 *
 * 示例 2：
 * 输入：aliceSizes = [1,2], bobSizes = [2,3]
 * 输出：[1,2]
 *
 * 示例 3：
 * 输入：aliceSizes = [2], bobSizes = [1,3]
 * 输出：[2,3]
 *
 * 示例 4：
 * 输入：aliceSizes = [1,2,5], bobSizes = [2,4]
 * 输出：[5,4]
 *
 * 提示：
 * 1 <= aliceSizes.length, bobSizes.length <= 10^4
 * 1 <= aliceSizes[i], bobSizes[j] <= 10^5
 * 爱丽丝和鲍勃的糖果总数量不同。
 * 题目数据保证对于给定的输入至少存在一个有效答案。
 */

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
// var fairCandySwap = function (aliceSizes, bobSizes) {
//   const aliceTotal = aliceSizes.reduce((a, b) => a + b)
//   const bobTotal = bobSizes.reduce((a, b) => a + b)
//   const dif = (aliceTotal - bobTotal) / 2
//   console.log(aliceTotal, bobTotal, dif)
//   for (let i = 0; i < aliceSizes.length; i++) {
//     for (let j = 0; j < bobSizes.length; j++) {
//       const diff = aliceSizes[i] - bobSizes[j]
//       if (diff === dif) {
//         return [aliceSizes[i], bobSizes[j]]
//       } else if (diff < dif) {
//         break
//       }
//     }
//   }
// }

var fairCandySwap = function (aliceSizes, bobSizes) {
  const dif = (aliceSizes.reduce((a, b) => a + b) - bobSizes.reduce((a, b) => a + b)) / 2
  const map = new Set(aliceSizes)
  for (const e of bobSizes) {
    if (map.has(e + dif)) {
      return [e + dif, e]
    }
  }
}

console.log(fairCandySwap([1, 1], [2, 2]))
console.log(fairCandySwap([1, 2], [2, 3]))
console.log(fairCandySwap([2], [1, 3]))
console.log(fairCandySwap([1, 2, 5], [2, 4]))
