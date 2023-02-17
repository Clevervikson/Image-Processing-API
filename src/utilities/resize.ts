import express from "express";
import fs from "fs";
import path from "path";

const sharp = require("sharp");

const resize = async (req: express.Request, res: express.Response) => {
  if (req.query.name === undefined) {
    res.send(`Error`);
    return;
  }
  const filename = req.query.name as string;
  const widthSize: number = parseInt(req.query.width as string);
  const heightSize: number = parseInt(req.query.height as string);

  const resizeImg: string = path.normalize(
    __dirname +
      "../../../thumb/" +
      filename +
      "-" +
      widthSize +
      "-" +
      heightSize +
      ".jpg"
  );

  const rawImage: string = path.normalize(
    __dirname + "../../../full-images/" + filename
  );

  //Compiling possible err <https://expressjs.com/en/guide/error-handling.html>

  try {
    fs.accessSync(rawImage);
  } catch (err) {
    res.statusCode = 400;
    res.send("no such image file");
    return;
  }

  if (!widthSize || !heightSize) {
    res.statusCode = 400;
    res.send("Invalid height/width parameters");
    return;
  }

  if (widthSize <= 0 || heightSize <= 0) {
    return res.status(400).send("Width and height must be positive integers");
  }

  // processing
  if (!fs.existsSync(resizeImg)) {
    if (req.query.name !== undefined) {
      await resizeImage(
        filename as string,
        widthSize as unknown as number,
        heightSize as unknown as number
      );
    } else {
      return res.status(404).send("Image not found");
    }
  }
  setTimeout(() => res.status(200).sendFile(resizeImg), 900);
};
async function resizeImage(name: string, width: number, height: number) {
  try {
    await sharp("./full-images/" + name)
      .resize({ width: width, height: height })
      .toFile("./thumb/" + name + "-" + width + "-" + height + ".jpg");
  } catch (error) {
    throw new Error("unable to pefrome image resize");
  }
}

export { resizeImage };

export default resize;
