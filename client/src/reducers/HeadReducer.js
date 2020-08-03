let initialState = {
    Headings: ['SportStats', 'About Us', 'FAQ', 'News', 'Log In', 'Sign Up' ],
    Categories: ['/', '/about', '/faq', '/news', '/log', '/reg']
};

let HeadReducer = (state = initialState, action) => {
    return state;
}

export default HeadReducer;