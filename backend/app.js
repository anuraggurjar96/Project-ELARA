const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path=require("path");
const app = express();


dotenv.config();

const connectDB = require("./config/db");
const authRouter = require("./routes/authRouter");
const createAdmin = require("./utils/createAdmin");
const categoryRouter = require("./routes/categoryRouter");
const serviceRouter=require("./routes/serviceRouter");
const userRouter = require("./routes/userRouter");


app.use(cors());
app.use(express.json());

connectDB().then(()=>{
    createAdmin();
});


app.use("/uploads",express.static(
path.join(__dirname,"uploads")
   )
);

app.use("/api/auth",authRouter);
app.use("/api/category", categoryRouter);
app.use("/api/service",serviceRouter);
app.use("/api/user", userRouter);

app.listen(process.env.PORT,()=>{
    console.log("Server Running");
});