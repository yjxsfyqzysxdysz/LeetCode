/**
 * 有效时间的数目
 *
 * 给你一个长度为 5 的字符串 time ，表示一个电子时钟当前的时间，格式为 "hh:mm" 。最早 可能的时间是 "00:00" ，最晚 可能的时间是 "23:59" 。
 * 在字符串 time 中，被字符 ? 替换掉的数位是 未知的 ，被替换的数字可能是 0 到 9 中的任何一个。
 * 请你返回一个整数 answer ，将每一个 ? 都用 0 到 9 中一个数字替换后，可以得到的有效时间的数目。
 *
 * 示例 1：
 * 输入：time = "?5:00"
 * 输出：2
 * 解释：我们可以将 ? 替换成 0 或 1 ，得到 "05:00" 或者 "15:00" 。注意我们不能替换成 2 ，因为时间 "25:00" 是无效时间。所以我们有两个选择。
 *
 * 示例 2：
 * 输入：time = "0?:0?"
 * 输出：100
 * 解释：两个 ? 都可以被 0 到 9 之间的任意数字替换，所以我们总共有 100 种选择。
 *
 * 示例 3：
 * 输入：time = "??:??"
 * 输出：1440
 * 解释：小时总共有 24 种选择，分钟总共有 60 种选择。所以总共有 24 * 60 = 1440 种选择。
 *
 * 提示：
 * time 是一个长度为 5 的有效字符串，格式为 "hh:mm" 。
 * "00" <= hh <= "23"
 * "00" <= mm <= "59"
 * 字符串中有的数位是 '?' ，需要用 0 到 9 之间的数字替换。
 */

/**
 * @param {string} time
 * @return {number}
 */
// var countTime = function (time) {
//   const [h, m] = time.split(':')
//   let hRate = 1
//   let mRate = 1

//   if (h === '??') {
//     // ?? 24
//     hRate = 24
//   } else if (h > '?3') {
//     hRate = 2
//     // ?4 04 14
//   } else if (h > '?') {
//     hRate = 3
//     // ?* 00 10 20
//   } else if (h > '29') {
//     // *? 20 21 22 23
//     hRate = 4
//   } else if (/[?]/.test(h)) {
//     // *? 00 01 02 03 04 05 06 07 08 09
//     hRate = 10
//   } else {
//     // **
//   }
//   if (m === '??') {
//     // ?? 60
//     mRate = 60
//   } else if (m > '?') {
//     // ?* 00 01 02 03 04 05
//     mRate = 6
//   } else if (/[?]/.test(m)) {
//     // *? 01 02 03 04 05 06 07 08 09
//     mRate = 10
//   } else {
//     // **
//   }
//   return hRate * mRate
// }

// var countTime = function (time) {
//   const hList = new Set()
//   const mList = new Set()
//   for (let i = isFinite(time[0]) ? +time[0] : 0, len = isFinite(time[0]) ? +time[0] : 2; i <= len; i++) {
//     for (let j = isFinite(time[1]) ? +time[1] : 0, len = isFinite(time[1]) ? +time[1] : 9; j <= len; j++) {
//       if (`${i}${j}` === time.slice(0, 2)) continue
//       if (`${i}${j}` < '24') {
//         hList.add(`${i}${j}`)
//       }
//     }
//   }
//   for (let i = isFinite(time[3]) ? +time[3] : 0, len = isFinite(time[3]) ? +time[3] : 6; i <= len; i++) {
//     for (let j = isFinite(time[4]) ? +time[4] : 0, len = isFinite(time[4]) ? +time[4] : 9; j <= len; j++) {
//       if (`${i}${j}` === time.slice(-2)) continue
//       if (`${i}${j}` < '60') {
//         mList.add(`${i}${j}`)
//       }
//     }
//   }
//   return (hList.size || 1) * (mList.size || 1)
// }

// var countTime = function (time) {
//   const list = new Set()
//   for (let i = isFinite(time[0]) ? +time[0] : 0, len = isFinite(time[0]) ? +time[0] : 2; i <= len; i++) {
//     for (let j = isFinite(time[1]) ? +time[1] : 0, len = isFinite(time[1]) ? +time[1] : 9; j <= len; j++) {
//       if (`${i}${j}` > '23') continue
//       for (let k = isFinite(time[3]) ? +time[3] : 0, len = isFinite(time[3]) ? +time[3] : 5; k <= len; k++) {
//         for (let l = isFinite(time[4]) ? +time[4] : 0, len = isFinite(time[4]) ? +time[4] : 9; l <= len; l++) {
//           if (`${i}${j}:${k}${l}` === time) continue
//           list.add(`${i}${j}:${k}${l}`)
//         }
//       }
//     }
//   }
//   return list.size || 1
// }

var countTime = function (time) {
  let res = 0
  for (let i = isFinite(time[0]) ? +time[0] : 0, len = isFinite(time[0]) ? +time[0] : 2; i <= len; i++) {
    for (let j = isFinite(time[1]) ? +time[1] : 0, len = isFinite(time[1]) ? +time[1] : 9; j <= len; j++) {
      if (`${i}${j}` > '23') continue
      for (let k = isFinite(time[3]) ? +time[3] : 0, len = isFinite(time[3]) ? +time[3] : 5; k <= len; k++) {
        for (let l = isFinite(time[4]) ? +time[4] : 0, len = isFinite(time[4]) ? +time[4] : 9; l <= len; l++) {
          if (`${i}${j}:${k}${l}` === time) continue
          res++
        }
      }
    }
  }
  return res || 1
}

console.log(countTime('2?:??'))
console.log(countTime('07:?3'))
console.log(countTime('?5:00'))
console.log(countTime('0?:0?'))
console.log(countTime('??:??'))
