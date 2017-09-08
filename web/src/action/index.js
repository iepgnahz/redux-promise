import HTTP_METHOD from '../constant/httpMethod';
import HTTP_CODE from '../constant/httpCode';
export default {
    refreshGrowthNote: growthNotes => ({type: 'REFRESH_GROWTH_NOTE', growthNotes}),
    getGrowthNotes: () => {
        return dispatch => {
            fetch('/api/growthNotes', {
                method: 'GET',
                headers: new Headers({
                    'Accept': 'application/json;charset=utf-8'
                })
            })
                .then(res => {
                    return res.json();
                })
                .then(body => {
                    dispatch(this.refreshGrowthNote(body));
                })
                .catch(err => {
                    alert(err.stack);
                })
        }
    },
    deleteGrowthNote: (rawId) => {
        return dispatch => {
            fetch(`/api/growthNotes/${rawId}`, {
                method: HTTP_METHOD.DELETE
            })
                .then(res => {
                    if (res.status = HTTP_CODE.NO_CONTENT) {
                        dispatch(this.getGrowthNotes());
                    }
                })
                .catch(err => {
                    alert(err.stack);
                })
        }
    },
    updateGrowthNote: (rawId, growthNote) => {
        return dispatch => {
            fetch(`/api/growthNotes/${rawId}`, {
                method: 'PUT',
                headers: new Headers({
                    'Content-Type': 'application/json;charset=utf-8',
                    'Accept': 'application/json'
                }),
                body: JSON.stringify(growthNote)
            }).then(res => {
                if (res.status === HTTP_CODE.NO_CONTENT) {
                    dispatch(this.refreshGrowthNote());
                }
            }).catch(err => {
                alert(err.stack);
            })
        }
    }
}