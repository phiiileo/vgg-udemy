import axios from './axios';

// Set token handler
const setAuthToken = (token) => {
    // check if token sent is valid
    if (token) {
        // if valid set token
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        sessionStorage.remote_class_token = token
    } else {
        // if not delete token
        delete axios.defaults.headers.common["Authorization"];
        delete sessionStorage.remote_class_token

    }
}

// Check for already saved token
const savedToken = sessionStorage.remote_class_token;

// if there is token, save again
if (savedToken) {
    setAuthToken(savedToken)
} else {
    // if not remove token
    setAuthToken(false)
}

export default setAuthToken;