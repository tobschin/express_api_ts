import mongoose from "mongoose";


const connectDb = () => {
    mongoose.connect(`mongodb://localhost:27017/myapp`);
    mongoose.connection.once('open', () => {console.log('MongoDB-Connected')});
}

export default connectDb;