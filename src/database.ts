import mongoose from "mongoose";
require("dotenv").config();

const connectDb = (connectionString : string) => {
    console.log('MongoDb-Connection' ,  connectionString)
    return mongoose.connect(connectionString);
}

const closeDb = () => {
    return mongoose.connection.close()
}

const cleanDb = () => {
    return mongoose.connection.db.dropDatabase();
}

export {connectDb, closeDb, cleanDb};


