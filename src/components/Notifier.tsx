import React from 'react';
import {OptionsObject, SnackbarProvider, useSnackbar} from "notistack";
import Button from '@material-ui/core/Button';

interface propsType {
    message: string,
    label: string
}

export default ({message, label} : propsType) => (
    <SnackbarProvider maxSnack={3}>
        <MessageButtons label ={label} message={message} />
    </SnackbarProvider>
);

const MessageButtons = ({message, label} : propsType) => {
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    const handleClick = ()  => {
        enqueueSnackbar(message);
    };

    return   (<Button color="primary"  variant="contained" onClick={handleClick}>
        {label}
        </Button>)
}