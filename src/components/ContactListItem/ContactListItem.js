import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ contact }) => {
  const { name, number, id } = contact;

  const dispatch = useDispatch();
  const handleDelete = event => {
    event.preventDefault();
    const idToDelete = event.target.id;
    dispatch(deleteContact(idToDelete));
  };

  return (
    <li className={css.listItem}>
      <span className={css.listItemText}>
        {name}: {number}
      </span>
      <button
        type="button"
        id={id}
        className={css.deleteBtn}
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
