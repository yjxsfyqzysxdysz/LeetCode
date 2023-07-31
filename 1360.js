/**
 * 日期之间隔几天
 *
 * 请你编写一个程序来计算两个日期之间隔了多少天。
 * 日期以字符串形式给出，格式为 YYYY-MM-DD，如示例所示。
 *
 * 示例 1：
 * 输入：date1 = "2019-06-29", date2 = "2019-06-30"
 * 输出：1
 *
 * 示例 2：
 * 输入：date1 = "2020-01-15", date2 = "2019-12-31"
 * 输出：15
 *
 * 提示：
 * 给定的日期是 1971 年到 2100 年之间的有效日期。
 */

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
// var daysBetweenDates = function (date1, date2) {
//   return Math.ceil(Math.abs(Date.parse(date1) - Date.parse(date2)) / 1000 / 3600 / 24)
// }

var daysBetweenDates = function (date1, date2) {
  const isLeapYear = year => (!(year % 4) && year % 100) || !(year % 400)
  const mouth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const [dateMax, dateMin] = date1 > date2 ? [date1, date2] : [date2, date1]
  const [y1, m1, d1] = dateMax.split('-')
  const [y2, m2, d2] = dateMin.split('-')
  let date = 0
  // 年
  if (y1 - y2 >= 1) {
    // 间隔超过1年
    for (let y = +y2 + 1; y < y1; y++) {
      date += isLeapYear(y) ? 366 : 365
    }
    // 发生所在年的月
    for (let i = +m2, isLeap = isLeapYear(y2); i < 12; i++) {
      date += i === 1 && isLeap ? 29 : mouth[i]
    }
    for (let i = 0, isLeap = isLeapYear(y1); i < m1 - 1; i++) {
      date += i === 1 && isLeap ? 29 : mouth[i]
    }
  } else {
    // 同一年 的月
    for (let i = +m2, isLeap = isLeapYear(y1); i < m1 - 1; i++) {
      date += i === 1 && isLeap ? 29 : mouth[i]
    }
  }
  // 日
  if (y1 === y2 && m1 === m2) {
    date += d1 - d2
  } else {
    date += (+m2 === 2 && isLeapYear(y2) ? 29 : mouth[m2 - 1]) - d2 + +d1
  }
  return date
}

// console.log(daysBetweenDates('2009-08-18', '2080-08-08'))
// console.log(daysBetweenDates('1971-06-29', '2010-09-23'))
console.log(daysBetweenDates('2019-06-29', '2019-06-30'))
// console.log(daysBetweenDates('2020-01-15', '2019-12-31'))
