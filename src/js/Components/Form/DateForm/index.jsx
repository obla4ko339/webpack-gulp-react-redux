import * as React from 'react'



export default function DateForm({id,name}){

    return(
        <div>
            <input type="date" id={id} name={name} />
        </div>
    )
}


