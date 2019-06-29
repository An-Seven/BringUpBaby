import axios from 'axios'
const URL="http://wyj.taogou1.cn"
export const getDate=(url,method,data)=>{
 return axios({
    url:URL+url,
    method:method||"get",
    data:data||""
  }).then(res=> {
    return res.data
  })
}
export const  getDate2=(url,method,data)=>{
  return new Promise((resolve,reject)=>{
     return axios({
          url:URL+url,
          method:method||"get",
          data:data||""
        }).then(res=> {
         resolve( res.data)
        })
  })
 
}
console.log(getDate2('/getBanner'))

getDate2('/getBanner').then(data=>console.log(data,'000'))