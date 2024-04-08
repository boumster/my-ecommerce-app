

let auth = false;

export function useAuth() {
    return { auth };
}

export function setAuthentication(value) {
    auth = value;
}