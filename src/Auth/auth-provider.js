
const login = ({ username, password })=> {
    console.log('logging in');
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
       localStorage.removeItem("auth"); 
       return Promise.reject();
    }    
    
    return Promise.resolve();
}

const checkAuth = () => localStorage.getItem("auth") ? Promise.resolve(localStorage.getItem("auth")) : Promise.reject();

const logout = () => {
   const auth = localStorage.getItem('auth'); 
   if (auth && 'token' in auth) {
        const request = new Request('http://localhost:8080/ads/api/auth/logout', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        });
        fetch(request);
        localStorage.removeItem('auth');
   } 
   return Promise.resolve();
}

const getPermissions = params => {
   return Promise.resolve(); 
}

export const authProvider = {
    login,
    checkError,
    checkAuth,
    logout,
    getPermissions
}