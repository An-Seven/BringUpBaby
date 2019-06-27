// 数组去重
var arr=[1,2,3,4,5,3,2,3,3,6,9,45,3,6,7,1]
var arr2=[]
for(var i=0;i<arr.length;i++){
    if(!~arr2.indexOf(arr[i])){
        arr2.push(arr[i])
    }
}
console.log(arr2)
//数组排序
var arr3=[1,2,3,4,5,3,2,3,3,6,9,45,3,6,7,1];



