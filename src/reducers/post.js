import initialState from "./initialState";
import constants from "./constants";
const { FETCH_POST, FETCH_SINGLE_POST, CREATE_POST, UPDATE_POST,
    DELETE_POST
} = constants;


const postReducer = (state = initialState, {type, payload})=>{

    switch (type) {
        case FETCH_POST:
            return { ...state, post: payload };

        case CREATE_POST:
            return { ...state, post: [...state.post, payload] };

        case DELETE_POST:
            return { ...state, post: state.post.filter((pst) => pst.id !== payload) };

        case FETCH_SINGLE_POST:
            return { ...state, post: payload };

        case UPDATE_POST:
            return { ...state, post: state.post.map((pst) => payload.id === pst.id ? payload : pst) };

        default:
            return state;
    }
}

export default postReducer;