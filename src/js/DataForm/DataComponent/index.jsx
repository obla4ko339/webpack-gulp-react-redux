import * as React from 'react'
import People from '../../Components/People'
import Params from '../../Components/Params'
import {connect} from 'react-redux'



const forms = [
    {
        id:0, name:"radioFleg_0"
    },
    {
        id:1, name:"radioFleg_1"
    },
    {
        id:2, name:"radioFleg_2"
    },
    {
        id:3, name:"radioFleg_3"
    }
]

// let l = []
// for(let i=0; i<2; i++){
// 	l[i] = {...forms[i]}
// }



 export const dataTab = [
    {title:"Person", desc:<People />},
    {title:"Params", desc:<Params forms={forms} />},
    {title:"Person data", desc:"input person data"}
]


// export default connect(
//     state=>(
//         {numPeople:state}
//     ),
//     null
// )(dataTab)