var information  = new Object();
var isOk;
do
{
 information[prompt("Введіеь ключ")]=prompt("Введіть значення ключа");
 isOk = confirm("Продовжити?");
}while(isOk);
for(var temp in information)
{
    console.log(temp+":"+information[temp]);
}