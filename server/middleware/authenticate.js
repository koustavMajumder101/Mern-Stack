const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const authenticate = async (req, res, next) => {
  try {
    // jwt-token is the name of the token that we are storing in web so we are getting it by the same name
    const token = req.cookies.jwtoken;
    // we have the token, now we need to verify it
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    // now in verifyToken we have the entire data of the user

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("user not found");
    }
    // in rootUser we will get the entire information of the user
    req.token = token;
    req.rootUser = rootUser;
    req.UserID = rootUser._id;

    next();
  } catch (err) {
    res.status(401).send("unauthorized");
    console.log(err);
  }
};

module.exports = authenticate;
