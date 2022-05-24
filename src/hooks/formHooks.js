import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { RequestContext } from '../context/RequestContext';

import { useRequest } from '../hooks/requestsHooks';

const useFormHooks = () => {
  const { history } = useRequest();
  const [value, setValue] = useState('');
  const { setCeForm, ceForm } = useContext(RequestContext);
  const { handleRequestSubmit, handleUpdateSubmit } = useRequest();

  const handleChange = (event) => {
    if (!ceForm) {
      setValue(event.target.value);
    }
    setCeForm(event.target.value);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    try {
      handleUpdateSubmit(ceForm);
    } catch (err) {
      toast.error(err);
      throw err;
    }
    history.push('/requests');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      handleRequestSubmit(ceForm || value);
    } catch (err) {
      toast.error(err);
      throw err;
    }
    history.push('/requests');
  };
  return { handleChange, handleSubmit, value, handleUpdate };
};

export default useFormHooks;
