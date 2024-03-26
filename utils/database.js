import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async() => {
    if(isConnected){
        console.log("MongoDb is already connected")
        return;
    }

    try {
       await mongoose.connect(process.env.MONGODB_URI, {
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