/**
 * 914. 卡牌分组
 *
 * 给定一副牌，每张牌上都写着一个整数。
 * 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
 * 每组都有 X 张牌。
 * 组内所有的牌上都写着相同的整数。
 * 仅当你可选的 X >= 2 时返回 true。
 *
 * 示例 1：
 * 输入：deck = [1,2,3,4,4,3,2,1]
 * 输出：true
 * 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
 *
 * 示例 2：
 * 输入：deck = [1,1,1,2,2,2,3,3]
 * 输出：false
 * 解释：没有满足要求的分组。
 *
 * 提示：
 * 1 <= deck.length <= 10^4
 * 0 <= deck[i] < 10^4
 */

/**
 * @param {number[]} deck
 * @return {boolean}
 */
// var hasGroupsSizeX = function (deck) {
//   if (deck.length === 1) return false
//   const map = {}
//   for (const e of deck) {
//     if (!map[e]) map[e] = 0
//     map[e]++
//   }
//   const numsList = Object.values(map)
//   const max = Math.max(...numsList)
//   const min = Math.min(...numsList)
//   if (max == min && max >= 2) return true
//   // 公约数 2以上
//   for (let i = 2; i <= min; i++) {
//     if (min % i == 0) {
//       let target = true
//       for (const e of numsList) {
//         if (e % i !== 0) {
//           target = !target
//           break
//         }
//       }
//       if (target) return true
//     }
//   }
//   return false
// }

var hasGroupsSizeX = function (deck) {
  if (deck.length === 1) return false
  // 求最大公约数
  function getGCD(a, b) {
    return b === 0 ? a : getGCD(b, a % b)
  }
  const map = {}
  for (const e of deck) {
    if (!map[e]) map[e] = 0
    map[e]++
  }
  const numsList = Object.values(map)
  // 最大公约数
  let gcd = 0

  for (const e of numsList) {
    gcd = getGCD(gcd, e)
    if (gcd === 1) return false
  }
  return gcd >= 2
}

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]))
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]))
console.log(hasGroupsSizeX([1]))
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2]))
console.log(hasGroupsSizeX([1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3]))
