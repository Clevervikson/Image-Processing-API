import express from "express";
import images from "./routes/api/images";
import path from "path";

const app = express();
const port = 3000;

app.use("/api", images);
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req: express.Request, res: express.Response): void => {
  res.send("Main API route");
});

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
