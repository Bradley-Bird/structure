import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useCopyEditHooks from '../hooks/copyOrEditFormHooks';
import { useRequest } from '../hooks/requestsHooks';

function StyledCopyButton(request) {
  const { setId } = useCopyEditHooks();
  const { setCopyOrEdit } = useRequest();
  return (
    <StyledButtonLink onClick={() => setId(request.id)} to="/create">
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
    </StyledButtonLink>
  );
}
const StyledButtonLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
`;

export default StyledCopyButton;
