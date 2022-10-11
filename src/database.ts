import mongoose from "mongoose";
require("dotenv").config();

const connectDb = () => {
    console.log('MongoDb-Connection' ,  process.env.MONGODB_URI)
    return mongoose.connect(process.env.MONGODB_URI);
}

const closeDb = () => {
    return mongoose.connection.close()
}

const cleanDb = () => {
    return mongoose.connection.db.dropDatabase();
}

export {connectDb, closeDb, cleanDb};


