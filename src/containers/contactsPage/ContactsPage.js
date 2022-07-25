import React, { useEffect, useState } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm'
import {TileList} from '../../components/tileList/TileList'

export const ContactsPage = ({contacts, addContact}) => {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  // If already exist a contact with that name it will setDuplicate(true)
  useEffect(() => {
    for(const contact of contacts) {
      if(contact.name === name) {
        setDuplicate(true);
        return;
      }
    }
    setDuplicate(false)
  }, [contacts, name])

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
  };

  const handleChange = ({target}) => {
    if(target.name === 'name') {
      setName(target.value);
    }else if(target.name === 'phone'){
      setPhone(target.value)
    }else if(target.name === 'email'){
      setEmail(target.value)
    }
  }

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        {duplicate && <p style={{color:'red'}}>Duplicate name entered!</p>}
        <ContactForm 
          name={name}
          phone={phone}
          email={email}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} isAppointment={false} />
      </section>
    </div>
  );
};
