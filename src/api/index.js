import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  method: 'GET',
  url: URL,
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'content-type':  'application/octet-stream',
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY ,
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async () => {
  try {
    const { data: { data }} = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
