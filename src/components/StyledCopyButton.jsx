import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useCopyEditHooks from '../hooks/copyOrEditFormHooks';
import { useRequest } from '../hooks/requestsHooks';

function StyledCopyButton({ id }) {
  const { handleClick } = useCopyEditHooks();
  // const { setCopyOrEdit } = useRequest();
  return (
    <StyledButtonLink to="/create">
      <Button
        type="click"
        value="copy"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={(e) => handleClick(e, id)}
      >
        Copy
      </Button>
    </StyledButtonLink>
  );
}
export const StyledButtonLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
`;

export default StyledCopyButton;
