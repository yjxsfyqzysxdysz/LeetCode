/**
 * 二进制求和
 *
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 * 输入为 非空 字符串且只包含数字 1 和 0。
 *
 * 示例 1:
 * 输入: a = "11", b = "1"
 * 输出: "100"
 *
 * 示例 2:
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 *
 * 提示：
 * 每个字符串仅由字符 '0' 或 '1' 组成。
 * 1 <= a.length, b.length <= 10^4
 * 字符串如果不是 "0" ，就都不含前导零。
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function (a, b) {
//   let carry = 0
//   const res = []
//   a = a.split('')
//   b = b.split('')
//   while (a.length || b.length || carry) {
//     const val = (+a.pop() || 0) + (+b.pop() || 0) + carry
//     if (val < 2) {
//       carry = 0
//       res.unshift(val)
//     } else {
//       carry = 1
//       res.unshift(val % 2)
//     }
//   }
//   return res.join('')
// }

var addBinary = function (a, b) {
  const maxLen = Math.max(a.length, b.length)
  const listA = a.padStart(maxLen, 0).split('')
  const listB = b.padStart(maxLen, 0).split('')
  const MAX_LEN = 20
  const list = []
  let isUP = false
  while (listA.length) {
    const res = (
      parseInt(listA.splice(-MAX_LEN).join(''), 2) +
      parseInt(listB.splice(-MAX_LEN).join(''), 2) +
      (isUP ? 1 : 0)
    )
      .toString(2)
      .padStart(MAX_LEN, 0)
      .split('')
    if (res.length > MAX_LEN) {
      isUP = true
      list.unshift(...res.slice(1))
    } else {
      isUP = false
      list.unshift(...res)
    }
  }
  if (isUP) list.unshift(1)
  return list.join('').replace(/^0+/, '') || '0'
}

console.log(addBinary('0', '0'))
// console.log(addBinary('11', '1'))
// console.log(addBinary('1010', '1011'))
// const res = addBinary(
//   '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
//   '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'
// )
// const res = addBinary(
//   '00001011000110101001000100111010001100011000001001100100111110111011110001001101101',
//   '11110000011110100100010101011000111011000110000001000000100000100001001011011111010'
// )
// console.log(res, res === '11111011100101001101011010010011000111011110001010100101011111011100111100101100111')
