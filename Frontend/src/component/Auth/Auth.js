let auth = false;

export const authenticate = () => {
    auth = true;
}

export const deauthenticate = () => {
    auth = false;
}

export const useAuth = () => {
    return auth;
}