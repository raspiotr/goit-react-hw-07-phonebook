import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { selectContacts, selectFilter } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const myFilter = useSelector(selectFilter);

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
