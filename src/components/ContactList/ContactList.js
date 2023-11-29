import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { getContacts, getFilter } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const myFilter = useSelector(getFilter);

  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
      const contactsFromStorage = JSON.parse(localStorage.getItem('contacts'));
      if (contactsFromStorage.length === 0) {
        localStorage.removeItem('contacts');
      }
    } catch (error) {
      alert(error);
    }
  }, [contacts]);

  return (
    <ul className={css.list}>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(myFilter.toLowerCase())
        )
        .map(contact => (
          <ContactListItem contact={contact} key={contact.id} />
        ))}
    </ul>
  );
};
