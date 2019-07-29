import "./NavBar.css"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Theme
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
const theme = createMuiTheme({
  palette: {
    secondary: {
        main: teal[500]
      }
    }
  },
)

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function NavBar() {
  const [spacing] = React.useState(5);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Grid container>
              <Grid item xs={4}>

                <Grid container justify="flex-start" spacing={spacing}>
                  <Grid item>
                    <Typography variant="h6" color="inherit">
                      About
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography variant="h6" color="inherit">
                      Services
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={4}>
                <Grid container justify="center" spacing={spacing}>
                  <Grid item>
                    <Typography variant="h6" color="inherit">
                      Alex and Alfie
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid item xs={4}>
                <Grid container justify="flex-end" spacing={spacing}>
                  <Grid item>
                    <Typography variant="h6" color="inherit">
                      Gallery
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography variant="h6" color="inherit">
                      Contact
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
       </MuiThemeProvider>
    </div>
  );
}

