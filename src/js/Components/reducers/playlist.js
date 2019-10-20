const initialState = ["Hello playList", "My friend Play list" ]

export default  function playlists(state=initialState, action){
    switch(action.type){
        case "ADD_PLAYLIST":
            return [
                ...state, action.payLoad
            ]
        case "DELETE_PLAYLIST":
            console.log("delete_playlist")
            return state
        default:
            return state
    }
}