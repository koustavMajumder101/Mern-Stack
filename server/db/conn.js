const mongoose = require("mongoose");
//accessing the DATABASE key mentioned in config.env file
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((positiveResponse) => {
    console.log("Connection Success!!");
  })
  .catch((error) => {
    console.log("no connection", error);
  });
