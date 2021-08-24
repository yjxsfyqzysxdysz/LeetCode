/**
 * 电话号码的字母组合
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 * 1       2-abc  3-def
 * 4-ghi   5-jkl  6-mno
 * 7-pqrs  8-tuv  9-wxyz
 *
 * 示例 1：
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 * 示例 2：
 * 输入：digits = ""
 * 输出：[]
 *
 * 示例 3：
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 *
 * 提示：
 * 0 <= digits.length <= 4
 * digits[i] 是范围 ['2', '9'] 的一个数字。
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (!digits) return []
  // 映射
  const enums = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  // 系数
  const items = digits.split('').map(e => enums[e].length)
  // 枚举个数
  const times = items.reduce((acc, cur) => acc * cur)
  const res = new Array(times).fill('')
  for (let i = 0; i < times; i++) {
    res[i] = getIndex(i, items)
      .map((e, j) => enums[digits[j]][e])
      .join('')
  }
  return res
}

function getIndex(i, data) {
  const len = data.length
  const res = new Array(len).fill(0)
  let num = i
  for (let j = len - 1; j >= 0; j--) {
    num = num.toString(data[j])
    res[j] = +num.slice(-1)
    num = parseInt(+num.slice(0, -1), data[j])
  }
  return res
}

var letterCombinations = function (digits) {
  if (!digits) return []
  let digLen = digits.length
  const numToChar = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  let result = []

  const back = (str = '', index = 0) => {
    if (str.length === digLen) {
      result.push(str)
      return
    }
    for (let i = index; i < digLen; i++) {
      for (let j = 0, l = numToChar[digits[i]].length; j < l; j++) {
        back(str + numToChar[digits[i]][j], i + 1)
      }
    }
  }
  back('')

  return result
}

console.log(letterCombinations('23'))
console.log(letterCombinations('79'))
console.log(letterCombinations('29'))
console.log(letterCombinations('22'))
