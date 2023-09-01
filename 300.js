/**
 * 最长递增子序列
 *
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 *
 * 示例 1：
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 *
 * 示例 2：
 * 输入：nums = [0,1,0,3,2,3]
 * 输出：4
 *
 * 示例 3：
 * 输入：nums = [7,7,7,7,7,7,7]
 * 输出：1
 *
 * 提示：
 * 1 <= nums.length <= 2500
 * -10^4 <= nums[i] <= 10^4
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function (nums) {
//   let maxs = 1
//   const len = nums.length
//   const tmp = new Array(len).fill(1)
//   for (let i = 1; i < len; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         tmp[i] = Math.max(tmp[i], tmp[j]+1)
//       }
//     }
//     maxs = Math.max(maxs, tmp[i])
//   }
//   return maxs
// }

var lengthOfLIS = function (nums) {
  // 动态规划
  /**
   * 穷举分析
   * * 自顶向上的穷举
   * * * 当nums只有一个元素  10 时, [10]                                                  长度是 1
   * * * 当nums再加入一个元素 9 时, [10]或者[9]                                            长度是 1
   * * * 当nums再加入一个元素 2 时, [10]或者[9]或者[2]                                     长度是 1
   * * * 当nums再加入一个元素 5 时, [2,5]                                                  长度是 2
   * * * 当nums再加入一个元素 3 时, [2,5]或者[2,3]                                         长度是 2
   * * * 当nums再加入一个元素 7 时, [2,5,7]或者[2,3,7]                                     长度是 3
   * * * 当nums再加入一个元素101时, [2,5,7,101]或者[2,3,7,101]                             长度是 4
   * * * 当nums再加入一个元素 18时, [2,5,7,101]或者[2,3,7,101]或者[2,5,7,18]或者[2,3,7,18]  长度是 4
   * * * 当nums再加入一个元素 7 时, [2,5,7,101]或者[2,3,7,101]或者[2,5,7,18]或者[2,3,7,18]  长度是 4
   * 确定边界
   * * 当nums数组只有一个元素时,最长递增子序列的长度dp(1)=1
   * * 当nums数组有两个元素时,dp(2) =2或者1, 因此边界就是dp(1)=1。
   * 找规律,确定最优子结构
   * * 如果新加入一个元素 nums[i], 最长递增子序列要么是以 nums[i] 结尾的递增子序列, 要么就是 nums[i-1] 的最长递增子序列
   * * nums[i] 的最长递增子序列已经跟子问题 nums[i-1] 的最长递增子序列有关联了
   * *
   * * 原问题数组 nums[i] 的最长递增子序列 = 子问题数组 nums[i-1] 的最长递增子序列 | nums[i] 结尾的最长递增子序列
   * * 如果存在j属于区间 [0,i-1],并且 num[i]>num[j] 的话, 则有 dp(i) =max(dp(j))+1
   * *
   * * 最优子结构
   * * * dp(i) =max(dp(j))+1, 存在j属于区间[0，i-1], 并且num[i]>num[j]
   * * * max(dp(j)) 就是最优子结构
   * 状态转移方程
   * * 最长递增子序列 =max(dp[i])
   */
  const len = nums.length
  if (len === 1) return 1
  // 初始化
  // dp 保存 以 nums[i] 作为结尾的 递增数列 的长度
  const dp = Array(len).fill(1)
  for (let i = 1; i < len; i++) {
    //从下标0到i遍历
    for (let j = 0; j < i; j++) {
      //找到前面比nums[i]小的数nums[j],即有dp[i]= dp[j]+1
      if (nums[j] < nums[i]) {
        //因为会有多个小于nums[i]的数，也就是会存在多种组合了嘛，我们就取最大放到dp[i]
        //dp[i]在第一次遍历时有用
        //因为动态规划以最小区间开始,所以遍历的dp[j]一定是之前保存好状态的dp[i]
        //每个dp[j]都代表数组中之前存的以遍历时数字结尾的状态
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])) // 4
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])) // 4
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])) // 1
console.log(lengthOfLIS([4, 10, 4, 3, 8, 9])) // 3
