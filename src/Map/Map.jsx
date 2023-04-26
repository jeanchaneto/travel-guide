import { GoogleMap, Marker } from "@react-google-maps/api";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
import Rating from "@mui/material";
import "./Map.css";

const Map = () => {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 43, lng: 0 }}
      mapContainerClassName="map-container"
    >
      <Marker position={{ lat: 43, lng: 0 }} />
    </GoogleMap>
  );
};

export default Map;
