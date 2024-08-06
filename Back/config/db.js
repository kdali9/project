import mongoose, { connect } from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://kassimdzambo06:ummy45@cluster0.xk5tol6.mongodb.net/Project').then(()=>console.log("DB Connected"));

}