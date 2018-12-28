function replaceSpace(str)
{
    return str.replace(/ /g,"%20");
}

var a = " Str a";

console.log(replaceSpace(a));