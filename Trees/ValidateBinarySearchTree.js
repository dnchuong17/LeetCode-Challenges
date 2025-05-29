var isValidBST = function(root) {
    const helper = (node, min, max) => {
        if (node === null) return true;

        if (node.val <= min || node.val >= max) {
            return false;
        }
        return helper(node.left, min, node.val) || (node.right, node.val, max);
    }
    return helper(root, -Infinity, Infinity);
}