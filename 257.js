/**
 * 二叉树的所有路径
 *
 * 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
 * 叶子节点 是指没有子节点的节点。
 *
 * 示例 1：
 *    1
 *  /   \
 * 2     3
 *  \
 *    5
 * 输入：root = [1,2,3,null,5]
 * 输出：["1->2->5","1->3"]
 *
 * 示例 2：
 * 输入：root = [1]
 * 输出：["1"]
 *
 * 提示：
 * 树中节点的数目在范围 [1, 100] 内
 * -100 <= Node.val <= 100
 */

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// var binaryTreePaths = function (root) {
//   const res = []
//   let tmp = []
//   function getDeep(tree) {
//     if (!tree) return
//     if (tree.val) {
//       tmp.push(tree.val)
//     }
//     getDeep(tree.left)
//     getDeep(tree.right)
//     if (!tree.left && !tree.right) {
//       res.push(tmp.join('->'))
//     }
//     tmp.pop()
//   }
//   getDeep(root)
//   return res
// }

var binaryTreePaths = function (root) {
  const paths = []
  const construct_paths = (root, path) => {
    if (root) {
      path += root.val.toString()
      if (!root.left && !root.right) {
        // 当前节点是叶子节点
        paths.push(path) // 把路径加入到答案中
      } else {
        path += '->' // 当前节点不是叶子节点，继续递归遍历
        construct_paths(root.left, path)
        construct_paths(root.right, path)
      }
    }
  }
  construct_paths(root, '')
  return paths
}

// console.log(binaryTreePaths({ val: 1, left: null, right: null }))
// console.log(binaryTreePaths({ val: 1, left: { val: 2, left: null, right: null }, right: null }))
console.log(
  binaryTreePaths({
    val: 1,
    left: { val: 2, left: null, right: { val: 5, left: null, right: null } },
    right: { val: 3, left: null, right: null }
  })
)
