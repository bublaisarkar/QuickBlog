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
    // CORS fix is correctly implemented here
    origin: allowedFrontendOrigin, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
}));

// --- THE FIX FOR 413 (Content Too Large) ---
// We explicitly set the request body size limit to 10MB (or whatever size is needed).
// The default is usually around 100kb, which is too small for rich blog content.
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