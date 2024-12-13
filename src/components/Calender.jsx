import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Link } from 'react-router-dom';

// Yerel ayarları belirle
const localizer = momentLocalizer(moment);

// Event bileşeni
const StudentEvent = ({ event }) => {
  const getBackgroundColor = () => {
    switch (event.isReg) {
      case 'yes':
        return 'bg-green-100';
      case 'no':
        return 'bg-red-100';
      case 'later':
        return 'bg-yellow-100';
      case 'else':
        return 'bg-gray-100';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className={`my-4 p-4 border rounded-lg shadow ${getBackgroundColor()}`}>
      <div className="grid grid-cols-2 gap-4">
        <p><strong>Ad Soyad:</strong> {event.firstName} {event.lastName}</p>
        <p><strong>Numarası:</strong> {event.no}</p>
        <p><strong>Email:</strong> {event.email}</p>
        <p><strong>Kaynağı:</strong> {event.dataSource}</p>
        <p><strong>Eğitim:</strong> {event.interestedEducation}</p>
        <p><strong>Kariyer Danışmanı:</strong> {event.careerCounselor}</p>
        <p><strong>Eğitim:</strong> {event.staff}</p>
      </div>
      <div className="mt-4 text-right">
        <Link to={`/student/${event.id}`} className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Kartı Aç
        </Link>
      </div>
    </div>
  );
};

const CalendarComponent = () => {
  const [viewDate, setViewDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [view, setView] = useState('month');

  const handleNavigate = (date) => {
    setViewDate(date);
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <div className="flex justify-center mb-6">
        <div className="space-x-2">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => handleNavigate(moment(viewDate).subtract(1, 'month').toDate())}
          >
            Önceki Ay
          </button>
          <button
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
            onClick={() => setViewDate(new Date())}
          >
            Bugün
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => handleNavigate(moment(viewDate).add(1, 'month').toDate())}
          >
            Gelecek Ay
          </button>
        </div>
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        date={viewDate}
        onNavigate={handleNavigate}
        view={view}
        onView={(newView) => setView(newView)}
        style={{ height: 600 }}
        className="rounded-lg border p-4 bg-white"
      />

      <div className="mt-8">
        {events.length === 0 ? (
          <p className="text-center text-gray-500">Henüz etkinlik bulunmamaktadır.</p>
        ) : (
          <div>
            {events.map((event) => (
              <StudentEvent key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarComponent;
