/**
 * 字符串中的查找与替换
 *
 * 你会得到一个字符串 s (索引从 0 开始)，你必须对它执行 k 个替换操作。替换操作以三个长度均为 k 的并行数组给出：indices, sources,  targets。
 * 要完成第 i 个替换操作:
 * 检查 子字符串  sources[i] 是否出现在 原字符串 s 的索引 indices[i] 处。
 * 如果没有出现， 什么也不做 。
 * 如果出现，则用 targets[i] 替换 该子字符串。
 * 例如，如果 s = "abcd" ， indices[i] = 0 , sources[i] = "ab"， targets[i] = "eee" ，那么替换的结果将是 "eeecd" 。
 * 所有替换操作必须 同时 发生，这意味着替换操作不应该影响彼此的索引。测试用例保证元素间不会重叠 。
 * 例如，一个 s = "abc" ，  indices = [0,1] ， sources = ["ab"，"bc"] 的测试用例将不会生成，因为 "ab" 和 "bc" 替换重叠。
 * 在对 s 执行所有替换操作后返回 结果字符串 。
 * 子字符串 是字符串中连续的字符序列。
 *
 * 示例 1：
 * 输入：s = "abcd", indices = [0,2], sources = ["a","cd"], targets = ["eee","ffff"]
 * 输出："eeebffff"
 * 解释：
 * "a" 从 s 中的索引 0 开始，所以它被替换为 "eee"。
 * "cd" 从 s 中的索引 2 开始，所以它被替换为 "ffff"。
 *
 * 示例 2：
 * 输入：s = "abcd", indices = [0,2], sources = ["ab","ec"], targets = ["eee","ffff"]
 * 输出："eeecd"
 * 解释：
 * "ab" 从 s 中的索引 0 开始，所以它被替换为 "eee"。
 * "ec" 没有从原始的 S 中的索引 2 开始，所以它没有被替换。
 *
 * 提示：
 * 1 <= s.length <= 1000
 * k == indices.length == sources.length == targets.length
 * 1 <= k <= 100
 * 0 <= indices[i] < s.length
 * 1 <= sources[i].length, targets[i].length <= 50
 * s 仅由小写英文字母组成
 * sources[i] 和 targets[i] 仅由小写英文字母组成
 */

/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
// var findReplaceString = function (s, indices, sources, targets) {
//   let str = s
//   sources.forEach((e, i) => {
//     const len = e.length
//     const tmp = str.slice(indices[i], indices[i] + len)
//     if (tmp === e) {
//       str =
//         str.slice(0, indices[i]) +
//         String.fromCharCode(32 + Math.trunc(Math.random() * 60)).repeat(len) +
//         str.slice(indices[i] + len)
//     }
//   })
//   return str.replace(/([A-Z\d !"#$%&'()*+,\-./:;<=>?\\\[])\1*/g, (...ret) => targets[indices.indexOf(ret[2])])
// }

var findReplaceString = function (s, indices, sources, targets) {
  let i = 0,
    str = ''
  const sortList = {}
  indices.forEach((e, i) => {
    sortList[e] = {
      index: e,
      source: sources[i],
      target: targets[i]
    }
  })

  for (const key in sortList) {
    const { index, source, target } = sortList[key]
    if (s.slice(index, index + source.length) === source) {
      str += s.slice(i, index)
      str += target
      i = index + source.length
    }
  }
  str += s.slice(i)
  return str
}

console.log(findReplaceString('ynqoknliec', [1, 8, 3], ['nq', 'ec', 'ok'], ['dh', 'tc', 'pc'])) // ydhpcnlitc
console.log(findReplaceString('vmokgggqzp', [3, 5, 1], ['kg', 'ggq', 'mo'], ['s', 'so', 'bfr'])) // vbfrssozp
console.log(findReplaceString('abcd', [0, 2], ['a', 'cd'], ['eee', 'ffff'])) // eeebffff
console.log(findReplaceString('abcd', [0, 2], ['ab', 'ec'], ['eee', 'ffff'])) // eeecd
