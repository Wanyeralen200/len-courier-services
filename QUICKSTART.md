# Quick Start Guide

## Prerequisites
- Node.js 14+ installed
- MongoDB running locally or remote
- npm or yarn package manager

## Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/len-courier-services.git
cd len-courier-services
```

### 2. Run Setup Script

**For Linux/Mac:**
```bash
chmod +x setup.sh
./setup.sh
```

**For Windows:**
```cmd
setup.bat
```

### 3. Configure Environment Variables

**Backend (.env):**
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/len-courier
JWT_SECRET=your_secret_key_here
MPESA_API_URL=https://sandbox.safaricom.co.ke
MPESA_CONSUMER_KEY=your_key
MPESA_CONSUMER_SECRET=your_secret
```

**Frontend (.env):**
```
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

## Access the Application

- **Customer Website:** http://localhost:3000
- **API Server:** http://localhost:5000/api
- **MongoDB:** localhost:27017

## Default Test Users

### Customer Account
- Email: customer@test.com
- Password: password123

### Rider Account
- Email: rider@test.com
- Password: password123

### Admin Account
- Email: admin@test.com
- Password: password123

## Using Docker

```bash
docker-compose up
```

Then access:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod`
- Check MONGODB_URI in .env file

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Missing Dependencies
```bash
cd backend && npm install
cd ../frontend && npm install
```

## Next Steps

1. Review [API Documentation](API_DOCUMENTATION.md)
2. Check [Contributing Guide](CONTRIBUTING.md)
3. Explore [Project Structure](README.md)

## Support

For issues or questions, please open an issue on GitHub or contact support@lencourier.com
