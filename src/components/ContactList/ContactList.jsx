import { deleteContact } from 'services/api';
import { selectContacts } from '../../redux/selector';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectContacts);

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id} style={{ margin: '10px 0' }}>
          {contact.name}: {contact.phone}{' '}
          <button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
