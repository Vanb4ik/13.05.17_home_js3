
 var mass ={};
 var tempMass={};
 for(var i=0;i<4;i++)
 {
  mass[i] = new Object();

  mass[i].firmName =prompt("Enter firm name ");
  mass[i].modelName=prompt("Enter model name");
  mass[i].motor = parseFloat(prompt("Motor value"));
 }

 /*for (var temp in mass[0])
 {
     console.dir(temp+":"+mass[0][temp]);
 }*/

 for(var j=0,c=0;j<10;j++)//mass.length - не працює бо це вже не масив а обєкт з значенням/ключ?.
 {
  for (var temp in mass[j])
  {
      if (mass[j].motor>=2)
      {
          tempMass[c]=mass[j];//не получається скопіювати не по ссилці slice не канає
         // ++c; - тут не ставте бо три рази запише
      }
  }
  ++c;
 }
