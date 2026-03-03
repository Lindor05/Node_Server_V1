import mongoose from "mongoose";

const uri = `mongodb+srv://${process.env.MONGOOSE_USER}:${process.env.MONGOOSE_PASSWORD}@clusterv1.fzwggrn.mongodb.net/?appName=ClusterV1`;

export const connectDB = (uri) => {
    try {
        mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;

    }
}