const AuthReducer = (state, action) => {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case "LOGIN":
            console.log("Login", state)
            return {
                ...state,
                ...payload,
                isLogin: !state.isLogin
            };
        case "LOGOUT":
            console.log("Logout")
            return {
                isLogin: false
            }
            default:
                console.log(1)
                return {
                    ...state
                }
    }
}

export default AuthReducer