import { IconButton, Paper, Toolbar ,Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {AppBar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Home() {
  return (
    <div>
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton
            size="large"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            </IconButton>
            <Typography marginRight='10px'>logo</Typography>
            <input placeholder="Search" onChange/>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
            size="large"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <AccountCircleIcon/>
            </IconButton>
           
          </Toolbar>
        </AppBar>
      </Box>
      <container maxWidth='sm'>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper elevation={1}>
              <p>paper</p>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={1}>
              <p>paper</p>
            </Paper>
          </Grid>
        </Grid>
      </container>
    </div>
  );
}
