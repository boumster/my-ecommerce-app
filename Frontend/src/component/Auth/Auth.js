import { useState } from 'react';

export function useAuth() {
    const [auth, setAuth] = useState(false);

    function setAuthentication(value) {
        setAuth(value);
    }

    return { auth, setAuthentication };
}