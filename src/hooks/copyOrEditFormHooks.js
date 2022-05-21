import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRequest } from '../hooks/requestsHooks';

const useCopyEditHooks = () => {
  const { history, copyOrEdit } = useRequest();
  const [ceForm, setCeForm] = useState('');

  const handleChange = (event) => {
    setCeForm(event.target.value);
  };
  return { handleChange, ceForm };
};
export default useCopyEditHooks;
