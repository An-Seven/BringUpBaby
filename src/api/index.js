import axios from 'axios'
const URL="http://wyj.taogou1.cn"
export const getDate=(url,method,data)=>{
 return axios({
    url:URL+url,
    method:method||"get",
    data:data||""
  }).then(res=> res.data)
}

