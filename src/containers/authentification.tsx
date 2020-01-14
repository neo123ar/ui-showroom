import React from 'react';
import authContext, {Provider} from "../state/store";
import {authReducer, initialAuthState} from "../reducers/authReducer";
import {RouteComponentProps, Router} from "@reach/router";
import Calendar from "../components/Calendar";
import TableauContainer from "./TableauContainer";
import Paperbase from "../components/Paperbase";
import Header from "../components/MyHeader";
import LoginForm from "../components/LoginForm";


const Authentification = (props: RouteComponentProps) => {
    const useAuthState = React.useReducer(authReducer, initialAuthState);
    return (
        <Provider value={useAuthState}>
                <LoginForm/>
        </Provider>
    )
}

const ChildComponent = () => {
            const [state, dispatch ] = React.useContext(authContext);
            return <div>{state.isLoggedIn === true}</div>
}

export default Authentification;