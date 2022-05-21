import React from 'react';
import { Button, List, ListItem } from '@mui/material';
import { useRequest } from '../hooks/requestsHooks';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useUser } from '../hooks/user';

function ListLink() {
  const { requests, setCopyOrEdit } = useRequest();
  const { user } = useUser();
  return (
    <div>
      <List>
        {requests.map((request) => (
          <React.Fragment key={request.id}>
            <StyledLink to={`/requests/${request.id}`}>
              <ListItem>{request.request}</ListItem>
            </StyledLink>
            {user.id === request.user_id ? (
              <Button
                type="click"
                value="edit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => setCopyOrEdit(e.target.value)}
              >
                edit
              </Button>
            ) : (
              <Button
                type="click"
                value="copy"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => setCopyOrEdit(e.target.value)}
              >
                Copy
              </Button>
            )}
          </React.Fragment>
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
