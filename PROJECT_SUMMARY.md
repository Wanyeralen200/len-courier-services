# Len Courier Services - Complete Project Summary

## 🚀 Project Overview

Len Courier Services is a comprehensive full-stack courier management system built with modern web technologies. It provides three main interfaces:

1. **Customer Website (Public)** - For booking and tracking deliveries
2. **Rider Portal** - For managing deliveries and earnings
3. **Admin Dashboard** - For managing the entire operation

## 📁 Project Structure

```
len-courier-services/
├── backend/                      # Node.js/Express API
│   ├── src/
│   │   ├── models/              # MongoDB schemas
│   │   │   ├── User.js
│   │   │   ├── Parcel.js
│   │   │   ├── Delivery.js
│   │   │   └── Payment.js
│   │   ├── controllers/         # Route handlers
│   │   │   ├── authController.js
│   │   │   ├── parcelController.js
│   │   │   ├── paymentController.js
│   │   │   └── adminController.js
│   │   ├── routes/              # API endpoints
│   │   │   ├── auth.js
│   │   │   ├── parcels.js
│   │   │   ├── payments.js
│   │   │   ├── deliveries.js
│   │   │   ├── riders.js
│   │   │   ├── customers.js
│   │   │   └── admin.js
│   │   ├── middleware/          # Custom middleware
│   │   │   ├── auth.js
│   │   │   ├── adminAuth.js
│   │   │   ├── errorHandler.js
│   │   │   └── logger.js
│   │   ├── utils/               # Helper functions
│   │   │   ├── helpers.js
│   │   │   └── response.js
│   │   ├── config.js            # Configuration
│   │   ├── seed.js              # Database seeding
│   │   └── server.js            # Main server file
│   ├── package.json
│   ├── .env.example
│   ├── Dockerfile
│   └── .gitignore
│
├── frontend/                    # React application
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── Auth.jsx
│   │   │   ├── Parcel.jsx
│   │   │   ├── Admin.jsx
│   │   │   └── Layout.jsx
│   │   ├── pages/               # Page components
│   │   ├── api/                 # API integration
│   │   │   ├── client.js
│   │   │   └── endpoints.js
│   │   ├── context/             # React context
│   │   │   └── AuthContext.jsx
│   │   ├── styles/              # CSS files
│   │   ├── constants/           # Constants
│   │   │   └── types.js
│   │   ├── utils/               # Helper functions
│   │   │   └── helpers.js
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   ├── .env.example
│   ├── Dockerfile
│   └── .gitignore
│
├── .github/
│   ├── workflows/
│   │   └── ci-cd.yml            # GitHub Actions pipeline
│   ├── ISSUE_TEMPLATE.md
│   └── PULL_REQUEST_TEMPLATE.md
│
├── docker-compose.yml           # Docker orchestration
├── README.md                    # Main documentation
├── API_DOCUMENTATION.md         # API reference
├── QUICKSTART.md               # Quick start guide
├── CONTRIBUTING.md             # Contributing guidelines
├── CHANGELOG.md                # Version history
├── LICENSE                     # MIT License
├── setup.sh                    # Setup script (Linux/Mac)
├── setup.bat                   # Setup script (Windows)
└── .gitignore
```

## 🔧 Technology Stack

### Backend
- **Node.js** v14+ - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Axios** - HTTP client
- **Dotenv** - Environment variables
- **Nodemon** - Development server
- **Jest** - Testing framework

### Frontend
- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Ant Design** - UI component library
- **Axios** - HTTP client
- **Leaflet** - Maps visualization
- **React Leaflet** - React wrapper for Leaflet
- **React Icons** - Icon library
- **Moment.js** - Date/time manipulation

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **GitHub Actions** - CI/CD pipeline

## 📊 Database Schema

### Users
```javascript
{
  firstName, lastName, email, phone,
  password (hashed), role (customer/rider/admin),
  profileImage, isActive, timestamps
}
```

### Parcels
```javascript
{
  trackingId (unique), sender, receiver,
  weight, dimensions, contents,
  status, deliveryType, price, paymentStatus,
  assignedRider, customer, timestamps
}
```

### Payments
```javascript
{
  parcelId, customerId, amount, currency,
  paymentMethod, status, transactionId,
  mpesaReference, cardLast4, timestamps
}
```

### Deliveries
```javascript
{
  parcelId, riderId, status,
  startTime, completionTime, actualLocation,
  signature, photo, notes, attempts, timestamps
}
```

## 🔐 Authentication & Security

- **JWT Authentication** - Secure token-based auth
- **Password Hashing** - Bcrypt with 10 salt rounds
- **Role-Based Access Control** - Customer, Rider, Admin roles
- **Environment Variables** - Secure configuration
- **CORS** - Cross-origin resource sharing
- **Error Handling** - Comprehensive error middleware

## 🚀 API Endpoints

### Authentication (7 endpoints)
- POST `/auth/register` - Register new user
- POST `/auth/login` - User login
- GET `/auth/me` - Current user info
- POST `/auth/logout` - User logout

### Parcels (6 endpoints)
- POST `/parcels` - Create parcel
- GET `/parcels/track/:trackingId` - Track parcel
- GET `/parcels/customer/all` - Customer parcels
- GET `/parcels/rider/all` - Rider parcels
- PUT `/parcels/:id/status` - Update status
- PUT `/parcels/:id/assign` - Assign rider

### Payments (4 endpoints)
- POST `/payments/mpesa/initiate` - Start M-Pesa payment
- POST `/payments/confirm` - Confirm payment
- GET `/payments/history` - Payment history
- GET `/payments/:id` - Payment details

### Admin (6 endpoints)
- GET `/admin/dashboard/stats` - Dashboard statistics
- GET `/admin/parcels` - All parcels
- GET `/admin/riders` - All riders
- GET `/admin/customers` - All customers
- GET `/admin/revenue` - Revenue reports
- PUT `/admin/parcels/:id/status` - Update parcel status

### Riders & Customers (6 endpoints)
- Additional rider and customer-specific endpoints

## 🎯 Key Features

### Customer Features
- ✅ Fast delivery booking
- ✅ Real-time parcel tracking
- ✅ M-Pesa payment integration
- ✅ Delivery history
- ✅ Address book management
- ✅ Email & SMS notifications

### Rider Features
- ✅ Available deliveries list
- ✅ Real-time GPS tracking
- ✅ Earnings tracking
- ✅ Delivery history
- ✅ Performance metrics
- ✅ Availability management

### Admin Features
- ✅ Dashboard with KPIs
- ✅ Parcel management
- ✅ Rider management
- ✅ Customer management
- ✅ Revenue analytics
- ✅ System reports

## 📝 Setup Instructions

### Quick Start
```bash
# Clone repository
git clone https://github.com/yourusername/len-courier-services.git
cd len-courier-services

# Run setup
./setup.sh          # Linux/Mac
setup.bat          # Windows

# Configure .env files
# Start services
docker-compose up
```

### Manual Setup
```bash
# Backend
cd backend
npm install
cp .env.example .env
npm run dev

# Frontend (new terminal)
cd frontend
npm install
cp .env.example .env
npm start
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 🐳 Docker

### Build and Run
```bash
docker-compose up --build
```

### Access Points
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: localhost:27017

## 📚 Documentation

- [README.md](README.md) - Main documentation
- [API_DOCUMENTATION.md](API_DOCUMENTATION.md) - API reference
- [QUICKSTART.md](QUICKSTART.md) - Quick start guide
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contributing guidelines
- [CHANGELOG.md](CHANGELOG.md) - Version history

## 🔄 CI/CD Pipeline

GitHub Actions workflow includes:
- Backend testing (Node 14, 16, 18)
- Frontend building
- Docker image building
- Automated deployment ready

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Submit pull request
5. Follow contributing guidelines

## 📄 License

MIT License - See [LICENSE](LICENSE) file

## 💬 Support

- **Email**: support@lencourier.com
- **Issues**: GitHub Issues
- **Documentation**: See docs folder

## 👨‍💻 Development

### Environment Variables

**Backend (.env)**
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/len-courier
JWT_SECRET=your_secret_key
MPESA_API_URL=https://sandbox.safaricom.co.ke
MPESA_CONSUMER_KEY=key
MPESA_CONSUMER_SECRET=secret
```

**Frontend (.env)**
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 🎓 Learning Resources

- Express.js: https://expressjs.com
- React: https://react.dev
- MongoDB: https://docs.mongodb.com
- Ant Design: https://ant.design
- Docker: https://docs.docker.com

## 📈 Roadmap

- [ ] Mobile app (iOS/Android)
- [ ] Real-time notifications
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Machine learning optimization
- [ ] Integration with more payment providers
- [ ] SMS & WhatsApp integration

---

**Created with ❤️ for efficient courier management**
