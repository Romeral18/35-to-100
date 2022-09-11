const LINK_NAME = 'LINK_NAME';

const initialState = {
    links: [
        {href: '/profile', name: 'profile'},
        {href: '/dialogs', name: 'dialogs'},
        {href: '/news', name: 'news'},
        {href: '/settings', name: 'settings'},
    ]
};

const staticReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const linkNameCreator = () => ({type: LINK_NAME});

export default staticReducer;