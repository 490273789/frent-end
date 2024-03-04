class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}
class BST<T> {
  private root: TreeNode<T> | null = null;
}
