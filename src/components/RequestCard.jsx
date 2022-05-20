import React from 'react';
import useRequestsById from '../hooks/requestsByIdHooks';

function RequestCard() {
  const { requestById } = useRequestsById();
  const { request } = requestById;
  return <div>{request}</div>;
}

export default RequestCard;
