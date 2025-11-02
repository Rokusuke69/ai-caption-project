# AI Caption App 🚀

A modern, AI-powered social media application built with React.js frontend and Node.js backend. Users can share images with automatically generated captions using Google's Gemini AI.

![AI Social Media](https://img.shields.io/badge/AI-Powered-blue) ![React](https://img.shields.io/badge/React-18.2.0-61dafb) ![Node.js](https://img.shields.io/badge/Node.js-Express-green)

## ✨ Features

- **🤖 AI-Powered Captions** - Automatically generate engaging captions for your images using Google Gemini AI
- **📸 Image Upload** - Seamless image upload with preview functionality
- **🔐 JWT Authentication** - Secure login/register with httpOnly cookies
- **🎨 Modern UI** - Clean, Instagram-like user interface
- **⚡ Fast Performance** - Built with React Vite for optimal performance
- **📱 Responsive Design** - Works perfectly on all devices

## 🛠 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Styling with modern features

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database with Mongoose ODM
- **JWT** - Authentication with httpOnly cookies
- **Multer** - File upload handling
- **ImageKit** - Image storage and CDN
- **Google Gemini AI** - AI caption generation
- **bcryptjs** - Password hashing

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- ImageKit account
- Google AI Studio API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Rokusuke69/ai-caption.git
cd ai-social-app
```

2. **Backend Setup**
```bash
cd backend
npm install

# Create .env file and add your credentials
cp .env.example .env
# Edit .env with your actual keys
```

3. **Frontend Setup**
```bash
cd ../frontend
npm install
```

4. **Environment Variables**

Backend (.env):
```env
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_gemini_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

### Running the Application

1. **Start Backend Server**
```bash
cd backend
npm run dev
# Server runs on http://localhost:3000
```

2. **Start Frontend Development Server**
```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
```

3. **Open your browser**
Navigate to `http://localhost:5173`

## 📁 Project Structure

```
ai-caption/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # MongoDB models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   ├── services/        # External services
│   │   └── db/             # Database connection
│   ├── server.js           # Server entry point
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/     # React components
    │   ├── pages/          # Page components
    │   ├── hooks/          # Custom React hooks
    │   ├── services/       # API services
    │   └── utils/          # Utility functions
    ├── vite.config.js
    └── package.json
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Posts
- `POST /api/posts` - Create new post (protected)
  - Requires: Multipart form data with image file
  - Returns: Post with AI-generated caption

## 🎯 Usage

1. **Register/Login** - Create an account or login with existing credentials
2. **Create Post** - Upload an image from the Dashboard
3. **AI Magic** - Wait for the AI to generate a creative caption
4. **Share** - Your post is automatically published with the AI caption

## 🤖 AI Integration

The app uses Google's Gemini AI to analyze uploaded images and generate:
- Creative and engaging captions
- Relevant hashtags
- Emoji-enhanced descriptions
- Context-aware text based on image content

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT tokens stored in httpOnly cookies
- Protected API routes with auth middleware
- File type validation for uploads
- CORS configuration

## 🚀 Deployment

### Backend Deployment (vercel)
```bash
# Set environment variables in your hosting platform
# Deploy from backend directory
```

### Frontend Deployment (Vercel)
```bash
npm run build
# Deploy the dist folder
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Google Gemini AI for caption generation
- ImageKit for image storage and CDN
- React and Vite teams for excellent tools
- MongoDB for database services

---

**Made with ❤️ and 🤖 AI Power**

*Give it a star ⭐ if you like this project!*
