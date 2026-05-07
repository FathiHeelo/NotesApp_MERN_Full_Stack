import mongoose from "mongoose"
const connectDB=async()=>{
try{
await mongoose.connect(process.env.MONGO_URL);
console.log("conectted")
}catch(error){
console.error("error ",error)
process.exit(1)
}

};
    export default connectDB;
