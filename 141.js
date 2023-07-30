/**
 * 环形链表
 *
 * 给你一个链表的头节点 head ，判断链表中是否有环。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
 * 如果链表中存在环 ，则返回 true 。 否则，返回 false 。
 *
 * 示例 1：
 * 3→2→0→-4
 * -4→2
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 *
 * 示例 2：
 * 1→2
 * 2→1
 * 输入：head = [1,2], pos = 0
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 *
 * 示例 3：
 * 输入：head = [1], pos = -1
 * 输出：false
 * 解释：链表中没有环。
 *
 * 提示：
 * 链表中节点的数目范围是 [0, 10^4]
 * -10^5 <= Node.val <= 10^5
 * pos 为 -1 或者链表中的一个 有效索引 。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
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
 * @return {boolean}
 */
// 哈希表
// var hasCycle = function (head) {
//   let map = new Set()
//   while (head != null) {
//     if (map.has(head)) return true
//     map.add(head)
//     head = head.next
//   }
//   return false
// }

// 快慢指针
var hasCycle = function (head) {
  if (!head?.next) return false
  let slow = head
  let fast = head.next
  while (slow !== fast) {
    if (!fast?.next) return false
    slow = slow.next
    fast = fast.next.next
  }
  return true
}

let l = new LineList()
;[3, 2, 0, -4].forEach(e => l.append(e))
for (let i = 0, cur = l.getHead(), tmp = null; i < 4; i++) {
  if (i === 1) tmp = cur
  if (i === 3) cur.next = tmp
  cur = cur.next
}
console.log(hasCycle(l.getHead()))
