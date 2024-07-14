import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            [Your Father's Insurance Company]
          </Typography>
          <TextField variant="outlined" size="small" placeholder="Search..." />
          <Button variant="contained" color="primary" sx={{ ml: 2 }}>
            Search
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <section className="hero">
              <Typography variant="h4" gutterBottom>
                Welcome to [Your Father's Insurance Company]
              </Typography>
              <Typography variant="body1">
                Your trusted partner in insurance solutions.
              </Typography>
            </section>
          </Grid>
          <Grid item xs={12} sm={6}>
            <section className="services">
              <Typography variant="h5" gutterBottom>
                Our Services
              </Typography>
              <ul>
                <li>Life Insurance</li>
                <li>Health Insurance</li>
                <li>Property Insurance</li>
                {/* Add more services */}
              </ul>
            </section>
          </Grid>
          <Grid item xs={12} sm={6}>
            <section className="about">
              <Typography variant="h5" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1">
                [Your Father's Insurance Company] is dedicated to providing...
              </Typography>
            </section>
          </Grid>
        </Grid>
      </Container>
      <footer className="footer">
        <Typography variant="body2" align="center" color="textSecondary">
          &copy; {new Date().getFullYear()} [Your Father's Insurance Company].
          All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default App;
