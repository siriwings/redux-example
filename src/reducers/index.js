import {combineReducers} from 'redux';

import counter from './counter';
import ui from './ui';

const reducers= combineReducers({
    ui,counter
})

export default reducers;