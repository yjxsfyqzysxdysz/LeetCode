/**
 * 598. 范围求和 II
 *
 * 给你一个 m x n 的矩阵 M ，初始化时所有的 0 和一个操作数组 op ，其中 ops[i] = [ai, bi] 意味着当所有的 0 <= x < ai 和 0 <= y < bi 时， M[x][y] 应该加 1。
 * 在 执行完所有操作后 ，计算并返回 矩阵中最大整数的个数 。
 *
 * 示例 1:
 * 输入: m = 3, n = 3，ops = [[2,2],[3,3]]
 * * * * * * * * * * * * * * * * * * * * * * * * *
 *    0, 0, 0    |    1, 1, 0    |    2, 2, 1
 *    0, 0, 0    |    1, 1, 0    |    2, 2, 1
 *    0, 0, 0    |    0, 0, 0    |    1, 1, 1
 * * * * * * * * * * * * * * * * * * * * * * * * *
 * 输出: 4
 * 解释: M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。
 *
 * 示例 2:
 * 输入: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
 * 输出: 4
 *
 * 示例 3:
 * 输入: m = 3, n = 3, ops = []
 * 输出: 9
 *
 * 提示:
 * 1 <= m, n <= 4 * 10^4
 * 0 <= ops.length <= 10^4
 * ops[i].length == 2
 * 1 <= ai <= m
 * 1 <= bi <= n
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  // 找交集
  let minm = m
  let minn = n
  for (const e of ops) {
    minm = Math.min(minm, e[0])
    minn = Math.min(minn, e[1])
  }
  return minm * minn
}

console.log(
  maxCount(3, 3, [
    [2, 2],
    [3, 3]
  ])
)
console.log(
  maxCount(3, 3, [
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3]
  ])
)
console.log(maxCount(3, 3, []))
