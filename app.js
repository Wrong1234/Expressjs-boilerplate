import express from "express";
import db from "./utils/dbConnection.js";
import hostRouter from "./routes/signup.js";
// import hostRouter from "./routes/signup.js";


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Express Js",
  });
});

app.use("/user", hostRouter);

const PORT = 3000;
const url =
  "mongodb+srv://learnMongodb:HLrsY7oQwSKhOnD0@lerarnmongodb.lvnv3wl.mongodb.net/learnMongoDB";
const server = async () => {
  try {
    await db(url);
    app.listen(PORT, () => {
      console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("❌ Server failed to start:", error);
  }
};

server();
