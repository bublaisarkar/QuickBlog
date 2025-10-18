📝 Quick Blog
Live URL: https://quick-blog-neon-ten.vercel.app/

Quick Blog is a modern, responsive blog application built using the MERN (MongoDB, Express, React, Node.js) stack. It features public viewing of published posts and a secure, dedicated admin panel for content management and comment moderation.

✨ Key Features
. Public Blog View: Users can view published blog posts, search, and navigate through categories.

. Secure Admin Dashboard: A protected login page grants administrators access to the management tools.

. CRUD Operations: Full functionality to Create, Read, Update (toggle publish status), and Delete blog posts.

. Image Management: Seamless image upload and optimization using ImageKit.

. Comment Moderation: Unapproved comments are held in the admin panel and can be explicitly approved or deleted.

. SEO-Friendly URLs: Clean, human-readable URLs for better search engine optimization.

. Responsive Design: Optimized for all screen sizes (mobile, tablet, desktop) using Tailwind CSS.

🚀 Getting Started
Follow these steps to set up the project locally.

Prerequisites
Node.js (LTS version)

MongoDB Atlas or local MongoDB instance

1. Clone the Repository
Bash

git clone <your-repository-url>
cd quick-blog

2. Backend Setup
Navigate to the backend folder, install dependencies, and create a configuration file.

Bash

cd backend
npm install
Create a .env file in the backend directory and add your environment variables:

Code snippet

# Database
MONGO_URL=your_mongodb_connection_string

# Admin Credentials (For simplicity in development)
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=strongpassword

# Authentication
JWT_SECRET=your_jwt_secret_key

# ImageKit Configuration
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url
3. Frontend Setup
Navigate to the frontend folder, install dependencies, and configure the API base URL.

Bash

cd ../frontend
npm install
Create a .env file in the frontend directory:

Code snippet

# Replace 5000 with the port your Express server runs on
VITE_BASE_URL=http://localhost:5000
4. Run the Applications
Open two separate terminals:

Terminal 1 (Backend):

Bash

cd backend
npm start  # or npm run dev
Terminal 2 (Frontend):

Bash

cd frontend
npm run dev
The application should now be accessible in your browser, usually at http://localhost:5173.

🔒 Admin Access
To access the administrative panel for managing blogs and comments:

Navigate to the /admin route (e.g., http://localhost:5173/admin).

Use the ADMIN_EMAIL and ADMIN_PASSWORD you set in your backend's .env file.







