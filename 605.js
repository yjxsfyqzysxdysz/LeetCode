/**
 * 605. 种花问题
 *
 * 假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
 * 给你一个整数数组 flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false 。
 *
 * 示例 1：
 * 输入：flowerbed = [1,0,0,0,1], n = 1
 * 输出：true
 *
 * 示例 2：
 * 输入：flowerbed = [1,0,0,0,1], n = 2
 * 输出：false
 *
 * 提示：
 * 1 <= flowerbed.length <= 2 * 10^4
 * flowerbed[i] 为 0 或 1
 * flowerbed 中不存在相邻的两朵花
 * 0 <= n <= flowerbed.length
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// var canPlaceFlowers = function (flowerbed, n) {
//   if (!n) return true
//   for (let i = 0, len = 0, n = flowerbed.length; i <= n; i++) {
//     const cur = flowerbed[i]
//     if (cur === 0) len++
//     else {
//       if (len) {
//         if (flowerbed[i - len - 1] === 1) len--
//         if (cur === 1 && flowerbed[i - 1] === 0) len--
//       } else continue
//       if (len > 0) {
//         n -= Math.floor((len + 1) / 2)
//         if (n <= 0) return true
//       }
//       len = 0
//     }
//   }
//   return false
// }

var canPlaceFlowers = function (flowerbed, n) {
  const len = flowerbed.length
  let i = 0
  while (i < len) {
    if (flowerbed[i] === 1) {
      i += 2
    } else if (flowerbed[i + 1] === 0 || i == len - 1) {
      n--
      i += 2
    } else {
      i += 3
    }
  }
  return n <= 0
}

console.log(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 0))
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2))
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2))
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1))
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2))
