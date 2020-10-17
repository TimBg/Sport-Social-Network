export type initialStateHeadType = {
    Headings: Array<string>
    Categories: Array<string>
}

let initialState: initialStateHeadType = {
    Headings: ['SportStats', 'About Us', 'FAQ', 'News', 'Log In', 'Sign Up',
        'Profile', 'News', 'Training', 'Friends', 'Groups', 'Log out'],
    Categories: ['/', '/about', '/faq', '/news', '/log', '/reg',
        '/profile', '/news', '/training', '/friends', '/groups', '(^_^)']
};

let HeadReducer = (state = initialState, action: any): initialStateHeadType => {
    return state;
}

export default HeadReducer;