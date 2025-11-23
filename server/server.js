import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

await connectDB();

// Define the allowed frontend origin
const allowedFrontendOrigin = 'https://quick-blog-neon-ten.vercel.app';

app.use(cors({
    // --- THE CRITICAL CHANGE ---
    // This explicitly allows your frontend URL to access this API.
    origin: allowedFrontendOrigin, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
}));

app.use(express.json());

// Routes
app.get('/', (req, res) => res.send("API is Working"));
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});

export default app;