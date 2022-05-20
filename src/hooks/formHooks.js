import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRequest } from '../hooks/requestsHooks';

const useFormHooks = () => {
  const [value, setValue] = useState('');
  const { handleRequestSubmit } = useRequest();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      handleRequestSubmit(value);
    } catch (err) {
      toast.error(err);
      throw err;
    }
  };
  return { handleChange, handleSubmit, value };
};
export default useFormHooks;
