import {StateComponentType} from "../state/component.context";

export interface PayloadType{
   username: string,
   error: string,
}


export interface PayloadComponentType{
    component: string,
}
export interface ActionType {
    type: string,
    payload : PayloadType,
}
export interface ComponentActionType {
    type: string,
    payload : PayloadComponentType,
}


export interface StateType {
    isLoggedIn: boolean,
    username: string,
    error: string
}
export const initialAuthState: StateType = {
    isLoggedIn: false,
    username: '',
    error:''
};

export const initialStateComponent: StateComponentType = {
    component: ''
}

export const authReducer = (state: StateType, action: ActionType): StateType => {
    let result: StateType = Object.create(initialAuthState);
    switch (action.type) {
        case 'LOGIN': {
            result.isLoggedIn = true;
            result.username = action.payload.username;
            result.error ='';
            return result
        };
        case 'LOGIN_ERROR': {
            result.isLoggedIn = false;
            result.username = '';
            result.error = result.error;
            return result
        };
        case 'LOGOUT': {
            result.isLoggedIn = false;
            result.username = '';
            result.error ='';
            return result
        };
        default:
            return state;

    }
}


export const componenetReducer = (state: StateComponentType, action: ComponentActionType): StateComponentType => {
    let result: StateComponentType = Object.create(initialStateComponent);
    switch (action.type) {
        case 'SWITCH': {
            result.component = action.payload.component;
            return result;
        };
        default:
            return state;

    }
}