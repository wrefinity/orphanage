import initialState from "./initialState";
import constants from "./constants";
const { LOGIN_USER, LOGOUT_USER
} = constants;


const userReducer = (state = initialState, {type, payload})=>{

    switch (type) {
        case LOGIN_USER:
            return { ...state, userInfo: payload };

        case LOGOUT_USER:
            return { ...state, userInfo: state.userInfo = null};
        default:
            return state;
    }
}

export default userReducer;