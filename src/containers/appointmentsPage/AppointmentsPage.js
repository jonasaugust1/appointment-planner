import React, { useState } from "react";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments,
  contacts,
  addAppointment
}) => {
  
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  const handleChange = ({ target }) => {
    if (target.name === "title") {
      setTitle(target.value);
    }
    else if (target.name === "contact") {
      setContact(target.value);
    }
    else if (target.name === "date") {
      setDate(target.value);
    }
    else if (target.name === "time") {
      setTime(target.value);
    }
  }

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
        title={title}
        contact={contact}
        contacts={contacts}
        date={date}
        time={time}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={appointments} contacts={contacts} isAppointment={true} />
      </section>
    </div>
  );
};
