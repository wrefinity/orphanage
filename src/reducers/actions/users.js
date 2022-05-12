import constants from '../constants'
const { LOGIN_USER, USER_ERROR, LOGOUT_USER } = constants;


export const loginUser = (credentials, navigate) => async (dispatch) => {
    try {
        // REACT_APP_ADMIN 
        console.log(credentials)
        if (credentials.email === process.env.REACT_APP_ADMIN_EMAIL && 
            credentials.password===process.env.REACT_APP_PASS){
                const {email} = credentials
                const {REACT_APP_ADMIN} = process.env
                const data = {email, isAdmin:REACT_APP_ADMIN}
                dispatch({ type: LOGIN_USER, payload: data })
                localStorage.setItem("user", JSON.stringify(data));
                navigate("/posts");

            }else{
                // use toast to display
            }

    } catch (error) {
        dispatch({ type: USER_ERROR, payload: 'Oop something happen' })
    }
}



export const logoutUser = (navigate) => async (dispatch) => {
    try {
        localStorage.clear();
        dispatch({ type: LOGOUT_USER, payload: '' })
        navigate("/");

    } catch (error) {
        console.log(error.message)
    }
}