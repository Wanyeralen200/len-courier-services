# Len Courier Services

A full-stack courier and delivery management application built with Node.js, Express, React, and MongoDB.

## Features

### Customer Website (Public)
- Fast delivery booking
- Real-time parcel tracking
- Payment integration (M-Pesa)
- Delivery history
- Customer support

### Rider Portal
- Available deliveries list
- Real-time navigation
- Earnings tracking
- Delivery history
- Performance metrics

### Admin Dashboard
- Complete analytics
- Parcel management
- Rider management
- Customer management
- Revenue reports
- Performance tracking

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Axios** - HTTP client

### Frontend
- **React 18** - UI framework
- **Ant Design** - Component library
- **React Router** - Navigation
- **Axios** - API client
- **Leaflet** - Maps integration

## Project Structure

```
len-courier-services/
├── backend/
│   ├── src/
│   │   ├── models/          # Database models
│   │   ├── controllers/     # Route controllers
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Express middleware
│   │   └── server.js        # Server entry point
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── src/
    │   ├── components/      # React components
    │   ├── pages/           # Page components
    │   ├── api/             # API client
    │   ├── styles/          # CSS files
    │   ├── App.js
    │   └── index.js
    ├── package.json
    └── .env.example
```

## Installation

### Prerequisites
- Node.js v14+
- MongoDB
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Configure your .env file
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout user

### Parcels
- `POST /api/parcels` - Create parcel
- `GET /api/parcels/track/:trackingId` - Track parcel
- `GET /api/parcels/customer/all` - Get customer parcels
- `GET /api/parcels/rider/all` - Get rider parcels
- `PUT /api/parcels/:id/status` - Update parcel status
- `PUT /api/parcels/:id/assign` - Assign rider

### Payments
- `POST /api/payments/mpesa/initiate` - Initiate M-Pesa payment
- `POST /api/payments/confirm` - Confirm payment
- `GET /api/payments/history` - Get payment history
- `GET /api/payments/:id` - Get payment details

### Admin
- `GET /api/admin/dashboard/stats` - Dashboard statistics
- `GET /api/admin/parcels` - All parcels
- `GET /api/admin/riders` - All riders
- `GET /api/admin/customers` - All customers
- `GET /api/admin/revenue` - Revenue report
- `PUT /api/admin/parcels/:id/status` - Update parcel status

## Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/len-courier
JWT_SECRET=your_jwt_secret_key_here
MPESA_API_URL=https://sandbox.safaricom.co.ke
MPESA_CONSUMER_KEY=your_mpesa_key
MPESA_CONSUMER_SECRET=your_mpesa_secret
MPESA_SHORTCODE=123456
MPESA_PASSKEY=your_mpesa_passkey
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Database Schema

### User Model
- firstName, lastName
- email, phone
- password (hashed)
- role (customer, rider, admin)
- profileImage
- isActive
- timestamps

### Parcel Model
- trackingId (unique)
- sender (name, phone, email, address)
- receiver (name, phone, email, address, location)
- weight, dimensions, contents
- status, deliveryType, price
- paymentStatus
- assignedRider, customer
- timestamps

### Payment Model
- parcelId, customerId
- amount, currency
- paymentMethod (mpesa, card, bank_transfer)
- status, transactionId
- timestamps

### Delivery Model
- parcelId, riderId
- status, startTime, completionTime
- actualLocation, signature, photo
- notes, attempts
- timestamps

## Running with Docker

```bash
docker-compose up
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@lencourier.com or contact us through our website.

---

**Developed with ❤️ by Len Courier Services**
