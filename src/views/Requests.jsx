import { CssBaseline, List, ListItem } from '@mui/material';
import { useRequest } from '../hooks/requestsHooks';
import React from 'react';
import ListLink from '../components/ListLink';

function Requests() {
  return (
    <div>
      <CssBaseline />
      <ListLink />
    </div>
  );
}

export default Requests;
