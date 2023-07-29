/**
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 *
 * 示例 1：
 * 1-1-2  →  1-2
 * 输入：head = [1,1,2]
 * 输出：[1,2]
 *
 * 示例 2：
 * 1-1-2-3-3  →  1-2-3
 * 输入：head = [1,1,2,3,3]
 * 输出：[1,2,3]
 *
 * 提示：
 * 链表中节点数目在范围 [0, 300] 内
 * 100 <= Node.val <= 100
 * 题目数据保证链表已经按升序 排列
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(element) {
    this.val = element
    this.next = null
  }
}
const LineList = function () {
  let item = null
  this.append = function (e) {
    let node = new ListNode(e)
    if (!item) {
      item = node
    } else {
      let current = item
      while (current.next) {
        current = current.next
      }
      current.next = node
      current = null
    }
    node = null
  }
  this.getHead = function () {
    return item
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head

  let line = head
  while (line.next) {
    if (line.val === line.next.val) {
      line.next = line.next.next
    } else {
      line = line.next
    }
  }
  line = null
  return head
}

let l = new LineList()
// ;[1, 1, 2].forEach(e => l.append(e))
;[1, 1, 2, 3, 3].forEach(e => l.append(e))
console.log(deleteDuplicates(l.getHead()))
