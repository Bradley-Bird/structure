import { useEffect } from 'react';
import { useContext } from 'react';
import { RequestContext } from '../context/RequestContext';
import { fetchRequests, postRequests } from '../services/requests';
import { useUser } from './user';

export const useRequest = () => {
  const { user } = useUser();
  const context = useContext(RequestContext);
  const { requests, dispatch } = context;

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchRequests();
      // setRequests(resp.body);
      dispatch({ type: 'LOAD', payload: resp.body });
    };
    fetchData();
  }, []);

  const handleRequestSubmit = async (request) => {
    console.log(request);
    const id = user.id;
    const data = await postRequests(id, request);
    console.log('data', data);
  };

  return { requests, handleRequestSubmit };
};
