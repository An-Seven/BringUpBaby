// 使用 Mock
var Mock = require('mockjs')
const getBanner=function(){
  let arr=[]
  for(var i=0;i<10;i++){
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
// console.log(getBanner())
Mock.mock('http://wyj.taogou1.cn/getBanner', 'get',getBanner)
Mock.mock('http://wyj.taogou1.cn/getBabylist', 'get',getBabylist)