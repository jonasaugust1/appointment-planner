import React from "react";

export const ContactPicker = ({
  contact,
  contacts,
  handleChange
}) => {
  return (
    <select name="contact" value={contact} onChange={handleChange}>
      <option value="" key="default">Select a contact</option>
      {contacts.map((c, i) => {
        return <option value={c.name} key={`${c.name}_${i}`}>{c.name}</option>
      })}
    </select>
  );
};
