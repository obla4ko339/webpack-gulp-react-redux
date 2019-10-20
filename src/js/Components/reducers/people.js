
export default function numPeople(state=[], action){

        if(action.type == "ADD_PEOPLE"){
            return [
                action.payLoad
            ]
        }else{
            return state;
        }
}
