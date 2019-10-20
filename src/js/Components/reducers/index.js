import {combineReducers} from 'redux'

import tracks from './tracks'
import playlist from './playlist'
import numPeople from './people'

export default combineReducers({
    tracks,
    playlist,
    numPeople
})