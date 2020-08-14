import {useState, useCallback, useEffect} from 'react';

const storageName: string = 'userData';

export type Login = (jwtToken: string, id: number) => void;
export type Logout = () => void;

type UserData = {
    token: string
    userId: number
}

export type ReturnHook = {
    login: Login
    logout: Logout
    token: string | null
    userId: number | null
}

export const useAuth = (): ReturnHook => {
    const [token, setToken] = useState<string | null>(null);
    const [userId, setUserId] = useState<number | null>(null);

    const login: Login = useCallback((jwtToken: string, id: number) => {
        setToken(jwtToken);
        setUserId(id);

        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken
        }));
    }, []);

    const logout: Logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        localStorage.removeItem(storageName);
    }, []);

    useEffect(() => {
        const data: UserData = JSON.parse(localStorage.getItem(storageName)!)
        
        if(data && data.token) {
            login(data.token, data.userId);
        }
    }, [login]);
    

    return {login, logout, token, userId};
}