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
const getNoeat=()=>{
    var arr=[]
    var title=['五谷杂粮','蔬菜菌类','水果','零食小吃','肉类/蛋类','饮品','豆/奶制品','加工食品','水产/海鲜','调味品','补品/草药','坚果类']
    for(var i=1;i<13;i++){
      var item={
        id:"noeat"+i,
        img:'/icon_img/noeat/noeat_0'+i+'.png',
    }
    for(var j=0;j<title.length;j++ ){
      item.title=title[i-1]
    }
        arr.push(item)
    }
    return arr
}
console.log(getNoeat())
const getEat=()=>{
    var data=[]
    for(var i=1;i<7;i++){
      var title=['大麦','麸皮','高粱','黑豆','黑米','红豆']
      var item={
        id:i,
        sm_img:'/img/eat/five_'+i+'.png',
        lg_img:'/img/eat/lg_five_'+i+'.png',
        alias:'元麦，饭麦，赤膊麦，裸大麦',
        dat:[
        {name:'孕妇',value:2,content:'处在孕期的您最好不要吃大麦。虽然大麦中含有比较丰富的膳食纤维，可刺激肠胃的蠕动，有促进通便的作用。但是。一般认为大麦有回奶的作用，可能影响您产后哺乳，正在怀孕的您不建议吃大麦，尤其是大麦芽。但是，如果偶尔吃了一些，也不要过分担心，以后多注意就好。'},
        {name:'坐月子',value:0,content:'大麦不太适合刚刚生产完的您食用。大麦除了在孕期具有催生作用外，它还会影响乳汁的分泌。喝大麦芽汤就是一种传统的断奶方法。所以，为了避免减少乳汁分泌，影响哺乳，产后的您最好不要吃大麦。'},
        {name:'哺乳',value:3,content:'如果您正在哺乳，最好不要吃大麦，尤其是大麦芽。因为大麦性凉，具体回奶作用，会减少乳汁的分泌，如果不想 宝宝没有口粮最好还是不要吃。当然，如果到了要给宝宝断奶的时候，您可以喝一些用大麦芽煮的汤水。'},
        {name:'婴儿',value:1,content:'宝宝是可以吃大麦的。大麦富含B族维生素和膳食纤维，能补脑健脑，促进宝宝的骨骼发育，还有利于营养的消化与吸收，可以提高宝宝的免疫力。您可以在宝宝满8个月后，偶尔后宝宝添加一点以大麦面粉为原料的软面条，然后搭配蔬菜和肉泥一起食用。'},
      ]}
      for(var j=1;j<=title.length;j++){
        item.title=title[i]
      }
      data.push(item)
    }
    return data
}
console.log(getEat())
const getTest=(val)=>{
  console.log(JSON.parse(val.body).id)
  val=JSON.parse(val.body).id
  let obj=[
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
// console.log(getEat())
Mock.mock('http://wyj.taogou1.cn/getBanner', 'get',getBanner)
Mock.mock('http://wyj.taogou1.cn/getCourse', 'get',getCourse)
Mock.mock('http://wyj.taogou1.cn/getHot', 'get',getHot)
Mock.mock('http://wyj.taogou1.cn/getEat', 'get',getEat)
Mock.mock('http://wyj.taogou1.cn/getNoeat', 'get',getNoeat)
// console.log(getBanner())
Mock.mock('http://wyj.taogou1.cn/getBabylist', 'get',getBabylist)
Mock.mock('http://wyj.taogou1.cn/getTest', 'post',getTest)
