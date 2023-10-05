const axios = require("axios");
const NASA_API_KEY = process.env.NASA_API_KEY

async function fetchApodData() {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = { fetchApodData };
