const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/Auth")
const userRoute = require("./routes/Users")
const postRoute = require("./routes/Posts")
const multer = require("multer");

dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch(err=>console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"images")
    },filename:(req,file,cb)=> {
        cb(null,req.body.name);
    },
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/posts", postRoute);


app.listen("5000", ()=>{
    console.log("Backend is running.");
});