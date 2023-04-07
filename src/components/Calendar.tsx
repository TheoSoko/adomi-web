import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2018-11-01';
const schedulerData = [
  { startDate: '2018-11-01T10:15', endDate: '2018-11-01T11:15', title: 'Rdv Josianne aide ménage' },
  { startDate: '2018-11-01T14:00', endDate: '2018-11-01T16:00', title: 'Martine aide jardin' },
]

class Calendar extends React.Component {
  render() {
    return (
        <Paper>
          <Scheduler
            data={schedulerData}
          >
            <ViewState
              currentDate={currentDate}
            />
            <DayView
              startDayHour={9}
              endDayHour={19}
            />
            <Appointments />
          </Scheduler>
        </Paper>
    )
  }
}

export default Calendar;