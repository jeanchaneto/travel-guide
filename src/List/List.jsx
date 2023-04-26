import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import { useState } from "react"
import PlaceDetails from "../PlaceDetails/PlaceDetails";



const List = () => {

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);

  const places = [
    { name: 'Sweet Place'},
    { name: 'Top beer'},
    { name: 'Top steak'}
  ]

  return (
    <div>
      <Typography variant="h4">Restaurants, hotels & Attractions around you</Typography>
      <FormControl>
        <InputLabel id="type-label">Type</InputLabel>
        <Select labelId="type-label" value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} >
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List