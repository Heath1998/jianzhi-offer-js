function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
// function Mirror(root)
// {
//     // write code here
//     if(root ==null) 
//         return null;
//     reversal(root);
//     var x = Mirror(root.left);
//     var y = Mirror(root.right);
//     return root
// }
// function reversal(node) {
//     console.log(node)
//     if(node.left == null && node.right == null)
//         return ;
//     var p = node.left;
//     node.left = node.right;
//     node.right = p;
// }


function Mirror(root)
{
    // write code here
    if(root === null) return null;
    if(root.left === null && root.right === null) return root;
    var temp = root.left;
    root.left = Mirror(root.right);
    root.right = Mirror(temp);
    return root;
}

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(3);
a.left = b;
a.right = c;
console.log(a);
var d = Mirror(a);
console.log(d);