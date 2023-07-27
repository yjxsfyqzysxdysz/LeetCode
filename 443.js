/**
 * 压缩字符串
 * 给你一个字符数组 chars ，请使用下述算法压缩：
 * 从一个空字符串 s 开始。对于 chars 中的每组 连续重复字符 ：
 *
 * 如果这一组长度为 1 ，则将字符追加到 s 中。
 * 否则，需要向 s 追加字符，后跟这一组的长度。
 * 压缩后得到的字符串 s 不应该直接返回 ，需要转储到字符数组 chars 中。需要注意的是，如果组长度为 10 或 10 以上，则在 chars 数组中会被拆分为多个字符。
 *
 * 请在 修改完输入数组后 ，返回该数组的新长度。
 *
 * 你必须设计并实现一个只使用常量额外空间的算法来解决此问题。
 *
 * 示例 1：
 * 输入：chars = ["a","a","b","b","c","c","c"]
 * 输出：返回 6 ，输入数组的前 6 个字符应该是：["a","2","b","2","c","3"]
 * 解释：
 * "aa" 被 "a2" 替代。"bb" 被 "b2" 替代。"ccc" 被 "c3" 替代。
 *
 * 示例 2：
 * 输入：chars = ["a"]
 * 输出：返回 1 ，输入数组的前 1 个字符应该是：["a"]
 * 解释：
 * 没有任何字符串被替代。
 *
 * 示例 3：
 * 输入：chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
 * 输出：返回 4 ，输入数组的前 4 个字符应该是：["a","b","1","2"]。
 * 解释：
 * 由于字符 "a" 不重复，所以不会被压缩。"bbbbbbbbbbbb" 被 “b12” 替代。
 * 注意每个数字在数组中都有它自己的位置。
 *
 * 提示：
 *
 * 1 <= chars.length <= 2000
 * chars[i] 可以是小写英文字母、大写英文字母、数字或符号
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
// const compress = function (chars) {
//   const obj = {}
//   for (let i = 0; i < chars.length; i++) {
//     !obj[chars[i]] && (obj[chars[i]] = 0)
//     obj[chars[i]]++
//   }
//   return Object.entries(obj)
//     .map(([key, value]) => [key, ...`${value === 1 ? '' : value}`.split('')])
//     .flat().length
// }

// case 1
// const compress = function (chars) {
//   let n = 1
//   for (let i = 1; i < chars.length; i++) {
//     const item = chars[i-1]
//     if (chars[i - 1] === chars[i]) {
//       chars.splice(i, 1)
//       n++
//       i--
//     } else {
//       if (n !== 1) {
//         n = `${n}`.split('')
//         chars.splice(i, 0, ...n)
//         i += n.length
//       }
//       n = 1
//     }
//   }
//   if (n !== 1) {
//     chars.push(...`${n}`.split(''))
//   }
//   return chars.length
// }

// 官方
var compress = function (chars) {
  const n = chars.length
  let write = 0,
    left = 0
  for (let read = 0; read < n; read++) {
    if (read === n - 1 || chars[read] !== chars[read + 1]) {
      chars[write++] = chars[read]
      let num = read - left + 1
      if (num > 1) {
        const anchor = write
        while (num > 0) {
          chars[write++] = '' + (num % 10)
          num = Math.floor(num / 10)
        }
        reverse(chars, anchor, write - 1)
      }
      left = read + 1
    }
  }
  return write
}

const reverse = (chars, left, right) => {
  while (left < right) {
    const temp = chars[left]
    chars[left] = chars[right]
    chars[right] = temp
    left++
    right--
  }
}

console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c'])) // 6
console.log(compress(['a'])) // 1
console.log(compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'])) // 4
console.log(compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c'])) // 4
console.log(compress(['p', 'p', 'p', 'p', 'm', 'm', 'b', 'b', 'b', 'b', 'b', 'u', 'u', 'r', 'r', 'u', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'u', 'u', 'u', 'u', 'a', 'a', 'u', 'u', 'r', 'r', 'r', 's', 's', 'a', 'a', 'y', 'y', 'y', 'g', 'g', 'g', 'g', 'g']))
