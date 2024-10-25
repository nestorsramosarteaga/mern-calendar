
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';

import enUS from 'date-fns/locale/en-US'

import { Navbar } from "../"
import { addHours, format, parse, startOfWeek, getDay } from 'date-fns';

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});


const myEventsList = [{
  title: 'Cumpleanios del Jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours
}]

export const CalendarPage = () => {
  return (
    <>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    
)


    </>
    
  )
}
