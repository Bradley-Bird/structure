import { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RequestContext } from '../context/RequestContext';
import { fetchRequests, postRequests } from '../services/requests';
import { useUser } from './user';

export const useRequest = () => {
  const history = useHistory();
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
    const uid = user.id;
    const data = await postRequests(uid, request);
    dispatch({ type: 'ADD', payload: data });
  };

  return { requests, handleRequestSubmit, history };
};
