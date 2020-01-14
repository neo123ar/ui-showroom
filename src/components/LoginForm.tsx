import React, {FormEvent, useContext} from 'react';
import authContext from "../state/store";
import {RouteComponentProps} from "@reach/router";
import attemptLogin, {UserData} from '../auth/fakeAuth';

const LoginForm = (props: RouteComponentProps): JSX.Element => {
    const [state, dispatch] = useContext(authContext);
    const {isLoggedIn, error}  = state;
    const [ fakeFormData, setFormData ] = React.useState<UserData>({
        username: "Rohan",
        password: "rohan123"
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        attemptLogin(fakeFormData)
            .then((username: string) => {
                dispatch({
                    type: 'LOGIN',
                    payload: {
                        username,
                        error: '',
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'LOGIN_ERROR',
                    payload: {
                        username:'',
                        error,
                    }
                })
            })
    }

    return (
        <>
            {isLoggedIn ? (
               <div> Not Logged In</div>
            ): (
                <>
                    {error && <p className="error"> {error} </p>}
                    <form onSubmit={onSubmit}>
                        <button type="submit"> Log In </button>
                    </form>
                </>
            )}
        </>
    )
};

        export default LoginForm;