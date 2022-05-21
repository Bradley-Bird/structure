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
import useFormHooks from '../hooks/formHooks';
import useCopyEditHooks from '../hooks/copyOrEditFormHooks';

function CopyEditForm() {
  //getting ready to conditionally render this form with copyOrEditFormHooks
  const { handleChange, ceForm } = useCopyEditHooks();

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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            id="filled-multiline-flexible"
            label="Type here"
            multiline
            fullWidth
            rows={10}
            value={ceForm}
            onChange={handleChange}
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
