import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = () => {

  return (
    <AppBar position="static">
      <Toolbar >
        <Typography variant="h5" >
          Travel Guide
        </Typography>
        <Box display="flex">
          <Typography variant="h6" >
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
            <div>
              <div>
                <div>
                  <SearchOutlinedIcon />
                </div>
                <InputBase placeholder="Search ..."/>
              </div>
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
