import { CssBaseline } from '@mui/material';
import { useRequest } from '../hooks/requests';
import React from 'react';

function Requests() {
  const { requests } = useRequest();

  console.log(requests);
  return (
    <div>
      <CssBaseline />
      requests
      {/* {requests.map((request) => (
        <p key={request.id}>{request.id}</p>
      ))} */}
    </div>
  );
}

export default Requests;
