import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { selectFilteredContacts } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <ContactListItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};
