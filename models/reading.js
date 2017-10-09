const redis = require("../lib/redis")


exports.save = function(readings, callback) {
    if (!readings.length) return callback(null, null);
    var reading = readings.pop();

    redis.LPUSH("readings", JSON.stringify(readings), function(err) {
        if (err) return callback(err, null);
        exports.save(readings, callback)
    })


}