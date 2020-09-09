import { _actions } from '../../actions';

const initialState = {
    name: null
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case _actions._userinfo._setUserinfo:
            return {...state, name: action.data}
        default:
            return state;    
    }
}
export default user;