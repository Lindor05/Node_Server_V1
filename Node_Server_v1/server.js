import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/db.js';


const PORT = process.env.PORT || 3000;
const uri = `mongodb+srv://${process.env.MONGOOSE_USER}:${process.env.MONGOOSE_PASSWORD}@clusterv1.fzwggrn.mongodb.net/?appName=ClusterV1`;

connectDB(uri);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
