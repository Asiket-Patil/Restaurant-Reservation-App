import mongoose from "mongoose";

export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URL, {
        dbName : "Restuarant"
    }).then(()=>{
        console.log('connected to data base sucessdully');
    }).catch(err=>{
        console.log("error while connecting to the database");
    })
}
