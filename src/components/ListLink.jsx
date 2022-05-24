import React from 'react';
import { Button, List, ListItem } from '@mui/material';
import { useRequest } from '../hooks/requestsHooks';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useUser } from '../hooks/user';
import useCopyEditHooks from '../hooks/copyOrEditLinkHooks';
import StyledCopyButton, { StyledButtonLink } from './StyledCopyButton';
import useRequestsById from '../hooks/requestsByIdHooks';

function ListLink() {
  const { requests } = useRequest();
  const { handleClick } = useCopyEditHooks();
  const { handleCardClick } = useRequestsById();
  const { user } = useUser();

  return (
    <div>
      <List>
        {requests.map((request) => (
          <React.Fragment key={request.id}>
            <StyledLink
              to={`/requests/${request.id}`}
              onClick={() => handleCardClick(request.id)}
            >
              <ListItem>{request.request}</ListItem>
            </StyledLink>
            {user.id === request.user_id ? (
              <StyledButtonLink to={`/edit/${request.id}`}>
                <Button
                  type="click"
                  value="edit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={(e) => handleClick(e, request.id)}
                >
                  edit
                </Button>
              </StyledButtonLink>
            ) : (
              <StyledCopyButton id={request.id} />
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
