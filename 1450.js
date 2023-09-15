/**
 * 在既定时间做作业的学生人数
 *
 * 给你两个整数数组 startTime（开始时间）和 endTime（结束时间），并指定一个整数 queryTime 作为查询时间。
 * 已知，第 i 名学生在 startTime[i] 时开始写作业并于 endTime[i] 时完成作业。
 * 请返回在查询时间 queryTime 时正在做作业的学生人数。形式上，返回能够使 queryTime 处于区间 [startTime[i], endTime[i]]（含）的学生人数。
 *
 * 示例 1：
 * 输入：startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
 * 输出：1
 * 解释：一共有 3 名学生。
 * 第一名学生在时间 1 开始写作业，并于时间 3 完成作业，在时间 4 没有处于做作业的状态。
 * 第二名学生在时间 2 开始写作业，并于时间 2 完成作业，在时间 4 没有处于做作业的状态。
 * 第三名学生在时间 3 开始写作业，预计于时间 7 完成作业，这是是唯一一名在时间 4 时正在做作业的学生。
 *
 * 示例 2：
 * 输入：startTime = [4], endTime = [4], queryTime = 4
 * 输出：1
 * 解释：在查询时间只有一名学生在做作业。
 *
 * 示例 3：
 * 输入：startTime = [4], endTime = [4], queryTime = 5
 * 输出：0
 *
 * 示例 4：
 * 输入：startTime = [1,1,1,1], endTime = [1,3,2,4], queryTime = 7
 * 输出：0
 *
 * 示例 5：
 * 输入：startTime = [9,8,7,6,5,4,3,2,1], endTime = [10,10,10,10,10,10,10,10,10], queryTime = 5
 * 输出：5
 *
 * 提示：
 * startTime.length == endTime.length
 * 1 <= startTime.length <= 100
 * 1 <= startTime[i] <= endTime[i] <= 1000
 * 1 <= queryTime <= 1000
 */

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
// var busyStudent = function (startTime, endTime, queryTime) {
//   let count = 0
//   for (let i = 0, n = startTime.length; i < n; i++) {
//     if (startTime[i] <= queryTime && queryTime <= endTime[i]) count++
//   }
//   return count
// }

var busyStudent = function (startTime, endTime, queryTime) {
  // 查分数组
  /**
   * 对差分数组求前缀和
   * 可以得到统计出 t 时刻正在做作业的人数
   * 我们初始化差分数组 cnt 每个元素都为 0，在每个学生的起始时间处 cnt[startTime[i]] 加 1，在每个学生的结束时间处 cnt[endTime[i]+1] 减 1，因此我们可以统计出 queryTime 时刻正在做作业的人数为
   * ∑j=0 queryTimecnt[j] cnt[j]。
   */
  const maxEndTime = Math.max(...endTime)
  if (queryTime > maxEndTime) return 0
  const n = startTime.length
  const cnt = new Array(maxEndTime + 2).fill(0)
  for (let i = 0; i < n; i++) {
    cnt[startTime[i]]++
    cnt[endTime[i] + 1]--
  }
  console.log(cnt)
  let ans = 0
  for (let i = 0; i <= queryTime; i++) {
    ans += cnt[i]
  }
  return ans
}

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4))
console.log(busyStudent([4], [4], 4))
console.log(busyStudent([4], [4], 5))
console.log(busyStudent([1, 1, 1, 1], [1, 3, 2, 4], 7))
console.log(busyStudent([9, 8, 7, 6, 5, 4, 3, 2, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10], 5))
