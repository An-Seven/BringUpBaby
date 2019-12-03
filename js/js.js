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

function aaa(val){
    var obj=[
        {id:0,name:"q3",qw:123},
        {id:1,name:"q3",qw:1234},
        {id:2,name:"q2",qw:12345},
        {id:3,name:"q1",qw:123456},
    ]
    if(val){
       return obj.filter(item=>item.id==val)
    }else{
        return obj;
    }
}
console.log(aaa(2)) 
function fn(n){
if(n==1){
    return n
}else{
    
   return n*fn(n-1)
}
}
console.log(fn(5),'阶乘')




