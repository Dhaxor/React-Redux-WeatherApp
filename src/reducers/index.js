import { combineReducers } from 'redux';
import Weather from './reducer_weather';

const rootReducer = combineReducers({
    // blank: function(state, action) { if (state == null) state = []; return state;}
    weather:Weather
        
});

export default rootReducer;