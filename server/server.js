import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

await connectDB();

// Define the list of allowed frontend origins
// 1. The secure production URL.
const allowedOrigins = [
    'https://quick-blog-neon-ten.vercel.app'
];

// Configure CORS dynamically
app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like server-to-server or curl requests)
        // and allow all origins in the allowedOrigins list.
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            // Block the request if the origin is not allowed
            callback(new Error('Not allowed by CORS'), false);
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
}));

// --- THE FIX FOR 413 (Content Too Large) ---
app.use(express.json({ limit: '10mb' }));

// For form submissions, it's also good practice to increase the urlencoded limit
app.use(express.urlencoded({ limit: '10mb', extended: true }));


// Routes
app.get('/', (req, res) => res.send("API is Working"));
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});

export default app;