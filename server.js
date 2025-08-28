const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const youthServiceRoutes = require("./routes/youthService");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/youth-service", youthServiceRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
