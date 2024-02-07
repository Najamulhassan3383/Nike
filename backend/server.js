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

app.post("/api/employees/register", async (req, res) => {
  const hashedPass = await hashedPassword(req.body.password);

  try {
    const employee = await prisma.employee.findFirst({
      where: {
        email: req.body.email,
      },
    });

    if (employee) {
      res.status(400).json({ message: "User already exists" });
    } else {
      //     name            String
      // email           String
      // role            String
      // password
      // phone_number    String
      // address
      console.log(req.body);
      const employee = await prisma.employee.create({
        data: {
          email: req.body.email,
          name: req.body.name,
          password: hashedPass,
          role: req.body.role,
          phone_number: req.body.phone_number,
          address: req.body.address,
        },
      });

      res.json({ success: true, employee });
    }
  } catch (error) {
    res.status(401).json({
      message: "plz provide correct email and password",
      err: error,
    });
  }
});
app.post("/api/employees/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  //check the databas if the user exists
  const user = await prisma.employee.findFirst({
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
