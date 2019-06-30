import axios from 'axios'
const URL="http://10.11.52.238:8000"
export const login=(url,data,method)=>{
 return axios({
    url:URL+url,
    method:method||"get",
    data:data||""
  }).then(res=> {
    return res.data
  })
}