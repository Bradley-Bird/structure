import { useEffect } from 'react';
import { useContext } from 'react';
import { RequestContext } from '../context/RequestContext';
import { fetchRequests } from '../services/requests';

export const useRequest = () => {
  const context = useContext(RequestContext);
  const { requests, setRequests } = context;

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchRequests();
      setRequests(resp.body);
    };
    fetchData();
  }, []);

  return { requests };
};
