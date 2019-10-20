const initialState = ["Hello", "My friend" ]

export default  function playlist(state=initialState, action){
    switch(action.type){
        case "ADD_TRACK":
            return [
                ...state, action.payLoad
            ]
        case "DELETE_TRACK":
            console.log("delete track")
            return state
        default:
            return state 
    }
}