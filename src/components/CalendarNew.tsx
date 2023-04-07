import react, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, SchedulerProps, EditingState, ChangeSet } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';


const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];
const views= ['day', 'week', 'workWeek', 'month']


export default function CalendarNew () {

    const [data, setData] = useState<any>()
    const [currentDate, setCurrentDate] = useState('2018-11-02')


  const commitChanges = ({ added, changed, deleted }: ChangeSet) => {
    setData((state: any) => {
      let data = state as any;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map((schedulerData: any) => (
          changed[schedulerData.id] ? { ...schedulerData, ...changed[schedulerData.id] } : schedulerData));
      }
      if (deleted !== undefined) {
        data = data.filter((schedulerData: any) => schedulerData.id !== deleted);
      }
      return { data }
    })
  }


    return (
        <Paper>
            <Scheduler data={schedulerData}>
                <ViewState
                    currentDate={currentDate}
                />
                <EditingState
                        onCommitChanges={commitChanges}
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

