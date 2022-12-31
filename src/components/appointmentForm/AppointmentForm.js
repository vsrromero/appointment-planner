import React from "react";

import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-GB')
      .split('/');
    return `${day.padStart(2, "0")}-${month.padStart(2, "0")}-${year}`;
  };

  const getContactNames = () => {
    return contacts.map(contact => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Appointment Title</label>
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder='Title'
        />
      <label>Contact</label>
        <ContactPicker
          name='contact'
          value={contact}
          contacts={getContactNames()}
          onChange={(e) => setContact(e.target.value)}
          placeholder='Contact'
        />
      <label>Date</label>
        <input
          type='date'
          name='date'
          min={getTodayString()}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      <label>Time</label>
        <input
          type='time'
          name='time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      <input type='submit' value='Save' />
    </form>
  );
};
