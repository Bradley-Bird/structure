import { useContext } from 'react';
import { RequestContext } from '../context/RequestContext';
import useRequestsById from '../hooks/requestsByIdHooks';

function RequestCard() {
  const { loading, requestById } = useContext(RequestContext);
  const { request } = requestById;
  return <>{loading ? <p>Loading...</p> : <div>{request}</div>}</>;
}

export default RequestCard;
