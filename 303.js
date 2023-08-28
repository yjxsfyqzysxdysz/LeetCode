/**
 * 区域和检索 - 数组不可变
 *
 * 给定一个整数数组  nums，处理以下类型的多个查询:
 * 计算索引 left 和 right （包含 left 和 right）之间的 nums 元素的 和 ，其中 left <= right
 * 实现 NumArray 类：
 * NumArray(int[] nums) 使用数组 nums 初始化对象
 * int sumRange(int i, int j) 返回数组 nums 中索引 left 和 right 之间的元素的 总和 ，包含 left 和 right 两点（也就是 nums[left] + nums[left + 1] + ... + nums[right] )
 *
 * 示例 1：
 * 输入：
 * ["NumArray", "sumRange", "sumRange", "sumRange"]
 * [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
 * 输出：
 * [null, 1, -1, -3]
 * 解释：
 * NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
 * numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
 * numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1))
 * numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
 *
 * 提示：
 * 1 <= nums.length <= 10^4
 * -10^5 <= nums[i] <= 10^5
 * 0 <= i <= j < nums.length
 * 最多调用 10^4 次 sumRange 方法
 */

/**
 * @param {number[]} nums
 */
// var NumArray = function (nums) {
//   const tmp = []
//   nums.forEach(e => {
//     tmp.push((tmp.at(-1) || 0) + e)
//   })
//   this.sumList = tmp
// }

// /**
//  * @param {number} left
//  * @param {number} right
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function (left, right) {
//   return this.sumList[right] - (this.sumList[left - 1] || 0)
// }

var NumArray = function (nums) {
  const n = nums.length
  this.sums = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    this.sums[i + 1] = this.sums[i] + nums[i]
  }
}

NumArray.prototype.sumRange = function (i, j) {
  return this.sums[j + 1] - this.sums[i]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

const numArray = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(numArray.sumRange(0, 2)) // return 1 ((-2) + 0 + 3)
console.log(numArray.sumRange(2, 5)) // return -1 (3 + (-5) + 2 + (-1))
console.log(numArray.sumRange(0, 5)) // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
