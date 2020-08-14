import {createContext} from 'react';

import {ReturnHook} from './../hooks/auth.hook';

function login(iwtToken: string, id: number): void {}
function logout(): void {}

const BodyOfContext: ReturnHook = {
    token: null,
    userId: null,
    login: login,
    logout: logout
}

export const AuthContext = createContext(BodyOfContext);