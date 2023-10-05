const apodModel = require("../models/apodModel");

async function getApodData(req, res) {
  try {
    const apodData = await apodModel.fetchApodData();
    console.log(apodData);
    res.json(apodData);
  } catch (error) {
    console.error("Error fetching APOD:", error.message);
    res.status(500).json({ error: "Error fetching APOD" });
  }
}

module.exports = { getApodData };
