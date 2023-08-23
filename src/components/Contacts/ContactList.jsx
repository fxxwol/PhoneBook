import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactItem from './ContactItem';
import { Item, List } from './ContactList.styled';
import { fetchAllContacts } from 'redux/contacts/contactsThunk';
import SyncLoader from 'react-spinners/SyncLoader';

const ContactList = () => {
  const { contacts, isLoading } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (!contacts.length) {
      return [];
    }
    return contacts
      .filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
      .reverse();
  };

  const filteredContacts = filterContacts();
  return (
    <>
      <SyncLoader
        color={'#1976d2'}
        size={15}
        speedMultiplier={0.8}
        loading={isLoading}
        cssOverride={{
          display: 'block',
          margin: '100px auto 0',
          width: 'fit-content',
        }}
      />
      {!isLoading && (
        <>
          {(() => {
            if (!contacts.length) {
              return <h1>You don't have any contacts yet</h1>;
            } else {
              if (filteredContacts.length) {
                return (
                  <List>
                    {filteredContacts.map(contact => {
                      return (
                        <Item key={contact.id} disableGutters>
                          <ContactItem contactItem={contact} />
                        </Item>
                      );
                    })}
                  </List>
                );
              } else {
                return <h1>You don't have such contact</h1>;
              }
            }
          })()}
        </>
      )}
    </>
  );
};

export default ContactList;
