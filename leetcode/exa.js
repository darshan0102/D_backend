/**    371
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while(b!=0)
{
    let sum=a&b;
    a=a^b;
    b=sum<<1;
}
return a;
};