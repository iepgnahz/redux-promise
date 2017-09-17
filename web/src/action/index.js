import constant from '../constant/status';
const startRequest = () => ({type: 'FETCH_REQUEST', status: constant.START});
const successRequest = () => ({type: 'FETCH_REQUEST', status: constant.SUCCESS});
const errorRequest = () => ({type: 'FETCH_REQUEST', status: constant.ERROR});

export const fetchRequest = () => {
    return dispatch => {
        const time = Math.random();
        dispatch(startRequest());
        setTimeout(() => {
            console.log("the face time  is :", time);
            if (time > 0.5) {
                return dispatch(errorRequest());
            }
            return dispatch(successRequest());
        }, time * 1000);
    }
};