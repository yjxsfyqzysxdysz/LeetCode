/**
 * 922. 按奇偶排序数组 II
 *
 * 给定一个非负整数数组 nums，  nums 中一半整数是 奇数 ，一半整数是 偶数 。
 * 对数组进行排序，以便当 nums[i] 为奇数时，i 也是 奇数 ；当 nums[i] 为偶数时， i 也是 偶数 。
 * 你可以返回 任何满足上述条件的数组作为答案 。
 *
 * 示例 1：
 * 输入：nums = [4,2,5,7]
 * 输出：[4,5,2,7]
 * 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 *
 * 示例 2：
 * 输入：nums = [2,3]
 * 输出：[2,3]
 *
 * 提示：
 * 2 <= nums.length <= 2 * 10^4
 * nums.length 是偶数
 * nums 中一半是偶数
 * 0 <= nums[i] <= 1000
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const oddList = []
  const evenList = []
  for (let i = 0, n = nums.length; i < n; i++) {
    const tag = i % 2
    const cur = nums[i] % 2
    if (cur === tag) continue
    if (cur) {
      if (evenList.length) {
        const index = evenList.pop()
        ;[nums[i], nums[index]] = [nums[index], nums[i]]
      } else {
        oddList.push(i)
      }
    } else {
      if (oddList.length) {
        const index = oddList.pop()
        ;[nums[i], nums[index]] = [nums[index], nums[i]]
      } else {
        evenList.push(i)
      }
    }
  }
  return nums
}

console.log(sortArrayByParityII([4, 2, 5, 7]))
console.log(sortArrayByParityII([2, 3]))
console.log(sortArrayByParityII([3, 1, 4, 2]))
console.log(sortArrayByParityII([648, 831, 560, 986, 192, 424, 997, 829, 897, 843]))
