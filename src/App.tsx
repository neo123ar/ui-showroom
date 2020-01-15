import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Calendar from "./components/Calendar";
import {AppointmentModel} from "@devexpress/dx-react-scheduler";
import TableauContainer from "./containers/TableauContainer";
import ShowCase from "./pages/showcase";
import Authentification from "./containers/authentification";


const appointments: Array<AppointmentModel> = [{
    startDate: '2018-10-31T10:00',
    endDate: '2018-10-31T11:15',
    title: 'audience 1',
    type: 'private',
}, {
    startDate: '2018-10-31T07:30',
    endDate: '2018-10-31T09:00',
    title: 'audience 2',
    type: 'work',
}];

const data = [
    {id: 1, name: "doca1"},
    {id: 2, name: "doca1", ville:"paris"},
]


const options = {
    toolbar: false,
    header:true,
    paging: false
}

const App: React.FC = () => {
  return (
    <>
            <Router>
                <Authentification path="/"/>
                <Calendar path="audiences" appointments={appointments} key="audience"/>
                <TableauContainer path="affaires"  />
                <ShowCase path="showcase"/>
            </Router>
    </>
  );
}

export default App;
