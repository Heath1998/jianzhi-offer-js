 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if(pRoot1 == null || pRoot2 == null) {
        return false;
    }
        return solution(pRoot1, pRoot2) ||
        HasSubtree(pRoot1.left, pRoot2) ||
        HasSubtree(pRoot1.right,pRoot2);

}
function solution(pRoot1, pRoot2) {
    if(pRoot2 == null)
        return true;
    if(pRoot1 == null)
        return false;
    if(pRoot1.val == pRoot2.val) {
        return solution(pRoot1.left, pRoot2.left) &&
        solution(pRoot1.right, pRoot2.right);
    }
    else
    return false;
}