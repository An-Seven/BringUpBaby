import React from 'react'
import Back from '@/components/back/Back';
class Community extends React.Component{
    render(){
        return(
            <>
             <Back data={{bc:1,title:'12weqweqw3'}}/>
            <Back data={{bc:'red',title:'12weqweqw3'}}/>
            <Back data={{bc:1}}/>
           </>
        )

    }
}
export default Community