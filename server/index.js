const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { ConnectToDb } = require("./db/Connection");
const authRoutes = require("./routes/user");

const cors = require("cors");

dotenv.config();

ConnectToDb();

app.use(cors());

// const corsOptions = {
//   origin: ["https://code-editor-tz9p.onrender.com", "http://localhost:5173"], 
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true, // If you're using cookies or auth headers
// };

// app.use(cors(corsOptions));

app.use(express.json()); 

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});


