const express = require('express')
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

app = express();
app.use(cors());
dotenv.config({ path: "./config.env" });


const port = process.env.PORT || 5000;

//MongoDB
const DB = process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
);
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
mongoose.connect(DB/*, {  useCreateIndex: true }*/)
        .then(() => console.log("DB connection successful"))
        .catch((err) => console.log(err));

//Body parser
app.use(bodyParser.urlencoded({
    parameterLimit: 10000000,
    limit: '50mb',
    extended: true
}));
app.use(bodyParser.json({limit: '50mb'}));

//Call routes
const fieldRouter = require('./routes/fieldRoute')
const nodeRouter = require('./routes/nodeRoute')
const faceRouter = require('./routes/faceRoute')
const bodyRouter = require('./routes/bodyRoute')

//Set routes
app.use("/api/field", fieldRouter)
app.use("/api/node", nodeRouter)
app.use("/api/face", faceRouter)
app.use("/api/body", bodyRouter)

app.listen(port, () => {
    console.log(`Server Running at ${port}`)
});