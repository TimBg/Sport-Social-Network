import {createContext} from 'react';

function noop(iwtToken: any, id: any) {}

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: noop,
    logout: noop
})