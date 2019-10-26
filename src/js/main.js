import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './Components/reducers'

import Params from './Components/Params'

import {dataTab} from './DataForm/DataComponent'



const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())







ReactDOM.render(
    <Provider store={store} >
        <App list={dataTab}/>
    </Provider>,
 
    document.getElementById("calc")
)

