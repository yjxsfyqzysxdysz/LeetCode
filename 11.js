/**
 * 11. 盛最多水的容器
 *
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。
 * 说明：你不能倾斜容器。
 *
 * 示例 1：
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 * 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 *
 * 示例 2：
 * 输入：height = [1,1]
 * 输出：1
 *
 * 提示：
 * n == height.length
 * 2 <= n <= 10^5
 * 0 <= height[i] <= 10^4
 */

/**
 * @param {number[]} height
 * @return {number}
 */
// S面积 = min(h[i], h[j]) * (j - i)

// var maxArea = function (height) {
//   // 暴力枚举
//   // i、j 移动
//   // height[*] 变化不定， 面积可大可小
//   // j - i      一定变小，面积一定变小
//   let area = 0
//   for (let i = 0; i < height.length; i++) {
//     if (height[i] < height[i - 1]) continue
//     for (let j = height.length - 1; j > i; j--) {
//       if (height[j] < height[j + 1]) continue
//       area = Math.max(area, Math.min(height[i], height[j]) * (j - i))
//     }
//   }
//   return area
// }

// 双指针
var maxArea = function (height) {
  const n = height.length
  let i = 0,
    j = n - 1,
    area = 0
    while (i < j) {
      area = Math.max(area, Math.min(height[i], height[j]) * (j - i))
      /**
       * 移动短板，下一个可能 变小、不变、变大
       * 移动长板，下一个可能 变小、不变
       */
    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }
  return area
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1, 1]))
