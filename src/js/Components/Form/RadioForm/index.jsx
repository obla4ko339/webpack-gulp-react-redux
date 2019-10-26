import React from 'react'
import {connect} from 'react-redux'

class RadioForm extends React.Component{

    handlerRadio(e){
        console.log(e.currentTarget)
    }

    render(){

        const {id, name} = this.props

        return(
            <div>
                <div>
                    <label htmlFor="idRollstuhlUp" >{this.props.labelTitleUp}</label>
                    <input type="radio" name={name} id={id} onClick={(e)=>{this.handlerRadio(e)}} />
                </div>
                <div>
                <label htmlFor="idRollstuhlDown">{this.props.labelTitleDown}</label>
                    <input type="radio" name={name} id={id} onClick={(e)=>{this.handlerRadio(e)}} />
                </div>
                
            </div>
        )
    }

}

export default connect(
    state=>({
        radioState:state
    }),
    dispatch=>({
        selectRadio:(radioId)=>{
            dispatch({type:"ADD_RADIO_NAME", payLoad:radioId})
        }
    })
)(RadioForm)
