const express = require('express')
const dotenv = require("dotenv");
const mongoose = require("mongoose");

app = express();
dotenv.config({ path: "./config.env" });
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

const port = process.env.PORT || 5000;

const DB = process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB/*, {  useCreateIndex: true }*/)
        .then(() => console.log("DB connection successful"))
        .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Server Running at ${port}`)
});