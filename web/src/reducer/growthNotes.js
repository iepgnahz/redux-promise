const initGrowthNotes = [
    {
        title:'my best practice',
        content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        rawId: 1,
        author: 1,
        date: '2017-9-6',
    },
    {
        title:'my best practice',
        content: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
        rawId: 1,
        author: 1,
        date: '2017-9-7',
    }
];

export default (state = initGrowthNotes, action) => {
    switch (action.type) {
        case 'REFRESH_GROWTH_NOTE':
            return action.growthNotes;
        default:
            return state;
    }
}