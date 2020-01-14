import React from 'react'
import Calendar from "../components/Calendar";
import TableauContainer from "../containers/TableauContainer";
import {appointments} from "../assets/fakeData";
import Notifier from "../components/Notifier";
import DropZone from "../components/DropZone";

interface FactoryPropsTypes{
    component : string
}
export default function (props: FactoryPropsTypes): JSX.Element {
    switch (props.component){
        case 'Calendrier':
            return <Calendar appointments={appointments}/>;
        case 'Listing':
            return <TableauContainer/>
        case 'AutoComplete':
            return <div>Autocomplte</div> ;
        case 'Notifier':
            return <Notifier label="montre notifs" message="Le message à afficher" />
        case 'DropZone':
            return <DropZone />
        default:
            return <div>Undefined</div>;
    }

}