# 🚗 BMW-Style Multi-Page Car Website

A sophisticated full-stack automotive website built with modern web technologies, featuring BMW-inspired design and functionality.

## ✨ Features

- **Multi-page Architecture**: Homepage, Models, Design, Innovation, Services, About, Contact
- **Interactive Car Models**: Searchable and filterable car listings with detailed specifications
- **BMW-Inspired Design**: Premium aesthetic with custom Tailwind CSS styling
- **Responsive Layout**: Mobile-first design that works on all devices
- **Modern Animations**: Smooth transitions and micro-interactions with Framer Motion
- **Full-Stack Setup**: React frontend with Express.js backend and MongoDB
- **TypeScript**: Type-safe development throughout the application

## 🛠️ Tech Stack

### Frontend
- **React 19** with TypeScript
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **MongoDB** with Mongoose
- **JWT** for authentication
- **CORS** and **Helmet** for security

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or cloud instance)
- Docker & Docker Compose (optional, for containerized setup)

### Quick Start with Docker 🐳

The easiest way to get started is using Docker Compose:

```bash
# Clone the repository
git clone <repository-url>
cd car-website

# Copy environment file
cp backend/.env.example backend/.env

# Start all services
docker-compose up -d

# Access the application
# Frontend: http://localhost:5173
# Backend API: http://localhost:5000
# MongoDB: localhost:27017
```

### Manual Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd car-website
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

3. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Environment Setup**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your MongoDB URI and other settings
   ```

5. **Start MongoDB**
   Make sure MongoDB is running locally or update your `.env` with a cloud MongoDB URI.

### Running the Application

#### Option 1: Development Mode
1. **Start the Backend API**
   ```bash
   cd backend
   npm run dev
   ```
   The API will be available at `http://localhost:5000`

2. **Start the Frontend** (in a new terminal)
   ```bash
   cd frontend
   npm run dev
   ```
   The website will be available at `http://localhost:5173`

#### Option 2: Production Mode
1. **Build and start the backend**
   ```bash
   cd backend
   npm run build
   npm start
   ```

2. **Build and start the frontend**
   ```bash
   cd frontend
   npm run build
   npm run preview  # or serve the dist folder with any static server
   ```

## 📁 Project Structure

```
car-website/
├── frontend/                # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   └── Header.tsx  # Navigation header
│   │   ├── pages/          # Page components
│   │   │   ├── Homepage.tsx    # Landing page
│   │   │   ├── Models.tsx      # Car models listing
│   │   │   └── AdminPanel.tsx  # Admin management
│   │   ├── App.tsx         # Main app component with routing
│   │   └── main.tsx        # App entry point
│   ├── public/             # Static assets
│   ├── package.json        # Frontend dependencies
│   └── vite.config.ts      # Vite build configuration
├── backend/                # Node.js API server
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Custom middleware
│   │   └── server.ts       # Express server
│   ├── package.json        # Backend dependencies
│   └── .env.example        # Environment variables template
├── README.md               # Project documentation
└── package-lock.json       # Root dependencies lockfile
```

## 🎨 Design Features

- **BMW Color Palette**: Custom blue theme with premium color scheme
- **Typography**: Inter font family for modern, clean text
- **Animations**: Smooth page transitions and hover effects
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Premium Cards**: Elevated design with subtle shadows and hover states

## 🔧 Available Scripts

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Backend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server
- `npm test` - Run tests

## 🌐 API Endpoints

- `GET /api/health` - Health check
- `GET /api/cars` - Get all cars (currently returns mock data)
- More endpoints coming as features are developed

## 🚧 Development Roadmap

- [x] Project setup and architecture
- [x] Basic routing and navigation
- [x] Homepage with hero section
- [x] Models page with filtering
- [x] Backend API structure
- [ ] Car configurator component
- [ ] Image galleries and carousels
- [ ] MongoDB data models
- [ ] User authentication
- [ ] Admin panel for content management
- [ ] Advanced search and filtering
- [ ] Performance optimization
- [ ] SEO optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is for educational purposes. BMW is a trademark of Bayerische Motoren Werke AG.

## 🆘 Support

If you encounter any issues, please check:
1. Node.js version compatibility
2. MongoDB connection
3. Environment variables configuration
4. Port availability (3000 for frontend, 5000 for backend)

---

Built with ❤️ for automotive enthusiasts
