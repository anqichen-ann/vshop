function dota (n,m) {
  var res = [],arr = []
  for(let i=0;i<n;i++){
    arr[i] = [i+1]
  }
  mat(arr,m)
  var obj = {}
  var result = []
  for(let i=0;i<res.length;i++){
    let tmp = res[i].sort().join("")
    if(!obj[tmp]){
      obj[tmp] = 1
      result.push(res[i])
    }
  }

  return result.length

  function mat (arr,num) {
    if(num ===0){
      res = arr
      return
    }
    var arr1 = []
    if(num>0){
      for(let i=0;i<arr.length;i++){
        for(let j=0;j<n;j++){
          let arr_c = arr[i].slice()
          arr_c[m-num] = j+1
          arr1.push(arr_c)
        }
      }
    }
    mat(arr1,num-1)
  }
}
var result = dota(3,3)
console.log(result)

var reg = readline().split(" ")
var n = parseInt(reg[0])
var m = parseInt(reg[1])

var r = dota (n,m)
print(r)
