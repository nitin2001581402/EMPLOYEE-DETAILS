const mongoose = require('mongoose');
const MongoURI = "mongodb://localhost:27017/demo"; 

const ConnectToMongo = async () => {
    try {
        await mongoose.connect(MongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB successfully");
    } catch (err) {
        console.error("Connection Failed", err);
    }
};

module.exports = ConnectToMongo;
