import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();

app.use(express.json()); //to parse the incoming requests with JSON payloads (from req.body)

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("HELLO WOOOOOHHOOOOOO!!");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
