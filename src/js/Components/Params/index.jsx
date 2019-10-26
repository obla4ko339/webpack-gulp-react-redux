import React from 'react'
import {connect} from 'react-redux'
import SelectForm from '../Form/SelectForm'
import {dataSelect, numberSelect} from '../../DataForm/SelectFormData'
import RadioForm from '../Form/RadioForm'
import DateForm from '../Form/DateForm'



class Params extends React.Component{

    constructor(props){
        super(props)
    }


    render(){

        console.log(this.props.forms)
        let l = []
        for(let i=0; i<this.props.numPeople.numPeople; i++){
        	l[i] = {...this.props.forms[i]}
        }
       this.props.forms = l

        return(
            <div>
                {console.log(2)}
                <form action="">

                {this.props.forms.map(item=>(
                    <DateForm {...item}/>
                ))}

                    {this.props.forms.map(item=>(
                        <SelectForm   {...item} optionform={dataSelect}/>
                    ))}

                {this.props.forms.map((item)=>(
                    <RadioForm labelTitleDown="Ja" labelTitleUp="Nein" {...item}/> 
                ))}



                </form>
            </div>
        )
    }
}


export default connect(
    state=>({
        numPeople:state
    }),
    null
)(Params)