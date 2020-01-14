import React from 'react';
import {DropzoneArea} from 'material-ui-dropzone'


interface StateType{
    files: any
}
export default () => {

    const [files, setFiles] = React.useState<StateType>()
    const handleChange = (files: any) => {
        setFiles(files)
    };
    return (
        <DropzoneArea onChange ={handleChange} />
    )
}