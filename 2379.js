/**
 * 得到 K 个黑块的最少涂色次数
 *
 * 给你一个长度为 n 下标从 0 开始的字符串 blocks ，blocks[i] 要么是 'W' 要么是 'B' ，表示第 i 块的颜色。字符 'W' 和 'B' 分别表示白色和黑色。
 * 给你一个整数 k ，表示想要 连续 黑色块的数目。
 * 每一次操作中，你可以选择一个白色块将它 涂成 黑色块。
 * 请你返回至少出现 一次 连续 k 个黑色块的 最少 操作次数。
 *
 * 示例 1：
 * 输入：blocks = "WBBWWBBWBW", k = 7
 * 输出：3
 * 解释：
 * 一种得到 7 个连续黑色块的方法是把第 0 ，3 和 4 个块涂成黑色。
 * 得到 blocks = "BBBBBBBWBW" 。
 * 可以证明无法用少于 3 次操作得到 7 个连续的黑块。
 * 所以我们返回 3 。
 *
 * 示例 2：
 * 输入：blocks = "WBWBBBW", k = 2
 * 输出：0
 * 解释：
 * 不需要任何操作，因为已经有 2 个连续的黑块。
 * 所以我们返回 0 。
 *
 * 提示：
 * n == blocks.length
 * 1 <= n <= 100
 * blocks[i] 要么是 'W' ，要么是 'B' 。
 * 1 <= k <= n
 */

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
// var minimumRecolors = function (blocks, k) {
//   // 滑动窗口
//   let minHandlers = blocks.length
//   for (let i = 0, j = k, len = minHandlers - k; i <= len; i++, j++) {
//     let num = 0
//     for (let e of blocks.slice(i, j)) {
//       if (e === 'W') num++
//     }
//     minHandlers = Math.min(minHandlers, num)
//     if (minHandlers === 0) break
//   }
//   return minHandlers
// }

var minimumRecolors = function (blocks, k) {
  // 滑动窗口
  let minHandlers = 0
  for (let e of blocks.slice(0, k)) {
    if (e === 'W') minHandlers++
  }
  for (let i = 1, j = k, num = minHandlers, len = blocks.length; j < len; i++, j++) {
    if (blocks[i - 1] === 'W') num--
    if (blocks[j] === 'W') num++
    minHandlers = Math.min(minHandlers, num)
    if (minHandlers === 0) break
  }
  return minHandlers
}

// console.log(minimumRecolors('WBBWWBBWBW', 7))
// console.log(minimumRecolors('WBWBBBW', 2))
// console.log(minimumRecolors('BWWWBB', 6))
console.log(minimumRecolors('BWBBWWBBBWBWWWBWWBBWBWBBWBB', 11))
