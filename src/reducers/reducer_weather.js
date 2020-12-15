import { FETCH_WEATHER }  from '../actions/index';


export default function Weather(state = [], action){
    // console.log('Action recieved',action);
    switch (action.type) {
        case FETCH_WEATHER:
            // return [ action.payload.data,  ...state ];   
            return state.concat([action.payload.data]);  
        default:
            return state;

    }


    

}