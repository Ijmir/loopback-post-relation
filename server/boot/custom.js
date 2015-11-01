var mongodb = require('../../node_modules/loopback-connector-mongodb/node_modules/mongodb');
module.exports = function(server) {
    var loopback = require('loopback');
    var ObjectID = mongodb.ObjectID;
    var model = loopback.getModel('feed');
    model.definition.properties.id.type = ObjectID;
    model = loopback.getModel('comment');
    model.definition.properties.id.type = ObjectID;
    // model.definition.properties.feedRef.type = ObjectID;
};
