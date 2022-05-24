import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RequestContext } from '../context/RequestContext';
import { fetchRequestById } from '../services/requests';

const useRequestsById = () => {
  const { id } = useParams();
  const { setLoading, setRequestById } = useContext(RequestContext);

  const handleCardClick = async (rId) => {
    const resp = await fetchRequestById(rId);
    console.log(resp);
    setRequestById(resp.body);
    setLoading(false);
  };

  return { id, handleCardClick };
};

export default useRequestsById;
