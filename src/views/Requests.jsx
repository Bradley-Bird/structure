import { CssBaseline } from '@mui/material';
import { useRequest } from '../hooks/requests';
import React from 'react';

function Requests() {
  const { requests } = useRequest();
  return (
    <div>
      <CssBaseline />
      {requests.map((request) => (
        <p key={request.id}>{request.request}</p>
      ))}
    </div>
  );
}

export default Requests;
