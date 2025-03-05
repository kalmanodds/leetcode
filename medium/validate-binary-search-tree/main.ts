export type TreeNode = {
  val: number;
  left?: TreeNode;
  right?: TreeNode;
};

export function isValidBST(root: TreeNode): boolean {
  return isValid(root);
}

function isValid(
  node?: TreeNode,
  lowerBound = Number.MIN_SAFE_INTEGER,
  upperBound = Number.MAX_SAFE_INTEGER
): boolean {
  if (!node) return true;
  if (node.val <= lowerBound) return false;
  if (node.val >= upperBound) return false;

  return (
    isValid(node.left, lowerBound, node.val) &&
    isValid(node.right, node.val, upperBound)
  );
}
