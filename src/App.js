import "./App.css";
import { CssBaseline, Grid } from "@mui/material";
import Header from "./Header/Header";
import List from "./List/List";
import Map from "./Map/Map";
import { useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { getPlacesData } from "./api";

function App() {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          {isLoaded && <Map />}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
