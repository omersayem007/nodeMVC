const redis = require("redis");
let client = redis.createClient();

client.on("error", function(err) {

    throw err;
})

module.exports = client;