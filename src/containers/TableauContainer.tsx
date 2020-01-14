import React, {useState} from 'react';
import Tableau, {RowData} from "../components/Tableau";
import {RouteComponentProps} from "@reach/router";


const TableauContainer: React.FC<RouteComponentProps>= () => {
    const data = [
        {id: 1, name: "doca1"},
        {id: 2, name: "doca1", ville:"paris"},
        {id: 2, name: "doca1", ville:"paris", pays:'maroc'},
        {id: 2, name: "doca1", ville:"paris", formeJuridique:'SARLU'},
        {id: 2, name: "doca1", ville:"paris", siren:'12345', 'toto': 'fati'},
    ];
    const newdata = [
        {id: 1, name: "docapost32"},
        {id: 2, name: "docapost34", ville:"paris"},
    ];


    const options = {
        toolbar: false,
        header:true,
        paging: false
    }

    const [elements, setElements] = useState<RowData[]>(data);
    const handleDelete = (row : RowData) => {
        const newElements= elements.filter(elt => elt.id != row.id)
                                                .map(elt => {
                                                                let newElt = elt;
                                                                if(row.id < elt.id) {

                                                                    newElt.id = newElt.id -1
                                                                }
                                                                return newElt;
                                                });
        console.log(newElements);
        setElements(newElements as RowData[])
    }


    return (
        <>
        <Tableau data={elements} options={options} handleAdd={() => {}} handleDelete={handleDelete} handleUpdate={() => {}}/>
        </>
    )

};
    export default TableauContainer;