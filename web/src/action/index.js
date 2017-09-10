import HTTP_METHOD from '../constant/httpMethod';
import HTTP_CODE from '../constant/httpCode';
export const refreshGrowthNote = growthNotes => ({type: 'REFRESH_GROWTH_NOTE', growthNotes});
export const getGrowthNotes = () => {
    return dispatch => {
        fetch('/api/my/growthNotes', {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json;charset=utf-8'
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(body => {
                dispatch(refreshGrowthNote(body));
            })
            .catch(err => {
                alert(err.stack);
            })
    }
};

export const deleteGrowthNote = (rawId) => {
    return dispatch => {
        fetch(`/api/my/growthNotes/${rawId}`, {
            method: HTTP_METHOD.DELETE
        })
            .then(res => {
                if (res.status === HTTP_CODE.NO_CONTENT) {
                    dispatch(getGrowthNotes());
                }
            })
            .catch(err => {
                alert(err.stack);
            })
    }
};

export const createGrowthNote = growthNote => {
    return dispatch => {
        fetch(`/api/my/growthNotes`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            }),
            body: JSON.stringify(growthNote)
        }).then(res => {
            if (res.status === HTTP_CODE.CREATED) {
                dispatch(getGrowthNotes());
            }
        }).catch(err => {
            alert(err.stack);
        })
    }
};

export const updateGrowthNote = (growthNote, rawId) => {
    return dispatch => {
        fetch(`/api/my/growthNotes/${rawId}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            }),
            body: JSON.stringify(growthNote)
        }).then(res => {
            if (res.status === HTTP_CODE.NO_CONTENT) {
                dispatch(getGrowthNotes());
            }
        }).catch(err => {
            alert(err.stack);
        })
    }
};


// export default {
//     refreshGrowthNote: growthNotes => ({type: 'REFRESH_GROWTH_NOTE', growthNotes}),
//     getGrowthNotes: () => {
//         return dispatch => {
//             fetch('/api/my/growthNotes', {
//                 method: 'GET',
//                 headers: new Headers({
//                     'Accept': 'application/json;charset=utf-8'
//                 })
//             })
//                 .then(res => {
//                     if (res.ok) {
//                         return res.json();
//                     }
//                 })
//                 .then(body => {
//                     dispatch(this.refreshGrowthNote(body));
//                 })
//                 .catch(err => {
//                     alert(err.stack);
//                 })
//         }
//     },
//     deleteGrowthNote: (rawId) => {
//         return dispatch => {
//             fetch(`/api/my/growthNotes/${rawId}`, {
//                 method: HTTP_METHOD.DELETE
//             })
//                 .then(res => {
//                     if (res.status === HTTP_CODE.NO_CONTENT) {
//                         dispatch(this.getGrowthNotes());
//                     }
//                 })
//                 .catch(err => {
//                     alert(err.stack);
//                 })
//         }
//     },
//     createGrowthNote: growthNote => {
//         return dispatch => {
//             fetch(`/api/my/growthNotes`, {
//                 method: 'POST',
//                 headers: new Headers({
//                     'Content-Type': 'application/json;charset=utf-8',
//                     'Accept': 'application/json'
//                 }),
//                 body: JSON.stringify(growthNote)
//             }).then(res => {
//                 if (res.status === HTTP_CODE.CREATED) {
//                     dispatch(this.refreshGrowthNote());
//                 }
//             }).catch(err => {
//                 alert(err.stack);
//             })
//         }
//     },
//     updateGrowthNote: (rawId, growthNote) => {
//         return dispatch => {
//             fetch(`/api/my/growthNotes/${rawId}`, {
//                 method: 'PUT',
//                 headers: new Headers({
//                     'Content-Type': 'application/json;charset=utf-8',
//                     'Accept': 'application/json'
//                 }),
//                 body: JSON.stringify(growthNote)
//             }).then(res => {
//                 if (res.status === HTTP_CODE.NO_CONTENT) {
//                     dispatch(this.refreshGrowthNote());
//                 }
//             }).catch(err => {
//                 alert(err.stack);
//             })
//         }
//     }
// }