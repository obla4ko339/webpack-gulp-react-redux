import {combineReducers} from 'redux'

import tracks from './tracks'
import playlist from './playlist'
import numPeople from './people'
import selectFunc from './select'

export default combineReducers({
    tracks,
    playlist,
    numPeople,
    selectFunc
})