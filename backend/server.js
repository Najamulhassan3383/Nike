import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { hashedPassword, comparePassword } from "./utils/bcrypt.js";
import generateToken from "./utils/generateToken.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(cookieParser());

dotenv.config();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/users/register", async (req, res) => {
  const hashedPass = await hashedPassword(req.body.password);
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (user) {
      res.status(400).json({ message: "User already exists" });
    } else {
      const user = await prisma.user.create({
        data: {
          email: req.body.email,
          userName: req.body.userName,
          password: hashedPass,
        },
        select: { id: true, email: true, userName: true },
      });

      res.json({ success: true, user });
    }
  } catch (error) {
    res.status(401).json({ message: "plz provide correct email and password" });
  }
});
app.post("/api/users/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  //check the databas if the user exists
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (!user) {
    res.json({ message: "user not found" });
  } else {
    const matched = await comparePassword(password, user.password);
    if (!matched) {
      res.status(401).json({ message: "password or email is wrong" });
      return;
    }
    generateToken(res, user.id);
    res.status(400).json({ message: "login done and cookie set" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
