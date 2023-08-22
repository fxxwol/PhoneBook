import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/Contacts/ContactList';
import Filter from 'components/Filter';
import React from 'react';

function ContactsPage() {
  return (
    <>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}

export default ContactsPage;
