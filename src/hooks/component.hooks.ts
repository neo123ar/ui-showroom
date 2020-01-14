import React from 'react';

export const useComponent= () => {
    const [component, setComponenet] = React.useState('AutoComplete');

    const setCurrentComponent = React.useCallback(
        (currentComponenet: string): void => {setComponenet(currentComponenet);},
        []);




    return {
        component,
        setCurrentComponent,
    };
}