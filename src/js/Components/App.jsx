import React from 'react'
import {connect} from 'react-redux'
import People from './People'


class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            activeTab:null
        }
        
    }


    handlerClic(){
       
        this.props.playList(this.trackInput.value)
        console.log(this.trackInput.value)
    }


    handlerTabTitle(e){
        const tabTitle = e.currentTarget.dataset.key;
        this.setState({activeTab:tabTitle})
    }

    render(){

        const {list} = this.props
        const {activeTab} = this.state

        return(
            <div className="tab">
                <div className="tabTitle">
                    {
                        list.map((item, index)=>(
                            <div data-key={index} onClick={(e)=>{this.handlerTabTitle(e)}}>
                                {item.title}
                            </div>
                        ))
                    }
                </div>

                <div className="tabDesc">
                    {
                        list[activeTab] ? list[activeTab].desc : null
                    }
                </div>

                
                <input type="text" ref={(input)=>{this.trackInput = input}}></input>
                <button id="addTrack" onClick={this.handlerClic.bind(this)} >BTN</button>
                <ul>
                    {this.props.testStore.map((item, index)=>
                        <li key={index}>
                            {item}
                        </li>
                    )}
                </ul>
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