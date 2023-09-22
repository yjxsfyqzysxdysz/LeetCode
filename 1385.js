/**
 * 1385. 两个数组间的距离值
 *
 * 给你两个整数数组 arr1 ， arr2 和一个整数 d ，请你返回两个数组之间的 距离值 。
 * 「距离值」 定义为符合此距离要求的元素数目：对于元素 arr1[i] ，不存在任何元素 arr2[j] 满足 |arr1[i]-arr2[j]| <= d 。
 *
 * 示例 1：
 * 输入：arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
 * 输出：2
 * 解释：
 * 对于 arr1[0]=4 我们有：
 * |4-10|=6 > d=2
 * |4-9|=5 > d=2
 * |4-1|=3 > d=2
 * |4-8|=4 > d=2
 * 所以 arr1[0]=4 符合距离要求
 * 对于 arr1[1]=5 我们有：
 * |5-10|=5 > d=2
 * |5-9|=4 > d=2
 * |5-1|=4 > d=2
 * |5-8|=3 > d=2
 * 所以 arr1[1]=5 也符合距离要求
 * 对于 arr1[2]=8 我们有：
 * |8-10|=2 <= d=2
 * |8-9|=1 <= d=2
 * |8-1|=7 > d=2
 * |8-8|=0 <= d=2
 * 存在距离小于等于 2 的情况，不符合距离要求
 * 故而只有 arr1[0]=4 和 arr1[1]=5 两个符合距离要求，距离值为 2
 *
 * 示例 2：
 * 输入：arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
 * 输出：2
 *
 * 示例 3：
 * 输入：arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
 * 输出：1
 *
 * 提示：
 * 1 <= arr1.length, arr2.length <= 500
 * -10^3 <= arr1[i], arr2[j] <= 10^3
 * 0 <= d <= 100
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
// var findTheDistanceValue = function (arr1, arr2, d) {
//   let res = 0
//   const n = arr2.length
//   for (const e of arr1) {
//     let m = n
//     for (const f of arr2) {
//       if (Math.abs(e - f) > d) m--
//       else break
//     }
//     if (!m) res++
//   }
//   return res
// }

var findTheDistanceValue = function (arr1, arr2, d) {
  // 二分查找
  arr2.sort((a, b) => a - b)
  let cnt = 0
  const n = arr2.length
  for (const e of arr1) {
    let p = binartSearch(arr2, e)
    let ok = true
    if (p < n) {
      ok &= arr2[p] - e > d
    }
    if (p - 1 >= 0 && p - 1 <= n) {
      ok &= e - arr2[p - 1] > d
    }
    cnt += ok
  }
  return cnt
}

function binartSearch(arr, target) {
  let low = 0,
    high = arr.length - 1
  if (arr[high] < target) return high + 1
  while (low < high) {
    let mid = Math.trunc((high - low) / 2) + low
    if (arr[mid] < target) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return low
}

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2))
console.log(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3))
console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6))
