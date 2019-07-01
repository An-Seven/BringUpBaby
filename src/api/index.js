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
import { Toast} from 'antd-mobile';
export const Ti=(val,content)=>{
    if(val){
        Toast.success(content, 2);
    }else{
        Toast.fail(content, 3);
    }
    
}