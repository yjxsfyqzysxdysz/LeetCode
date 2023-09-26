/**
 * 拆炸弹
 *
 * 你有一个炸弹需要拆除，时间紧迫！你的情报员会给你一个长度为 n 的 循环 数组 code 以及一个密钥 k 。
 * 为了获得正确的密码，你需要替换掉每一个数字。所有数字会 同时 被替换。
 * 如果 k > 0 ，将第 i 个数字用 接下来 k 个数字之和替换。
 * 如果 k < 0 ，将第 i 个数字用 之前 k 个数字之和替换。
 * 如果 k == 0 ，将第 i 个数字用 0 替换。
 * 由于 code 是循环的， code[n-1] 下一个元素是 code[0] ，且 code[0] 前一个元素是 code[n-1] 。
 * 给你 循环 数组 code 和整数密钥 k ，请你返回解密后的结果来拆除炸弹！
 *
 * 示例 1：
 * 输入：code = [5,7,1,4], k = 3
 * 输出：[12,10,16,13]
 * 解释：每个数字都被接下来 3 个数字之和替换。解密后的密码为 [7+1+4, 1+4+5, 4+5+7, 5+7+1]。注意到数组是循环连接的。
 *
 * 示例 2：
 * 输入：code = [1,2,3,4], k = 0
 * 输出：[0,0,0,0]
 * 解释：当 k 为 0 时，所有数字都被 0 替换。
 *
 * 示例 3：
 * 输入：code = [2,4,9,3], k = -2
 * 输出：[12,5,6,13]
 * 解释：解密后的密码为 [3+9, 2+3, 4+2, 9+4] 。注意到数组是循环连接的。如果 k 是负数，那么和为 之前 的数字。
 *
 * 提示：
 * n == code.length
 * 1 <= n <= 100
 * 1 <= code[i] <= 100
 * -(n - 1) <= k <= n - 1
 */

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
// var decrypt = function (code, k) {
//   const n = code.length
//   if (k == 0) return Array(n).fill(0)
//   else if (k < 0) {
//     return code.map((e, i) => {
//       const tagList = code.slice(Math.max(0, i + k), i).concat(i + k < 0 ? code.slice(i + k, n) : [])
//       return tagList.reduce((a, b) => a + b)
//     })
//   } else {
//     return code.map((e, i) => {
//       const tagList = code
//         .slice(i + 1, Math.min(n, i + 1 + k))
//         .concat(i + 1 + k >= n ? code.slice(0, i + 1 + k - n) : [])
//       return tagList.reduce((a, b) => a + b)
//     })
//   }
// }

var decrypt = function (code, k) {
  // 滑动窗口
  const n = code.length
  if (k === 0) return new Array(n).fill(0)
  const res = new Array(n).fill(0)
  const newCode = new Array(n * 2).fill(0).map((_, idx) => code[idx % n])
  code = newCode
  let left = k > 0 ? 1 : n + k
  let right = k > 0 ? k : n - 1
  let w = 0
  // 初始窗口
  for (let i = left; i <= right; i++) {
    w += code[i]
  }
  for (let i = 0; i < n; i++) {
    res[i] = w
    w = w - code[left] + code[right + 1]
    left++
    right++
  }
  return res
}

console.log(decrypt([5, 7, 1, 4], 3))
console.log(decrypt([1, 2, 3, 4], 0))
console.log(decrypt([2, 4, 9, 3], -2))
