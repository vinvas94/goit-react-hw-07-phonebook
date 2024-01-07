import { addFilter } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    const filter = event.currentTarget.value;
    dispatch(addFilter(filter));
  };

  return (
    <div>
      Find contacts by name
      <input
        type="text"
        name="name"
        onChange={e => changeFilter(e)}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </div>
  );
};

export default Filter;
