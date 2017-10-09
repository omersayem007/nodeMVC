const express = require("express");
const app = express();
const reading = require("./controllers/reading")

app.use(express.json());

app.post("/", reading.save, reading.send, function(res, req) {

    res.send("\n done \n\n")


});

app.listen(8001, () => console.log("server is running at port 8001 "))