var temp = [];
// 把目标数插入空位
function moveArr(index, arr){
  let arr_t = arr.slice();
  arr_t.splice(index-1,0,arr.length+1)
  temp.push(arr_t);
}
function A(input){

  if(input.length == 1){
    return input;
  }

  if(input.length == 2){
    temp.push([1,2]);
    temp.push([2,1]);
  }else{
    // 递归
    A(input.slice(0, input.length-1));
    let num = temp.length-1;
    for(let i=num; i>=0; i--){
      for(let j=temp[0].length; j>=0; j--){
        moveArr(j+1,temp[i]);
      }
    }
    for(let i=num; i>=0; i--){
      temp.shift();
    }
  }
  return temp;
}
// 测试代码
A([1,2,3]);
for(let i=temp.length; i--;){
  console.log(i+1+': '+temp[i].join(','));
}
