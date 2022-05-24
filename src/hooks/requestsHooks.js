import { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RequestContext } from '../context/RequestContext';
import {
  fetchRequests,
  postRequests,
  updateRequest,
} from '../services/requests';
import { useUser } from './user';
import useRequestsById from './requestsByIdHooks';

export const useRequest = () => {
  const { user } = useUser();
  const history = useHistory();
  const context = useContext(RequestContext);

  const { requests, dispatch, ceForm, setCeForm } = context;
  const { id } = useRequestsById();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchRequests();
      // setRequests(resp.body);
      dispatch({ type: 'LOAD', payload: resp.body });
    };
    fetchData();
  }, []);

  const handleRequestSubmit = async (request) => {
    // console.log(request);
    const uid = user.id;
    const data = await postRequests(uid, request);
    dispatch({ type: 'ADD', payload: data });
    if (ceForm) setCeForm('');
  };

  const handleUpdateSubmit = async (request) => {
    const data = await updateRequest(id, request);
    console.log(data);
    dispatch({ type: 'UPDATE', payload: data });
    setCeForm('');
  };
  return {
    requests,
    handleRequestSubmit,
    handleUpdateSubmit,
    history,
  };
};
