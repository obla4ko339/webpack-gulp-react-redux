import React from 'react';
import {connect} from 'react-redux'





class People extends React.Component{

    constructor(props){
        super(props)
        this.handlerClick = this.handlerClick.bind(this);
        
    }



    handlerClick(e){
        const people_num = e.currentTarget.dataset.person;
        console.log(people_num)
        this.props.numPeople(people_num)
        
    }


    render(){
        return(
            <div className="btnPeople">
                <div className="btnPeople__field">
                    <div className="btnPeople__click" data-person='1' onClick={this.handlerClick}>1 Person</div>
                    <div className="btnPeople__click" data-person='2' onClick={this.handlerClick}>2 Person</div></div>
                <div className="btnPeople__field">
                    <div className="btnPeople__click" data-person='3' onClick={this.handlerClick}>3 Person</div>
                    <div className="btnPeople__click" data-person='4' onClick={this.handlerClick}>4 Person</div>
                </div>
                             
            </div>
        )
    }
}

export default connect(
    state=>({
        numPeople:state
    }),
    dispatch=>({
        numPeople:(people)=>{
            dispatch({type:"ADD_PEOPLE", payLoad:people})
        }
    })
)(People)