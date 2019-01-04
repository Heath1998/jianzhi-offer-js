function jumpFloorII(number)
{
   if(number == 1 || number == 0 ||number == 2) {
       return number;
   }
   var num = 2;
   for(var i = 3; i <= number; ++i)
   {
       num = num * 2;
   }
   return num;
}

console.log(jumpFloorII(5));