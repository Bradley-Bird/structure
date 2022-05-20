import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  CssBaseline,
  Button,
  Avatar,
} from '@mui/material';
import PaletteTwoToneIcon from '@mui/icons-material/PaletteTwoTone';
import { useRequest } from '../hooks/requestsHooks';
import { useState } from 'react';

function EntryForm() {
  const {handleRequestSubmit} = useRequest()
const [value, setValue] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    await handleRequestSubmit(value)
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <PaletteTwoToneIcon />
        </Avatar>
        <Typography component="h1" variant="h6">
          Add a Request
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit} noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            id="filled-multiline-flexible"
            label="Type here"
            multiline
            fullWidth
            rows={10}
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            variant="filled"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
          <Grid container>
            <Grid item></Grid>
            <Grid item></Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default EntryForm;
