import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './Components/reducers'

// const initialState = ["Hello", "My friend" ]

// function playList(state=initialState, action){
//         switch (action.type){
//             case 'ADD_TRACK':
//                 console.log(action.payLoad+" testss")
//                 return [
//                     ...state, action.payLoad
//                 ]
//                 default:
//                     return state;
//         }
//     }

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("calc")
)






// function playList(state=[], action){
//     switch (action.type){
//         case 'ADD_TRACK':
//             return [
//                 ...state, action.payLoad
//             ]
//             default:
//                 return state;
//     }
// }

// const store = createStore(playList)

// store.subscribe(()=>{
//     console.log(store.getState())
//     const list = document.getElementById("list")
//     list.innerHTML = ''
//     store.getState().map(item=>{
//         const li = document.createElement('li')
//         li.textContent = item;
//         list.appendChild(li)
//     })
// })



// const addTrack = document.getElementById("addTrack")

// addTrack.addEventListener("click", function(e){
//     const trackInput = document.getElementById("trackInput").value
//     console.log(trackInput)

//     store.dispatch({type:'ADD_TRACK', payLoad:trackInput })

// })





