export default function selectFunc(state=[], action){
    if(action.type == "ADD_SELECT_ID"){
        return action.payLoad
    }else{
        return state
    }
}