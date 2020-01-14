import React from 'react';
import authContext, {Provider} from "../state/store";
import {authReducer, initialAuthState} from "../reducers/authReducer";
import {RouteComponentProps} from "@reach/router";
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