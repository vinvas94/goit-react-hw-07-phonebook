import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectGetIsLoading } from '../../redux/selector';
import Loader from 'components/Loader/Loader';
import ContactList from 'components/ContactList/ContactList';
import { fetchContacts } from 'services/api';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const loading = useSelector(selectGetIsLoading);

  return <div>{loading ? <Loader /> : <ContactList />}</div>;
};
export default Contacts;
