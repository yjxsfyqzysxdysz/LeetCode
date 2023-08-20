/**
 * LCR 066. 最小展台数量
 *
 * 力扣嘉年华将举办一系列展览活动，后勤部将负责为每场展览提供所需要的展台。 已知后勤部得到了一份需求清单，记录了近期展览所需要的展台类型， demand[i][j] 表示第 i 天展览时第 j 个展台的类型。 在满足每一天展台需求的基础上，请返回后勤部需要准备的 最小 展台数量。
 * 注意：
 * 同一展台在不同天中可以重复使用。
 *
 * 示例 1：
 * 输入：demand = ["acd","bed","accd"]
 * 输出：6
 * 解释： 第 0 天需要展台 a、c、d； 第 1 天需要展台 b、e、d； 第 2 天需要展台 a、c、c、d； 因此，后勤部准备 abccde 的展台，可以满足每天的展览需求;
 *
 * 示例 2：
 * 输入：demand = ["abc","ab","ac","b"]
 * 输出：3
 *
 * 提示：
 * 1 <= demand.length,demand[i].length <= 100
 * demand[i][j] 仅为小写字母
 */

/**
 * @param {string[]} demand
 * @return {number}
 */
// var minNumBooths = function (demand) {
//   const map = new Map()
//   demand.forEach(e => {
//     let tmp = new Map(map.entries())
//     for (const s of e) {
//       if (tmp.has(s)) {
//         tmp.set(s, tmp.get(s) - 1)
//         if (tmp.get(s) < 0) {
//           map.set(s, map.get(s) + 1)
//         }
//       } else {
//         tmp.set(s, 0)
//         map.set(s, 1)
//       }
//     }
//   })
//   return [...map.values()].reduce((res, cur) => res + cur)
// }

var minNumBooths = function (demand) {
  const arr = Array(26).fill(0)
  demand.forEach(e => {
    let tmp = [...arr]
    for (const s of e) {
      const index = s.charCodeAt() - 97
      if (!tmp[index] || --tmp[index] < 0) {
        arr[index]++
      }
    }
  })
  return arr.reduce((a, b) => a + b)
}

console.log(minNumBooths(['ccluro', 'mmjhp', 'ln', 'ayoqwqtqrh', 'm', 'luhnsb', 'gyyy', 'auuksw']))
// console.log(minNumBooths(['acd', 'bed', 'accd']))
// console.log(minNumBooths(['abc', 'ab', 'ac', 'b']))
