import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useRequest } from '../hooks/requestsHooks';
import { fetchRequestById } from '../services/requests';
import useRequestsById from './requestsByIdHooks';

const useCopyEditHooks = () => {
  //   const { history, copyOrEdit } = useRequest();
  const [id, setId] = useState('');
  const [ceForm, setCeForm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchRequestById(id);
      setCeForm(resp);
    };
    fetchData;
  }, [id]);

  const handleChange = (event) => {
    setCeForm(event.target.value);
  };
  return { handleChange, ceForm, setId };
};
export default useCopyEditHooks;
