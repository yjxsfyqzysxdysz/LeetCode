/**
 * 705. 设计哈希集合
 *
 * 不使用任何内建的哈希表库设计一个哈希集合（HashSet）。
 * 实现 MyHashSet 类：
 * void add(key) 向哈希集合中插入值 key 。
 * bool contains(key) 返回哈希集合中是否存在这个值 key 。
 * void remove(key) 将给定值 key 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。
 *
 * 示例：
 * 输入：
 * ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
 * [[], [1], [2], [1], [3], [2], [2], [2], [2]]
 * 输出：
 * [null, null, null, true, false, null, true, null, false]
 * 解释：
 * MyHashSet myHashSet = new MyHashSet();
 * myHashSet.add(1);      // set = [1]
 * myHashSet.add(2);      // set = [1, 2]
 * myHashSet.contains(1); // 返回 True
 * myHashSet.contains(3); // 返回 False ，（未找到）
 * myHashSet.add(2);      // set = [1, 2]
 * myHashSet.contains(2); // 返回 True
 * myHashSet.remove(2);   // set = [1]
 * myHashSet.contains(2); // 返回 False ，（已移除）
 *
 * 提示：
 * 0 <= key <= 10^6
 * 最多调用 104 次 add、remove 和 contains
 */

// var MyHashSet = function () {}

// /**
//  * @param {number} key
//  * @return {void}
//  */
// MyHashSet.prototype.add = function (key) {}

// /**
//  * @param {number} key
//  * @return {void}
//  */
// MyHashSet.prototype.remove = function (key) {}

// /**
//  * @param {number} key
//  * @return {boolean}
//  */
// MyHashSet.prototype.contains = function (key) {}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

// class MyHashSet {
//   constructor() {
//     this.hashMap = []
//   }

//   contains(key) {
//     return this.search(key) != -1
//   }
//   remove(key) {
//     const index = this.search(key)
//     if (index !== -1) this.hashMap.splice(index, 1)
//     return this.hashMap
//   }
//   add(key) {
//     if (!this.contains(key)) this.hashMap.push(key)
//     return this.get()
//   }
//   get() {
//     return this.hashMap
//   }
//   search(key) {
//     const index = this.hashMap.indexOf(key)
//     return index
//   }
// }

class MyHashSet {
  constructor() {
    this.base = 769 // 素数
    this.length = 0
    this.hashMap = Array(this.base)
      .fill('')
      .map(() => Array())
  }

  isHash(key) {
    return key % this.base
  }

  contains(key) {
    const list = this.hashMap[this.isHash(key)]
    for (const e of list) {
      if (e === key) return true
    }
    return false
  }

  remove(key) {
    const list = this.hashMap[this.isHash(key)]
    for (let i = 0; i < this.length; ++i) {
      if (list[i] === key) {
        list.splice(i, 1)
        this.length--
        return
      }
    }
  }

  add(key) {
    const list = this.hashMap[this.isHash(key)]
    for (const e of list) {
      if (e === key) return
    }
    list.push(key)
    this.length++
  }
}

let myHashSet = new MyHashSet()
console.log(myHashSet.add(1)) // set = [1]
console.log(myHashSet.add(2)) // set = [1, 2]
console.log(myHashSet.contains(1)) // 返回 True
console.log(myHashSet.contains(3)) // 返回 False ，（未找到）
console.log(myHashSet.add(2)) // set = [1, 2]
console.log(myHashSet.contains(2)) // 返回 True
console.log(myHashSet.remove(2)) // set = [1]
console.log(myHashSet.contains(2)) // 返回 False ，（已移除）
