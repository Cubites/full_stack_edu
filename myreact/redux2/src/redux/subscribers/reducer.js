import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from './types';

// reducer
const defaultState = {
    count: 98
}
const subscribersReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_SUBSCRIBER:
            return {
                ...state,
                count: state.count + 1
            }
        case REMOVE_SUBSCRIBER:
            return {
                ...state,
                count: state.count - 1
            }
        default: return state;
    }
}

export default subscribersReducer;