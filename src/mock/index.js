// 使用 Mock
var Mock = require('mockjs')
const getBanner=function(){
  let arr=[]
  for(var i=0;i<3;i++){
    arr.push({
      id:"banner"+i,
      imgsrc:Mock.Random.image('200x100', Mock.mock('@color'), Mock.mock('@rgb()'), i)
     
    })
  }
  return arr
}
const getBabylist = function(){
  let arr = []
  for (var i=0;i<12;i++){
    arr.push({
      id: 'pro' +i,
      paragraph: Mock.mock('@paragraph')
    })
  }
  return arr
}
// const getPhotoList = function(){
//   let arr = []
//   for (var i=0;i<8;i++){
//     arr.push({
//       id: 'photo' +i,
//       photo: 
//       title: Mock.mock('@title(3, 5)'),
//       num: 
//     })
//   }
//   return arr
// }
const getCourse=()=>{
  var arr=[]
  for(var i=0;i<2;i++){
    arr.push({
      id:"course"+i,
      small_img:Mock.Random.image('100x100', Mock.mock('@color'), Mock.mock('@rgb()'), i),
      title:Mock.Random.csentence( 10,20 ),
      teacher_name:Mock.mock('@cfirst')+Mock.mock('@cname()'),
      price:Mock.mock({
        "price|1-100": 100
      })
    })
  }
  return arr
}
const getHot=()=>{
    var arr=[]
    for(var i=0;i<3;i++){
        arr.push({
            id:"hot"+i,
            img:Mock.Random.image('166x90', Mock.mock('@color'), Mock.mock('@rgb()'), i),
            title:Mock.Random.csentence( 8,10 ),
            name:Mock.mock('@cfirst')+Mock.mock('@cname()'),
            say:Mock.Random.csentence( 10,20 ),
            photo:Mock.Random.image('27x27', Mock.mock('@color'), Mock.mock('@rgb()')),
        })
    }
    return arr
}
Mock.mock('http://wyj.taogou1.cn/getBanner', 'get',getBanner)
Mock.mock('http://wyj.taogou1.cn/getCourse', 'get',getCourse)
Mock.mock('http://wyj.taogou1.cn/getHot', 'get',getHot)
// console.log(getBanner())
Mock.mock('http://wyj.taogou1.cn/getBabylist', 'get',getBabylist)
