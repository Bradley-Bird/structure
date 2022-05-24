import { useContext } from 'react';
import { RequestContext } from '../context/RequestContext';
import { fetchRequestById } from '../services/requests';
import { useRequest } from './requestsHooks';

const useCopyEditHooks = () => {
  const { setCopyOrEdit, setCeForm } = useContext(RequestContext);
  const { history } = useRequest();

  const handleClick = async (e, id) => {
    setCopyOrEdit(e.target.value);
    const resp = await fetchRequestById(id);
    const { request } = resp.body;
    setCeForm(request);
  };

  const checkUser = async (uid, id) => {
    const resp = await fetchRequestById(id);
    if (uid !== resp.body.user_id) {
      history.replace('/requests');
    }
  };

  return { handleClick, checkUser };
};
export default useCopyEditHooks;
