import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Contact Name</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder='Name'
        />
      <label>Contact Phone</label>
        <input
          type='tel'
          name='phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          // regex for UK numbers
          pattern="(((\+44)? ?(\(0\))? ?)|(0))( ?[0-9]{3,4}){3}"
          placeholder='Phone'
        />
      <label>Contact Email</label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder='Email'
        />
      <input type='submit' value='Add Contact' />
    </form>
  );
};
