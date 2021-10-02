const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../model/userSchema");
const authenticate = require("../middleware/authenticate");
router.get("/", (req, res) => {
  res.send("hello world");
});

/*
router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !work ||
    !password ||
    !cpassword ||
    password != cpassword
  ) {
    if (password != cpassword) {
      return res
        .status(422)
        .json({ error: "password does not match with confirm password" });
    }
    return res.status(422).json({ error: "please follow the convention" });
  }
  // checking if user email already exists or not!
  // here to check do not use find({email:email})
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email Id already exists" });
      }
      //if email does not exist
      //creating a new user
      const user = new User({ name, email, phone, work, password, cpassword });
      //actually
      //const user = new User({name:name, email:email, phone:phone, work:work, password:password, cpassword:cpassword});
      //saving user document into database
      user
        .save()
        .then((positiveResposnse) => {
          res.status(201).json({ message: "successfully created!!" });
          //res.status(201).json({ message: positiveResposnse });
        })
        .catch((error) => {
          res.status(500).json({ error: error });
        });
    })
    .catch((err) => {
      console.log(err);
    });
});*/

//registration route -->
router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
      if (password != cpassword) {
        return res
          .status(422)
          .json({ error: "password does not match with confirm password" });
      }
      return res.status(422).json({ error: "please follow the convention" });
    }
    // checking if user email already exists or not!
    // here to check do not use find({email:email})

    //if the user is not filling a field then we will return or orterwise we will show the response

    //use await for those lines which are returning promises
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email Id already exists" });
    }
    //if email does not exist
    const user = new User({ name, email, phone, work, password, cpassword });
    //actually --->
    //const user = new User({name:name, email:email, phone:phone, work:work, password:password, cpassword:cpassword});
    //saving user document into database
    const userRegister = await user.save();
    if (userRegister) {
      res.status(201).json({ message: "successfully created!!" });
    }
  } catch (err) {
    //if any error occurs in try block it will be caught by catch block!!
    console.log(err);
  }
});

// login route -->
router.post("/signin", async (req, res) => {
  //ES6 destructuring --> the name of the field should be same as defined schema
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Field can not be empty!!" });
  }
  try {
    // we are fetching a doc according to filter which is email so inside of userLogin entire document will be there
    //--> with email,phone ,name ,password,cpassword
    const userLogin = await User.findOne({ email: email });
    //to see how the doc fetched inside of userLogin
    //console.log(userLogin);
    if (userLogin) {
      //first we are checking if a user exists with same email then we are checking password is matching or not!!
      const passwordMatchedWithDatabse = await bcrypt.compare(
        password,
        userLogin.password
      );

      //in the databse for dummy value all password is --> name@123 like: koustav@123
      //console.log(passwordMatchedWithDatabse);
      if (passwordMatchedWithDatabse) {
        //generating jwt token after when the user is authenticated successfully
        //hhtpOnly is true otherwisew it will be running on secure site only
        const token = await userLogin.generateAuthToken();
        console.log("jwt-token : " + token);
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        res.status(200).json({ message: "Logged In" });
      } else {
        res.status(400).json({ error: "wrong credentials:password!!" });
      }
    } else {
      res.status(400).json({ error: "wrong credentials:email!!" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", authenticate, (req, res) => {
  console.log("hello from about!!");
  res.send(req.rootUser);
});

//exporting the router
module.exports = router;
