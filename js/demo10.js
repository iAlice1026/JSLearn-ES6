{
  let list = new Set();
  list.add(5);
  list.add(7);

  console.log('size',list.size);// size 2
}

{
  let arr = [1,2,3,4,5];
  let list = new Set(arr);

  let arr2 = [1,2,3,2,3];
  let list2 = new Set(arr2);

  console.log('size',list.size); //5
  console.log('size2',list2.size); //2
}

{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);

  console.log('list',list);//Set(2) {1, 2}

  let arr = [1,2,3,1,2];
  let list2 =new Set(arr);

  console.log('unique',list2);//Set(3) {1, 2, 3}

}

{
  let arr = ['add','delete','clear','has'];
  let list = new Set(arr);

  console.log('has',list.has('add'));//true
  console.log('delete',list.delete('add'));//true Set(3) {"delete","clear","has"}
  list.clear();
  console.log('clear',list);
}
//set 遍历
{
  let arr = ['add','delete','clear','has'];
  let list = new Set(arr);

  for (let key of list.keys()) {
    console.log('key',key);//key add key delete key clear key has
  }

  for (let value of list.values()) {
    console.log('value',value);//value add value delete value clear value has
  }

  for (let value of list) {
    console.log('value',value);//value add value delete value clear value has
  }

  for (let [key,value] of list.entries()) {
    console.log('entries',key,value);// entries add add entries delete delete entries clear clear entries has has
  }

  list.forEach(function(item){
    console.log(item);
  })
}