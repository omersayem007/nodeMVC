const _ = require("underscore");
const model = require("../models/reading");

exports.save = function(req, res, next) {

    var readings = _.clone(req.body);
    model.save(readings, function(err) {
        if (err) return res.json(503, { error: true });
        next();
    });

}


exports.send = function() {


}