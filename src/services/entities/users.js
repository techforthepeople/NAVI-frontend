import axios from 'axios'

const LOAD_USERS = 'LOAD_USERS'

export const loadUsersAction = (users) => {
    return {
        type: LOAD_USERS,
        payload: users
    }
}


export const loadUsers = () => {
    return async dispatch => {
        const response = await axios(process.env.REACT_APP_BACKEND_URL + '/users');
        dispatch(loadUsersAction(response.data))
    }
}



const initState = {
    userList: [],
}

const usersReducer = (state = initState, action) => {
    Object.freeze(state)
    switch (action.type) {
        case LOAD_USERS:
            return { ...state, userList: action.payload }
        default:
            return state
    }
}

export default usersReducer
