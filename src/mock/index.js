// 使用 Mock
var Mock = require('mockjs')
const getBanner=function(){
    let arr=[]
    for(var i=0;i<3;i++){
        arr.push({
            id:"banner"+i,
            imgsrc:Mock.Random.image('375x200', Mock.mock('@color'), Mock.mock('@rgb()'), i)
        })
    }
    return arr
}
// console.log(getBanner())
Mock.mock('http://wyj.taogou1.cn/getBanner', 'get',getBanner)