export default (state = "nothing", action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return action.status;
        default:
            return state;
    }
}