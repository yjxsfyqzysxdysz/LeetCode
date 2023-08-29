/**
 * 455. 分发饼干
 *
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
 * 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 *
 * 示例 1:
 * 输入: g = [1,2,3], s = [1,1]
 * 输出: 1
 * 解释:
 * 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
 * 虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
 * 所以你应该输出1。
 *
 * 示例 2:
 * 输入: g = [1,2], s = [1,2,3]
 * 输出: 2
 * 解释:
 * 你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
 * 你拥有的饼干数量和尺寸都足以让所有孩子满足。
 * 所以你应该输出2.
 *
 * 提示：
 * 1 <= g.length <= 3 * 10^4
 * 0 <= s.length <= 3 * 10^4
 * 1 <= g[i], s[j] <= 2^31 - 1
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// var findContentChildren = function (g, s) {
//   // 排序+双指针
//   g.sort((a, b) => b - a)
//   s.sort((a, b) => b - a)
//   let index = 0
//   let count = 0
//   for (const e of s) {
//     for (; index < g.length; index++) {
//       if (g[index] <= e) {
//         count++
//         index++
//         break
//       }
//     }
//     if (index = g.length) break
//   }
//   return count
// }

/**
 * 贪心
 * * 概念
 * 贪心法所作出的选择只是在某种意义上的局部最优，而不是从整体最优考虑
 * 只根据当前已有的信息做出选择，且将来找个选择都不会改变
 * 这种局部最优选择并不能获得的整体最优解，但通常能获得近似最优解
 *
 * * 最优子结构性质
 * 当一个问题的最优解包含其子问题的最优解时
 * 称此问题具有最优子结构性质
 * 即问题满足最优性原理
 *
 * * 贪心选择性质
 * 问题整体最优解可以通过一系列局部最优的选择，即 贪心选择 得到
 * 贪心法通常自顶向下的方式做出一系列的贪心选择
 */
// var findContentChildren = function (childs, cookies) {
//   // 排序 + 双指针 + 贪心
//   childs.sort((a, b) => a - b)
//   cookies.sort((a, b) => a - b)
//   const childLen = childs.length,
//     cookieLen = cookies.length
//   let count = 0
//   for (let i = 0, j = 0; i < childLen && j < cookieLen; i++, j++) {
//     while (j < cookieLen && childs[i] > cookies[j]) {
//       j++
//     }
//     if (j < cookieLen) {
//       count++
//     }
//   }
//   return count
// }

console.log(findContentChildren([1, 2, 3], [1, 1]))
console.log(findContentChildren([1, 2], [1, 2, 3]))
