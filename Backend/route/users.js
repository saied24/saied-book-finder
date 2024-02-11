const router = require('express').Router();
const User = require('../models/user');
const CryptoJs = require('crypto-js'); 
const jwt = require("jsonwebtoken");

//  Signing up users
router.post('/signup', async(req,res) => {
    const newUser = new User({
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        password:CryptoJs.AES.encrypt(
            req.body.password,
            process.env.PASSWORD_SECRET).toString(),
    });
    try { 
        const savedUser = await newUser.save();
        const token = jwt.sign({email: savedUser.email}, process.env.JWT_SECRET, {
            expiresIn:"5m",
        });
        res.cookie("token", token, {
            httpOnly:  true,
            expires: new Date(Date.now() + 60000)
        });
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
      }
})
// Login API
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(401).json("Authentication failed");
      }
  
      const hashedPassword = CryptoJs.AES.decrypt(
        user.password,
        process.env.PASSWORD_SECRET
      );
  
      const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
      if (originalPassword !== req.body.password) {
        return res.status(401).json("Authentication failed");
      } else {
        const token = jwt.sign(
          {  email: user.email },
          process.env.JWT_SECRET, 
          { expiresIn: '1h' } 
        );
        res.status(200).json({ token: token, message: "User is authenticated!!" });
      }
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  

module.exports = router;