import mongoose from "mongoose";

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log('Connected to Mongo DB');
    } catch (error) {
       console.log('Error connecting to the MongoDB ', error.message); 
    }
}

export default connectToMongoDb;