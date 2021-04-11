import { serverHostname } from "../env";

const login = ({ username, password })=> {
    console.log('logging in');
    const request = new Request(`${serverHostname()}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
    }) 

    return fetch(request)
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(auth => {
            console.log("Setting new token");
            console.log(auth);
            localStorage.setItem('auth', JSON.stringify(auth));
        })
        .catch(error => {
            throw new Error('Network Error');
        })
}

const checkError = error => {
    const { status } = error;
    if (status === 401 || status === 403) {
        removeAllStorageItems()
        return Promise.reject();
    }    
    
    return Promise.resolve();
}

const checkAuth = () => localStorage.getItem("auth") ? Promise.resolve(localStorage.getItem("auth")) : Promise.reject();

const logout = () => {
   const token = getClientToken();
   if (token) {
        const request = new Request(`${serverHostname()}/auth/logout`, {
            method: 'POST',
            body: JSON.stringify({ token }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        });
        fetch(request);
        removeAllStorageItems();
   } 
   return Promise.resolve();
}

const getPermissions = params => {
    const role = getClientRole();
    const token = getClientToken();
    if (!role) {
        const request = new Request(`${serverHostname()}/auth/permission`, {
            method: 'POST',
            body: JSON.stringify({ token }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${getClientToken()}`
            })
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(json => {
                console.log('Setting permissions');
                localStorage.setItem('role', JSON.stringify(json));
                Promise.resolve(json.role);
            })
            .catch(err => {
                throw new Error('Network error.');
            })
    }
    
   return Promise.resolve(role); 
}

export const authProvider = {
    login,
    checkError,
    checkAuth,
    logout,
    getPermissions
}

export const getClientToken = () => {
    const auth = localStorage.getItem('auth');
    try {
        return JSON.parse(auth).token;
    } catch (err) {
        return null;
    } 
}

export const getClientAccountId = () => {
    const auth = localStorage.getItem('auth');
    try {
        return JSON.parse(auth).accountId;
    } catch (err) {
        return null;
    } 
}

export const getClientRole = () => {
    const permission = localStorage.getItem('role');
    try {
        return JSON.parse(permission).role;
    } catch (err) {
        return null;
    }
}

const removeAllStorageItems = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('role');
}