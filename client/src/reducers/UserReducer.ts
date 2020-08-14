import { initialStateHeadType } from "./HeadReducer";

let _ = require('lodash');

let initialState = {

};

type initialStateUserType = {}

let UserReducer = (state = initialState, action: any): initialStateUserType => {
    let stateCopy = {};
        
    switch (action.type) {
        case 'SET_qwertt': 
        {
            
        }; return stateCopy;
        case 'ere': 
        {
            
        }; return stateCopy;
        default:
            break;
    }
    return state;
}

export default UserReducer;