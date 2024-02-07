const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
    path: '../.env'
});

let DB = process.env.MONGODB_URI;

const connectMongoDB = async () => {
    try {
        await mongoose.connect(DB);
        console.log(`Connected DB`);
    } catch (error) {
        console.log(`Disconnected DB: ${error.message}`);
    }
}
connectMongoDB();
module.exports = connectMongoDB;