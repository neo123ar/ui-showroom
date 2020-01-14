import React from 'react';
import {RouteComponentProps} from "@reach/router";
import Paperbase from "../components/Paperbase";
import {componenetReducer, initialStateComponent} from "../reducers/authReducer";
import {Provider} from "../state/component.context";

const drawerWidth : number = 256;

const ShowCase: React.FC<RouteComponentProps>= () => {
    const useComponentState = React.useReducer(componenetReducer, initialStateComponent);

    return(
        <Provider value={useComponentState}>
            <Paperbase />
        </Provider>
    )
}

export default ShowCase;