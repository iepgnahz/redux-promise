import constant from '../constant/status';
import {createAction, handleActions, combineActions} from 'redux-actions';

// export const fetchRequest = createAction("FETCH_REQUEST", () => (async () => {
//     let value = await fetchRequestPromise;
//     return {value};
// })());

export const fetchRequest = () => ({
    type: "FETCH_REQUEST",
    payload: fetchRequestPromise().then(result => ({value: result}))
});


export const fetchRequestPromise = () => new Promise((resolve, reject) => {
        const time = Math.random();
        return setTimeout(() => {
            console.log("the face time  is :", time);
            if (time > 0.5) {
                return resolve("error");
            }
            return resolve("success");
        }, time * 1000)
    }
);
