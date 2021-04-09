
const login = ({ username, password })=> {
    const request = new Request('http://localhost:8080/ads/api/auth/login', {
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
            localStorage.set('auth', JSON.stringify(auth));
        })
        .catch(() => {
            throw new Error('Network Error');
        })
}

const checkError = error => {
    
}

const checkAuth = params => {
    
}

const logout = () => {
    
}

const getIdentity = () => {

}

const getPermissions = params => {
    
}

export const authProvider = {
    login,
    checkError,
    checkAuth,
    logout,
    getIdentity,
    getPermissions
}