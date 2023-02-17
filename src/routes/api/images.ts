import express from "express";
import resize from "../../utilities/resize";

const images = express.Router();
const morgan = require("morgan");

// Middlewares
images.use(morgan("common"));

images.get("/images", resize, (req, res) => {
  res.send(
    `Resize your image by adding the approriate query parameters to the URL`
  );
});

export default images;
