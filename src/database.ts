import mongoose from "mongoose";
require("dotenv").config();

const connectDb = () => {
    return mongoose.connect(process.env.MONGODB_URI);
}

const closeDB = () => {
    return mongoose.connection.close()
}

export {connectDb, closeDB};


