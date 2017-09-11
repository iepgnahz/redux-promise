import HTTP_METHOD from '../constant/httpMethod';
export const get = async (url) => {
    try {
        const res = await fetch(url, {
            method: HTTP_METHOD.GET,
            headers: new Headers({
                'Accept': 'application/json;charset=utf-8'
            })
        });

        const status = res.status;

        if (res.ok) {
            const body = await res.json();
            return Object.assign({}, {body}, {status});
        }

        return {status}

    } catch (ex) {
        alert(ex);
        return {status: ex.status};
    }
};

export const del = async (url) => {
    try {
        const res = await fetch(url, {
            method: HTTP_METHOD.DELETE,
        });

        return {status: res.status}
    } catch (ex) {
        alert(ex);
        return {status: ex.status};
    }
};

export const post = async (url, growthNote) => {
    try {
        const res = await fetch(url, {
            method: HTTP_METHOD.POST,
            headers: new Headers({
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            }),
            body: JSON.stringify(growthNote)
        });

        const status = res.status;

        if (res.ok) {
            const body = await res.json();
            return Object.assign({}, {status}, {body});
        }

        return {status}
    } catch (ex) {
        alert(ex);
        return {status: ex.status};
    }
};

export const update = async (url, growthNote) => {
    try {
        const res = await fetch(url, {
            method: HTTP_METHOD.PUT,
            headers: new Headers({
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            }),
            body: JSON.stringify(growthNote)
        });

        return {status: res.status}
    } catch (ex) {
        alert(ex);
        return {status: ex.status};
    }
};