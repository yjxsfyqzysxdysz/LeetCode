/**
 * 1013. 将数组分成和相等的三个部分
 *
 * 给你一个整数数组 arr，只有可以将其划分为三个和相等的 非空 部分时才返回 true，否则返回 false。
 * 形式上，如果可以找出索引 i + 1 < j 且满足 (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1]) 就可以将数组三等分。
 *
 * 示例 1：
 * 输入：arr = [0,2,1,-6,6,-7,9,1,2,0,1]
 * 输出：true
 * 解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
 *
 * 示例 2：
 * 输入：arr = [0,2,1,-6,6,7,9,-1,2,0,1]
 * 输出：false
 *
 * 示例 3：
 * 输入：arr = [3,3,6,5,-2,2,5,1,-9,4]
 * 输出：true
 * 解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 *
 * 提示：
 * 3 <= arr.length <= 5 * 10^4
 * -10^4 <= arr[i] <= 10^4
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
// var canThreePartsEqualSum = function (arr) {
//   // 暴力
//   const total = arr.reduce((a, b) => a + b)
//   if (total % 3) return false
//   const tagVal = total / 3
//   const len = arr.length
//   for (let i = 0, count1 = 0; i < len; i++) {
//     count1 += arr[i]
//     if (count1 !== tagVal) continue
//     for (let j = i + 1, count2 = 0; j < len; j++) {
//       count2 += arr[j]
//       if (count2 == tagVal && j + 1 < len && arr.slice(j + 1).reduce((a, b) => a + b) == tagVal) return true
//     }
//   }
//   return false
// }

// var canThreePartsEqualSum = function (arr) {
//   // 前缀和
//   const len = arr.length
//   const map = new Array(len).fill(0)
//   const tagVal =
//     arr.reduce((a, b, i) => {
//       a += b
//       map[i] = a
//       return a
//     }, 0) / 3
//   for (let i = 0; i < len - 2; i++) {
//     if (map[i] !== tagVal) continue
//     for (let j = i + 1; j < len - 1; j++) {
//       if (map[j] - map[i] == tagVal && map[len - 1] - map[j] == tagVal) {
//         return true
//       }
//     }
//   }
//   return false
// }

var canThreePartsEqualSum = function (arr) {
  // 贪心
  const total = arr.reduce((a, b) => a + b)
  if (total % 3) return false
  const tagVal = total / 3
  const len = arr.length
  let i = 0,
    cur = 0
  while (i < len) {
    cur += arr[i]
    if (cur == tagVal) break
    i++
  }
  if (cur != tagVal) return false
  i++
  cur = 0
  while (i + 1 < len) {
    cur += arr[i]
    if (cur == tagVal) return true
    i++
  }
  return false
}

console.log(canThreePartsEqualSum([0, 0, 0, 0])) // true
console.log(canThreePartsEqualSum([1, -1, 1, -1])) // false
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])) // true
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])) // false
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4])) // true
console.log(
  canThreePartsEqualSum([
    -7,
    57,
    -76,
    5,
    51,
    -57,
    27,
    83,
    68,
    39,
    -38,
    43,
    -79,
    42,
    -79,
    72,
    -58,
    -29,
    -34,
    23,
    20,
    -67,
    -67,
    74,
    10,
    -90,
    -91,
    41,
    22,
    -12,
    -75,
    -3,
    51,
    13,
    9,
    58,
    72,
    -3,
    48,
    -28,
    78,
    15,
    13,
    22,
    -68,
    62,
    33,
    -18,
    21,
    -2,
    56,
    41,
    27,
    -33,
    -35,
    -36,
    -6,
    -73,
    -9,
    -45,
    -16,
    4,
    51,
    -54,
    -92,
    79,
    -92,
    -12,
    -9,
    39,
    1,
    -60,
    78,
    16,
    -77,
    -45,
    26,
    -43,
    44,
    -21,
    -27,
    74,
    -68,
    -58,
    22,
    52,
    100,
    37,
    48,
    99,
    98,
    -34,
    36,
    25,
    -85,
    83,
    99,
    -64,
    -37,
    20,
    0,
    13,
    85,
    18,
    98,
    -91,
    86,
    -94,
    -92,
    -42,
    -82,
    89,
    67,
    -13,
    43,
    11,
    75,
    67,
    -38,
    -79,
    -3,
    -24,
    83,
    -1,
    74,
    -93,
    26,
    -69,
    92,
    40,
    -32,
    -89,
    -100,
    -36,
    80,
    9,
    92,
    79,
    -83,
    90,
    -8,
    -77,
    1,
    -60,
    100,
    63,
    87,
    -51,
    -33,
    17,
    24,
    -73,
    -81,
    -86,
    52,
    59,
    10,
    -84,
    -71,
    -12,
    24,
    -53,
    -14,
    -44,
    -48,
    -91,
    -57,
    -82,
    -5,
    48,
    -56,
    -92,
    83,
    -64,
    -17,
    -46,
    65,
    -15,
    87,
    -61,
    -29,
    79,
    -53,
    -81,
    -58,
    70,
    70,
    -12,
    -71,
    68,
    -57,
    -44,
    -18,
    -94,
    -84,
    7,
    -51,
    18,
    44,
    96,
    24,
    8,
    61,
    36,
    -83,
    -93,
    38,
    82,
    25,
    4,
    37,
    93,
    -5,
    24,
    -9,
    -31,
    15,
    -73,
    -91,
    -36,
    41,
    56,
    -17,
    3,
    -94,
    -26,
    96,
    5,
    -21,
    -20,
    60,
    -53,
    26,
    2,
    -97,
    41,
    -72,
    -29,
    -83,
    32,
    35,
    -29,
    82,
    -38,
    -15,
    81,
    -10,
    50,
    22,
    26,
    30,
    -31,
    74,
    -74,
    47,
    66,
    53,
    35,
    -58,
    -68,
    47,
    -21,
    78,
    12,
    -88,
    1,
    12,
    53,
    94,
    1,
    -43,
    -36,
    67,
    6,
    -89,
    44,
    -86,
    -22,
    48,
    -12,
    72,
    -90,
    -7,
    -92,
    30,
    -17
  ])
) // true
