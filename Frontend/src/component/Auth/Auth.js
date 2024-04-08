import { useState } from 'react';

export function useAuth() {
    const [auth, setAuth] = useState(false);

    function setAuthentication(state) {
        setAuth(state);
    }

    function getAuth() {
        return auth;
    }

    return { setAuthentication, getAuth };
}