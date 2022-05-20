import { CssBaseline, List, ListItem } from '@mui/material';
import { useRequest } from '../hooks/requestsHooks';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Requests() {
  const { requests } = useRequest();
  return (
    <div>
      <CssBaseline />
      <List>
        {requests.map((request) => (
          <StyledLink to={`/requests/${request.id}`} key={request.id}>
            <ListItem>{request.request}</ListItem>
          </StyledLink>
        ))}
      </List>
    </div>
  );
}
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 10px;
  border: 2px solid black;
  border-radius: 20px;
  display: flex;
`;
export default Requests;
