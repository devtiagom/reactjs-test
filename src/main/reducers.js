import { combineReducers } from 'redux';

import menuReducer from '../template/aside/menuReducer';

const rootReducer = combineReducers({
    menu: menuReducer
});

export default rootReducer;