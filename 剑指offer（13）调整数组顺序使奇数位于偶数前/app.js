function reOrderArray(array)
{
    // write code hereth
    for(var i = 0; i < array.length; ++i)
    {
        var tmp = array[i];
        if(tmp % 2 == 1) {
            for(var j = i; j > 0; --j) {
                if(array[j - 1] % 2 == 0) {
                    var t = array[j];
                    array[j] = array[j-1];
                    array[j-1] = t;
                }
            }
        }
    }
    return array;
}
var a = [1,2,4,7];

console.log(reOrderArray(a));