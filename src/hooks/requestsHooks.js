import { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RequestContext } from '../context/RequestContext';
import {
  deleteRequestById,
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

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchRequests();
      dispatch({ type: 'LOAD', payload: resp.body });
    };
    fetchData();
  }, []);

  const handleRequestSubmit = async (request) => {
    const uid = user.id;
    const data = await postRequests(uid, request);
    dispatch({ type: 'ADD', payload: data });
    if (ceForm) setCeForm('');
  };

  const handleUpdateSubmit = async (request) => {
    const data = await updateRequest(id, request);
    dispatch({ type: 'UPDATE', payload: data });
    setCeForm('');
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    const resp = await deleteRequestById(id);
    dispatch({ type: 'DELETE', payload: resp });
    history.replace('/requests');
  };

  return {
    requests,
    handleDelete,
    handleRequestSubmit,
    handleUpdateSubmit,
    history,
  };
};
