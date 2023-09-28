const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

var cors = require("cors");
router.use(cors());

//LOGIN
router.post("/login", async (req,res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if (!user) return res.status(400).json("Wrong credentials!")

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).jason("Wrong credentials!")

        const {password, ...others} = user._doc;

        res.status(200).json(others);
    }catch(err) {
        res.status(500).json(err);
    }
});