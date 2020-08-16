const AuthReducer = (state, action) => {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case "LOGIN":
            console.log("Login", state, payload)
            localStorage.class_user = JSON.stringify(payload)
            return {
                ...state,
                ...payload,
                isLogin: !state.isLogin
            };
        case "LOGOUT":
            console.log("Logout")
            delete localStorage.class_user
            return {
                isLogin: false
            };
        case "UPDATE_PROFILE":
            console.log("update")
            payload.isLogin = true
            localStorage.class_user = JSON.stringify(payload)
            return {
                ...state,
                ...payload,
            };
        default:
            checkUser()
            console.log(1)
            return {
                ...state
            }
    }
}

const checkUser = () => {
    console.log(56789)
}

export default AuthReducer