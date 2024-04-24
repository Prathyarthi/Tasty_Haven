import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI || "")
            .then(() => {
                console.log("Connected to MongoDB");
            })
    } catch (error) {
        console.log(error);
    }
}

export default connectToDB