import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRequestById } from '../services/requests';

const useRequestsById = () => {
  const { id } = useParams();
  const [requestById, setRequestById] = useState({});

  useEffect(() => {
    const fetchRequest = async () => {
      const resp = await fetchRequestById(id);
      setRequestById(resp.body);
    };
    fetchRequest();
  }, [id]);

  return { requestById, id };
};

export default useRequestsById;
