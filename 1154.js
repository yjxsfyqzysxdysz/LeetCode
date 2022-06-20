/**
 * 一年中的第几天
 *
 * 给你一个字符串 date ，按 YYYY-MM-DD 格式表示一个 现行公元纪年法 日期。返回该日期是当年的第几天。
 *
 * 示例 1：
 * 输入：date = "2019-01-09"
 * 输出：9
 * 解释：给定日期是2019年的第九天。
 *
 * 示例 2：
 * 输入：date = "2019-02-10"
 * 输出：41
 *
 * 提示：
 * date.length == 10
 * date[4] == date[7] == '-'，其他的 date[i] 都是数字
 * date 表示的范围从 1900 年 1 月 1 日至 2019 年 12 月 31 日
 */

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  return (new Date(date) - new Date(date.match(/^\d+/))) / 1e3 / 24 / 60 / 60 + 1
}

console.log(dayOfYear('2019-01-09'))
console.log(dayOfYear('2019-02-10'))
