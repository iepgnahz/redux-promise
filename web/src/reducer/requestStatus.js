import constant from '../constant/status';
import {createAction, handleActions, combineActions} from 'redux-actions';
// export default (state = "nothing", action) => {
//     switch (action.type) {
//         case 'FETCH_REQUEST':
//             return action.payload.value;
//         default:
//             return state;
//     }
// }

export default handleActions({
    ["FETCH_REQUEST"]: {
        next(state, action){
            return Object.assign({}, state, {
                requestStatus: action.payload.value
            });
        }
    }
}, {
    requestStatus: "nothing"
})