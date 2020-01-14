import React from 'react';
import Paper from '@material-ui/core/Paper';
import { AppointmentModel, ViewState, SchedulerDateTime } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';
import {RouteComponentProps} from "@reach/router";




const Appointment: React.ComponentType<Appointments.AppointmentProps> = (props) => {
    if (props.data.type === 'private') {
        return <Appointments.Appointment {...props} style={{ backgroundColor: '#EC407A' }} />;
    }
    return <Appointments.Appointment {...props} style={{ backgroundColor: '#7E57C2' }} />;
};

const Calendar: React.FC<RouteComponentProps &{appointments: Array<AppointmentModel>}> = ({appointments }) => {
    const [currentDate, setCurrentDate] = React.useState<SchedulerDateTime>('2018-10-31');

    return (
        <Paper>
            <Scheduler
                data={appointments}
            >
                <ViewState
                    currentDate={currentDate}
                    onCurrentDateChange={setCurrentDate}
                />
                <WeekView
                    startDayHour={7}
                    endDayHour={12}
                />
                <Appointments
                    appointmentComponent={Appointment}
                />
            </Scheduler>
        </Paper>
    );
};

export default Calendar;