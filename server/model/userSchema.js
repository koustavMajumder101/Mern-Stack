const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//defining the structure of the document
// here user schema is an instance of the database collection
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    //bcrypting the password
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});
// we are generating token
// here we are using normal funtion instaed of arrow function cause we will use "this" keyword which does not work with
//--> arrow function
userSchema.methods.generateAuthToken = async function () {
  try {
    let tokenGen =
      // sign method will take two arguments unique payload for which we will be using _id and key . Key must be unique so we will be using SECRET_KEY for that
      jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    //we are accessing the tokens field then cancating the generated token inside of token of tokens array
    this.tokens = this.tokens.concat({ token: tokenGen });
    //here this is reffering to userSchema
    await this.save();
    return tokenGen;
  } catch (err) {
    console.log(err);
  }
};
//creating the Model
// Always capitalize the first letter of your model constant
const User = mongoose.model("USER", userSchema);
//here the collection name was users

module.exports = User;
