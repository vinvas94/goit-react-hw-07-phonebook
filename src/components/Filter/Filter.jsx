import { getFilter } from '../../redux/contactsSlice';
import { addFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(addFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
