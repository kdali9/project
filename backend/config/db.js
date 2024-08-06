import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://kassimdzambo06:Nusramatano@cluster0.y3csekr.mongodb.net/Project').then(()=>console.log("DB Connected"));
}