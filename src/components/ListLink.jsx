import React from 'react';
import { List, ListItem } from '@mui/material';
import { useRequest } from '../hooks/requestsHooks';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ListLink() {
  const { requests } = useRequest();
  return (
    <div>
      {' '}
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
export default ListLink;
