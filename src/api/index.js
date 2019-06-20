import axios from 'axios'
const  Async_Date=(url,data)=>{
        if(data){
            return (axios.post(url,data).then(res=>res.data))
        }else{
          return (axios.get(url).then(res=>res.data))
        }
}
 var a= Async_Date('hwxm/jsonp/jsp.json')
console.log(a)