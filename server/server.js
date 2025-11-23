import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

await connectDB();

// --- THE FIX ---
// Instead of default cors(), we specify the origin.
// This tells the browser: "Yes, https://quick-blog-neon-ten.vercel.app is allowed to talk to me."
app.use(cors({
    origin: 'https://quick-blog-server-two-opal.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Important if you send Auth tokens or Cookies
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