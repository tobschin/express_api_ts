import mongoose from "mongoose";


const connectDb = () => {
    return mongoose.connect(`mongodb://localhost:27017/myapp`);
}

const closeDB = () => {
    return mongoose.connection.close()
}

export {connectDb, closeDB};


