import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import donationRouter from "./routes/donationRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'



// app config
const app = express()
const port = process.env.PORT || 4000

//middleware
app.use(express.json)
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/donation",donationRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)




app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://kassimdzambo06:ummy45@cluster0.xk5tol6.mongodb.net/?