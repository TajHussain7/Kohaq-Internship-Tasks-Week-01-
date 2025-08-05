# Kohaq Education Platform

A modern, responsive educational platform that connects students with quality courses and expert instructors.

## 🚀 Features

- **Interactive Course Catalog**: Browse through our comprehensive course listings
- **Seamless Registration**: Easy-to-use registration process for courses
- **Responsive Design**: Optimized for all devices and screen sizes
- **Real-time Validation**: Instant feedback during registration process
- **Animated UI**: Smooth transitions and interactions using Framer Motion
- **Secure Backend**: Robust API with data validation and SQLite storage

## 🛠️ Tech Stack

### Frontend

- React 18 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Scroll for smooth navigation

### Backend

- Node.js with Express
- SQLite3 database
- RESTful API architecture
- Input validation and sanitization

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository

```bash
git clone https://github.com/TajHussain7/KOHAQ-Internship-Tasks.git
cd kohaq-landing
```

2. Install dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
```

3. Environment Setup

```bash
# Create .env file in root directory
cp .env.example .env

# Create .env file in server directory
cd server
cp .env.example .env
```

4. Start Development Servers

```bash
# From root directory
npm run dev
```

## 📖 Project Structure

```
kohaq-landing/
├── src/                # Frontend source code
│   ├── components/     # React components
│   ├── services/      # API services
│   └── constants/     # Configuration
├── server/            # Backend source code
│   ├── controllers/   # Request handlers
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   └── db/           # Database configuration
└── public/           # Static assets
```

## 📝 API Documentation

### Endpoints

- `POST /api/register` - Register for a course
- `GET /api/participants` - List all participants
- `DELETE /api/participants/:id` - Remove registration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 👥 Contact

- **Developer**: Taj Hussain
- **GitHub**: [@TajHussain7](https://github.com/TajHussain7)
- **Project Link**: [https://github.com/TajHussain7/KOHAQ-Internship-Tasks](https://github.com/TajHussain7/KOHAQ-Internship-Tasks)
