/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 * 示例 1：
 * 输入：n = 2
 * 输出：2
 * 解释：有两种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶
 * 2. 2 阶
 *
 * 示例 2：
 * 输入：n = 3
 *
 * 输出：3
 * 解释：有三种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶 + 1 阶
 * 2. 1 阶 + 2 阶
 * 3. 2 阶 + 1 阶
 *
 * 提示：
 * 1 <= n <= 45
 */

/**
 * @param {number} n
 * @return {number}
 */
/**
 * 1--------1
 * 2--------2
 * 3--------3
 * 4--------5
 * 5--------8
 * F(n) = F(n-1) + F(n-2)
 */

// var climbStairs = function (n) {
//   let r = 1
//   for (let i = 1, f1 = 0, f2 = 0; i <= n; i++) {
//     f1 = f2
//     f2 = r
//     r = f1 + f2
//   }
//   return r
// }

// 递归
// var climbStairs = function (n) {
//   function fn(n) {
//     if (n <= 2) return n
//     return fn(n - 1) + fn(n - 2)
//   }
//   return fn(n)
// }

// 记忆化递归
// var climbStairs = function (n) {
//   const map = new Map()
//   map.set(1, 1)
//   map.set(2, 2)
//   function fn(n) {
//     if (map.has(n)) return map.get(n)
//     const m = fn(n - 1) + fn(n - 2)
//     map.set(n, m)
//     return m
//   }
//   return fn(n)
// }

// 动态规划
// var climbStairs = function (n) {
//   if (n <= 2) return n
//   const tmp = [, 1, 2]
//   for (let i = 3; i <= n; i++) {
//     tmp[i] = tmp[i - 1] + tmp[i - 2]
//   }
//   return tmp[n]
// }

// 斐波那契数列
var climbStairs = function (n) {
  if (n === 1) return 1
  for (let i = 3, fir = 1, sec = 2; i <= n; i++) {
    ;[fir, sec] = [sec, fir + sec]
  }
  return sec
}

// 通项公式
var climbStairs = function(n) {
    const sqrt5 = Math.sqrt(5);
    const fibn = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
    return Math.round(fibn / sqrt5);
};

console.log(climbStairs(2))
console.log(climbStairs(3))
