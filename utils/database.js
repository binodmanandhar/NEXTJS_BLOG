import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async() => {
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log("MongoDb is already connected")
        return;
    }

    try {
       await mongoose.connect(process.env.MONGODB_URL, {
        dbName: "node-api",
        useNewUrlParser: true,
        useUnifiedTopology:true
       }) 
       isConnected = true;
       console.log("MongoDB Connected")
    }catch(error){
        console.log(error);
    }
}