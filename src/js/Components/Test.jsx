import React from 'react'


export default class Testform extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            length:null,
            value:null

        }
    }


    handlerLength(e){
        console.log(e.currentTarget.value.length)
        const lengthVal = e.currentTarget.value.length
        const value = e.currentTarget.value

        this.setState({length:lengthVal, value})
    }

    render(){

        return(
            <div>
                <input type="text" onChange={(e)=>{this.handlerLength(e)}}/>
                <div>Length: {this.state.length}</div>
                <div>Value: {this.state.value}</div>
                
            </div>
        )
    }

}