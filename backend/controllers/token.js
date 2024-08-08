const axios = require("axios");

const createToken = async(req,res,next)=>{
    const secret = "Ts3NZ6GV7jV4AFtyv909I5qqJsEuwom3nxJkpIZwGTAPSAsgoP60z2t0FrvroRLV";
    const consumer= "B4O0ar3T0XYvPX2A99UfuG5N82PzRB5ldaS3UlUlxmkxmavW" ;
    const auth = new Buffer.from(`${consumer}:${secret}`).toString("base64");

    await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate",
      {
        headers: {
            authorization:`Basic ${auth}`,
        },
      }
    )
    .then((data) => {
        token = data.data.access_token;
        console.log(data.data);
        next();
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err.message);
      });
 
};

module.exports={createToken};

