import React from 'react';
import MaterialTable, {Action, Column} from "material-table";
import {RouteComponentProps} from "@reach/router";


interface optionsType{
    toolbar: boolean,
    header:boolean,
    paging: boolean
}


export interface RowData{
    id: number,
    name: string
}

interface TableauProps {
    data: RowData[],
    options: optionsType,
    handleAdd: (data: RowData[]) => void,
    handleUpdate: (data: RowData) => void,
    handleDelete: (data: RowData) => void,
}




const actions: Action<RowData>[] = [
    {
        icon: 'save',
        tooltip: 'Sauvegarder',
        position: 'auto',
        onClick: (event, rowData) => {alert("Vous voulez sauvegarder "  + (rowData as RowData).name)}
    },
    {
        icon: 'delete',
        tooltip: 'Supprimer',
        position: 'auto',
        onClick: (event) => {alert("Vous voulez sauvegarder data")}
    }
]

const defineColumns = (data: RowData[]): Column<RowData>[] => {
    const allkeys = data.flatMap(elt => Object.keys(elt));
    console.log(allkeys);
    const keys = allkeys === undefined ? 'Error' : allkeys.filter(key => key !='id' && key !== 'tableData' );

    let unique: Set<string> =  new Set(keys);
    const columns: Column<RowData>[] = [];
    unique.forEach(elt => {
        let column = {title: elt, field: elt};
        columns.push(column);
    });
    return columns;
}


const Tableau: React.FC<RouteComponentProps & TableauProps> = (props)=>{

    return (
        <div style={{ maxWidth: '100%' }}>
            <MaterialTable
                options={ {...props.options, actionsColumnIndex: -1} }
                columns= {defineColumns(props.data)}
                data={props.data}
                actions={[
                    {
                        icon: 'delete',
                        tooltip: 'Supprimer',
                        onClick: (event, rowData) => {
                            props.handleDelete(rowData as RowData);
                        }
                    },
                    {
                        icon: 'edit',
                        tooltip: 'Modifier',
                        onClick: (event, rowData) => {
                            props.handleUpdate(rowData as RowData);
                        }
                    },

                ]}
            />

        </div>
    )
}


export default Tableau;

