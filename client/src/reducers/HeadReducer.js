let initialState = {
    Headings: ['SportStats', 'About Us', 'FAQ', 'News', 'Log In', 'Sign Up', 
    'Profile', 'News', 'Training', 'Friends', 'Groups', 'Log out'],
    Categories: ['/', '/about', '/faq', '/news', '/log', '/reg', 
    '/user/1', '/news', '/training', '/friends', '/groups', '(^_^)']
};

let HeadReducer = (state = initialState, action) => {
    return state;
}

export default HeadReducer;