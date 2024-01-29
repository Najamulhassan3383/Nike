import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

dotenv.config();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/users/register", (req, res) => {
  console.log(req.body);
  res.send("register");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
