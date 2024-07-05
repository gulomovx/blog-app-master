import mongoose from "mongoose";
 export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://web_dev:nlZmZQ4j5PE@cluster0.cdj2eod.mongodb.net/blog-app')
console.log('db connected');
}