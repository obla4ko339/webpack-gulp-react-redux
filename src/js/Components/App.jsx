import React from 'react'
import {connect} from 'react-redux'
import People from './People'

class App extends React.Component{

    constructor(props){
        super(props)
        
    }


    handlerClic(){
       
        this.props.playList(this.trackInput.value)
        console.log(this.trackInput.value)
    }

    render(){
        console.log(this.props.testStore)
        return(
            <div>

                
                <input type="text" ref={(input)=>{this.trackInput = input}}></input>
                <button id="addTrack" onClick={this.handlerClic.bind(this)} >BTN</button>
                <ul>
                    {this.props.testStore.map((item, index)=>
                        <li key={index}>
                            {item}
                        </li>
                    )}
                </ul>
                    <People />    

            </div>
        )
    }
}


export default connect(
    
    state=>({
        
        testStore:state.tracks,
        playListStore:state.playlist
    }),
    dispatch=>({
        playList:(trackName)=>{
            dispatch({type:"ADD_TRACK", payLoad:trackName})
        }
    })
)(App)