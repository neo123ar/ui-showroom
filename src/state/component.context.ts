import React, {Dispatch} from 'react';
import {ActionType, ComponentActionType} from "../reducers/authReducer";

export interface ComponentContext {
    state: StateComponentType,
    dispatch: Dispatch<ActionType>,
}

export interface StateComponentType{
    component: string,
}

const defaultValue: StateComponentType = {
    component: ''
};
const componentContext = React.createContext<[StateComponentType, Dispatch<ComponentActionType>] >([defaultValue,  ()=> {}]);

export const Provider = componentContext.Provider;
export const Consumer = componentContext.Consumer;

export default componentContext;
