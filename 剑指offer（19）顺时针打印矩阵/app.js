var arr = [[1,2],[3,4],[5,6]];

function printMatrix(matrix)
{
    // write code here
    if(matrix==null || matrix.length==0) return;
    var res = [];
    var row = matrix[0].length;
    var col = matrix.length;
    var circle = Math.ceil((row > col ? col : row) / 2);
    var left = 0;
    var right = row - 1;
    var up = 0;
    var down = col - 1;
    for(var k = 0; k < circle; ++k) 
    {
        for(var i = left; i <= right; ++i)
            res.push(matrix[up][i]);
        ++up;
        for(var j = up; j <= down; ++j)
            res.push(matrix[j][right]);
        --right;
        if(down > up -1)
        {
            for(var m = right; m >= left; --m)
            res.push(matrix[down][m]);
        }
        --down;
        if(left < right + 1) 
        {
            for(var n = down; n >= up; --n)
            res.push(matrix[n][left]);
        }
        ++left;
    }
    return res;
}

console.log(printMatrix(arr));