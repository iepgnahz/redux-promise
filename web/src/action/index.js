import HTTP_CODE from "../constant/httpCode";
import * as request from "../constant/fetchRequest";

export const refreshGrowthNote = growthNotes => ({type: 'REFRESH_GROWTH_NOTE', growthNotes});

export const getGrowthNotes = () => {
    return dispatch => {
        (async () => {
            const res = await request.get('/api/growthNotes/my');
            if (res.status === HTTP_CODE.OK) {
                dispatch(refreshGrowthNote(res.body))
            }
        })();
    }
};

export const deleteGrowthNote = (rawId) => {
    return dispatch => {
        (async () => {
            const res = await request.del(`/api/growthNotes/my/${rawId}`);
            if (res.status === HTTP_CODE.NO_CONTENT) {
                dispatch(getGrowthNotes());
            }
        })();
    }
};

export const createGrowthNote = growthNote => {
    return dispatch => {
        (async () => {
            const res = await request.post(`/api/growthNotes/my`, growthNote);
            if (res.status === HTTP_CODE.CREATED) {
                dispatch(getGrowthNotes());
            }
        })();
    }
};

export const updateGrowthNote = (growthNote, rawId) => {
    return dispatch => {
        (async () => {
            const res = await request.update(`/api/growthNotes/my/${rawId}`, growthNote);
            if (res.status === HTTP_CODE.NO_CONTENT) {
                dispatch(getGrowthNotes());
            }
        })();
    }
};


