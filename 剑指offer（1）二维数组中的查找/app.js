function Find(target, array)
{
    for(var i = 0; i < array.length; ++i)
    {
        var low = 0;
        var high = array[i].length - 1;
        while(low <= high) 
        {
            var mid = Math.floor((low + high)/2);
            if(array[i][mid] > target)
                high = mid - 1;
            else if(array[i][mid] < target)
                low = mid + 1;
            else
                return true;
        }
    }
    return false;
}


var arr = [[1,4,7],[2,5,8],[3,6,9]];
console.log(Find(4,arr));