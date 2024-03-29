import { FC, useState } from 'react'
import { Calendar, dateFnsLocalizer, Event } from 'react-big-calendar'
import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import addHours from 'date-fns/addHours'
import startOfHour from 'date-fns/startOfHour'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './CalendarDisplay.css';
import AddEventButton from './AddEventButton';
import { calendarEvents } from '../../data/data';

const CalendarDisplay: FC = () => {
  const [events, setEvents] = useState<Event[]>(calendarEvents);

  const onEventResize: withDragAndDropProps['onEventResize'] = data => {
    const { start, end } = data

    setEvents(currentEvents => {
      const updatedEvents = currentEvents.map(event => {
        if (event.id === data.event.id) {
          return {
            ...event,
            start: new Date(start),
            end: new Date(end),
          }
        }
        return event;
      });
      return updatedEvents;
    })
  }

  const onEventDrop: withDragAndDropProps['onEventDrop'] = data => {
    console.log(data)
  }

  return (
    <div className="w-[90%] mb-10">
      <AddEventButton />
      <DnDCalendar
        defaultView='week'
        events={events}
        localizer={localizer}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
        style={{ height: '100vh', width: '100%'}}
      />
    </div>
  )
}

const locales = {
  'en-US': enUS,
}
const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1)
const now = new Date()
const start = endOfHour(now)
const end = addHours(start, 2)
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
const DnDCalendar = withDragAndDrop(Calendar)

export default CalendarDisplay;
