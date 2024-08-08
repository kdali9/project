import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import charityRouter from "./routes/charityRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config"



//app config
const app = express()
const port = process.env.PORT || 4000



//middleware 
app.use(express.json())
app.use(cors())




// db connection
connectDB();


//api endpoints
app.use("/api/charity",charityRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)

// Function to get the M-Pesa access token
const getMpesaAccessToken = async () => {
    const auth = Buffer.from(`${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`).toString('base64');

    try {
        const response = await axios.get(
            `https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials`,
            {
                headers: {
                    Authorization: `Basic ${auth}`,
                },
            }
        );
        return response.data.access_token;
    } catch (error) {
        console.error("Error getting M-Pesa access token:", error.message);
        throw new Error("Unable to get access token");
    }
};


app.post("/api/mpesa/stkpush", async (req, res) => {
    const { phoneNumber, amount, accountReference } = req.body;
    
    const auth = Buffer.from(`${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`).toString('base64');
    const tokenResponse = await axios.get(
        `https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials`,
        {
            headers: {
                Authorization: `Basic ${auth}`,
            },
        }
    );
    const token = tokenResponse.data.access_token;

    const timestamp = new Date().toISOString().replace(/[-:]/g, '').slice(0, 15);
    const password = Buffer.from(`${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`).toString('base64');

    try {
        const response = await axios.post(
            `https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest`,
            {
                BusinessShortCode: process.env.MPESA_SHORTCODE,
                Password: password,
                Timestamp: timestamp,
                TransactionType: 'CustomerPayBillOnline',
                Amount: amount,
                PartyA: phoneNumber,
                PartyB: process.env.MPESA_SHORTCODE,
                PhoneNumber: phoneNumber,
                CallBackURL: 'https://yourdomain.com/callback',
                AccountReference: accountReference,
                TransactionDesc: 'Donation Payment',
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
});





app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

