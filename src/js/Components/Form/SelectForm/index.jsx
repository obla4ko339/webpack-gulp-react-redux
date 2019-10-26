import React from 'react'
import {connect} from 'react-redux'


class SelectForm extends React.Component{


    handlerSelect(e){
        
        const indexSelect = e.currentTarget.options.selectedIndex
        this.props.selectFormFunc(indexSelect)
    }

    render(){
        return(
            <div>
                
                    <select name="selectFomr" id="Pflegegrad" onClick={(e)=>{this.handlerSelect(e)}}>
                    <option value="-">-</option>
                    {
                        this.props.optionform.map((item,i)=>(
                            <option value={item.name}>
                                {item.name}
                            </option>
                        ))
                    }
                    </select>
                    
            </div>
        )
    }
}


export default connect(
    state=>({
        numPeople:state
    }),
    dispatch=>(
        {
            selectFormFunc:(selectId)=>{
                dispatch({type:"ADD_SELECT_ID", payLoad:selectId})
            }
        }
    )
)(SelectForm)
