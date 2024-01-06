import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsLoading } from '../../redux/contacts/getState';
import { fetchContacts } from 'redux/contactsSlice';

const Contacts = () => {
  const loading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts.fetchContacts());
  }, [dispatch]);

  return <ul>{loading ? <h3>Loading...</h3> : <div />} </ul>;
};

export default Contacts;
