import React, {Dispatch} from 'react';
import {ActionType, StateType} from "../reducers/authReducer";

interface AuthContext {
    state: StateType,
    dispatch: Dispatch<ActionType>,
}

const defaultValue: StateType = {
    isLoggedIn : false,
    username:'',
    error:'',
};
const authContext = React.createContext<[StateType, Dispatch<ActionType>] >([defaultValue,  ()=> {}]);

export const Provider = authContext.Provider;
export const Consumer = authContext.Consumer;

export default authContext;

