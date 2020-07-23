// import { types } from "../actions/action_types";

// const initState = {
//     language: '',
// }
// export const systemReducer: any = (state = initState, actions: any) => {
//     const {payload} = actions;
//     switch  (actions.type) {
//         case types.SET_LANG:
//             return {...state, language: payload.language};
//             default:
//                 return state;
//     }
// }
import * as types from '../actions/action_types';
var initState = {
    language: 'vi'
};
var languageReducer = (state = initState, action) => {
    switch(action.type){
        case types.CHANGE_LANGUAGE: {
            return{ language: action.language};
        }
        default:
            return state;
    }
}
export default languageReducer;