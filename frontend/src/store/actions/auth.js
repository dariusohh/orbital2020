import * as actionTypes from './actionTypes';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('username');
    return {
        type:actionTypes.AUTH_LOGOUT
    }
}

const checkAuthTimeout = expirationDate => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationDate * 1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        return axios.post('rest_auth/login/', {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            localStorage.setItem('username',username);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
    })
}   
}

export const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        return axios.post('rest_auth/register/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
        .then(res => {
            axios.post('profile/', {username: username,
                company_name:"", 
                company_industry:"",
                company_description:"",
                show_public:false, 
                email:email,
                tele:"",
                ratings:0,
                budget:0,
                target:0})
            return res
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            localStorage.setItem('username',username);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600))
        })
        
        .catch(err => {
            dispatch(authFail(err))
    })
}   
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}