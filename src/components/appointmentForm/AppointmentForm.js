import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  contact,
  date,
  time,
  handleSubmit,
  handleChange
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form method="post" action="" onSubmit={handleSubmit}>
      Title
      <input name="title" value={title} onChange={handleChange} required/>
      Date
      <input type={date} name="date" value={date} min={getTodayString} onChange={handleChange} required/>
      Time
      <input type={time} name="time" value={time} onChange={handleChange} required/>
      Contact
      <ContactPicker contact={contact} contacts={contacts} handleChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};
