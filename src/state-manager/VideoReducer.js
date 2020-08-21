const VideoReducer = (state = {}, action) => {
    const {
        type,
        payload
    } = action
    switch (type) {
        case "GET_VIDEOS":
            console.log(payload);
            return {
                ...state,
                payload
            }

            default:
                return state
    }
}

export default VideoReducer