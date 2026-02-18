const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
dotenv.config();

// Routes
const CategoryRoutes = require("./src/router/categoryRoutes");
const UserRoutes = require("./src/router/userRouter");
const SubCategoryRoutes = require("./src/router/subCategoryRoutes");
const HomepageRoutes = require("./src/router/homePageRouter");
const EleventhGroupRoutes = require("./src/router/eleventhGroupRouter");
const DiplomaCourseRoutes = require("./src/router/diplomaCourseRouter");
const AIReplaceRouter = require("./src/router/AIReplaceRouter");
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.use("/api/categories", CategoryRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/subcategories", SubCategoryRoutes);
app.use("/api/homepage", HomepageRoutes);
app.use("/api/eleventhGroups", EleventhGroupRoutes);
app.use("/api/diplomaCourses", DiplomaCourseRoutes);
app.use("/api/aiReplace", AIReplaceRouter);
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

// Connect DB
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("DB Connection Error:", err));

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
