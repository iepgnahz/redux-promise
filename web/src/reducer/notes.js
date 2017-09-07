const initNotes = [
    {
        title:'my best practice',
        content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        rawId: 1,
        author: 1,
        date: '2017-9-6',


    }
];

export default (state = initNotes, action) => {
    switch (action.type) {
        case 'GET_NOTE_LIST':
            return action.notes;
        default:
            return state;
    }
}