/**
 * 词典中最长的单词
 *
 * 给出一个字符串数组 words 组成的一本英语词典。返回 words 中最长的一个单词，该单词是由 words 词典中其他单词逐步添加一个字母组成。
 * 若其中有多个可行的答案，则返回答案中字典序最小的单词。若无答案，则返回空字符串。
 *
 * 示例 1：
 * 输入：words = ["w","wo","wor","worl", "world"]
 * 输出："world"
 * 解释： 单词"world"可由"w", "wo", "wor", 和 "worl"逐步添加一个字母组成。
 *
 * 示例 2：
 * 输入：words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
 * 输出："apple"
 * 解释："apply" 和 "apple" 都能由词典中的单词组成。但是 "apple" 的字典序小于 "apply"
 *
 * 提示：
 * 1 <= words.length <= 1000
 * 1 <= words[i].length <= 30
 * 所有输入的字符串 words[i] 都只包含小写字母。
 */

/**
 * @param {string[]} words
 * @return {string}
 */
// var longestWord = function (words) {
//   words.sort((a, b) => {
//     if (a.length !== b.length) {
//       return a.length - b.length
//     } else {
//       return b.localeCompare(a)
//     }
//   })
//   let str = ''
//   const map = new Set([''])
//   for (let i = 0, len = words.length; i < len; i++) {
//     if (map.has(words[i].slice(0, -1))) {
//       map.add(words[i])
//       str = words[i]
//     }
//   }
//   return str
// }

// 树
// var longestWord = function (words) {
//   class Node {
//     constructor() {
//       this.children = {}
//       this.isEnd = false
//     }
//   }

//   class Tree {
//     constructor() {
//       this.children = new Node()
//       this.isEnd = false
//     }

//     insert(word) {
//       let node = this
//       for (const e of word) {
//         if (!node.children[e]) {
//           node.children[e] = new Node()
//         }
//         node = node.children[e]
//       }
//       node.isEnd = true
//     }

//     search(word) {
//       let node = this
//       for (const e of word) {
//         if (!node.children[e] || !node.children[e].isEnd) {
//           return false
//         }
//         node = node.children[e]
//       }
//       return node && node.isEnd
//     }
//   }

//   const tre = new Tree()
//   for (const e of words) {
//     tre.insert(e)
//   }
//   let str = ''
//   for (const e of words) {
//     if (tre.search(e)) {
//       if (e.length > str.length || (e.length === str.length && e.localeCompare(str) < 0)) {
//         str = e
//       }
//     }
//   }
//   return str
// }

var longestWord = function (words) {
  words.sort()
  console.log(words)
  let set = new Set(),
    res = ''
  for (let item of words) {
    if (item.length == 1 || set.has(item.slice(0, - 1))) {
      // 预防长度一定时， 后面的'apply' 会覆盖前面的 'apple'
      res = item.length > res.length ? item : res
      set.add(item)
    }
  }
  return res
}

console.log(longestWord(['rac', 'rs', 'ra', 'on', 'r', 'otif', 'o', 'onpdu', 'rsf', 'rs', 'ot', 'oti', 'racy', 'onpd']))
// console.log(
//   longestWord([
//     'ogz',
//     'eyj',
//     'e',
//     'ey',
//     'hmn',
//     'v',
//     'hm',
//     'ogznkb',
//     'ogzn',
//     'hmnm',
//     'eyjuo',
//     'vuq',
//     'ogznk',
//     'og',
//     'eyjuoi',
//     'd'
//   ])
// )
// console.log(longestWord(['yo', 'ew', 'fc', 'zrc', 'yodn', 'fcm', 'qm', 'qmo', 'fcmz', 'z', 'ewq', 'yod', 'ewqz', 'y']))
// console.log(longestWord(['m', 'mo', 'moc', 'moch', 'mocha', 'l', 'la', 'lat', 'latt', 'latte', 'c', 'ca', 'cat']))
// console.log(
//   longestWord([
//     'b',
//     'br',
//     'bre',
//     'brea',
//     'break',
//     'breakf',
//     'breakfa',
//     'breakfas',
//     'breakfast',
//     'l',
//     'lu',
//     'lun',
//     'lunc',
//     'lunch',
//     'd',
//     'di',
//     'din',
//     'dinn',
//     'dinne',
//     'dinner'
//   ])
// )
// console.log(longestWord(['w', 'wo', 'wor', 'worl', 'world']))
// console.log(longestWord(['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple']))
