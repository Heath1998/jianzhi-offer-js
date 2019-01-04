function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function reConstructBinaryTree(pre, vin)
{
    if(!pre || !vin || pre.length != vin.length || pre.length == 0 || vin.length == 0)
        return null;
    return recursion(pre, vin);
}
function recursion(pre, vin) {
    var rootVal = pre[0];
    var rootTree = new TreeNode(rootVal);
    var rootIndex = 0;
    while(rootVal !== vin[rootIndex]) {
        rootIndex++;
    }
    if(rootIndex > 0) {
        rootTree.left = recursion(pre.slice(1, rootIndex + 1), vin.slice(0, rootIndex));
    }
    if(rootIndex < vin.length - 1) {
        rootTree.right = recursion(pre.slice(rootIndex + 1, pre.length + 1), vin.slice(rootIndex + 1, vin.length + 1));
    }
    return rootTree;
}

var a = [];
console.log(!a);