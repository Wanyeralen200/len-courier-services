# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication

All protected endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Auth Routes

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+254712345678",
  "password": "password123",
  "role": "customer"
}

Response: 201 Created
{
  "token": "jwt_token",
  "user": {
    "id": "user_id",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "role": "customer"
  }
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response: 200 OK
{
  "token": "jwt_token",
  "user": { ... }
}
```

### Parcel Routes

#### Create Parcel
```http
POST /parcels
Authorization: Bearer <token>
Content-Type: application/json

{
  "sender": {
    "name": "John Doe",
    "phone": "+254712345678",
    "email": "john@example.com",
    "address": "123 Main St"
  },
  "receiver": {
    "name": "Jane Smith",
    "phone": "+254787654321",
    "email": "jane@example.com",
    "address": "456 Oak Ave"
  },
  "weight": 2.5,
  "contents": "Electronics",
  "deliveryType": "express",
  "price": 500
}

Response: 201 Created
{
  "message": "Parcel created successfully",
  "parcel": { ... }
}
```

#### Track Parcel
```http
GET /parcels/track/LEN-MLD-0001
Content-Type: application/json

Response: 200 OK
{
  "trackingId": "LEN-MLD-0001",
  "status": "in_transit",
  "receiver": { ... },
  "assignedRider": { ... },
  ...
}
```

#### Get Customer Parcels
```http
GET /parcels/customer/all
Authorization: Bearer <token>

Response: 200 OK
{
  "count": 5,
  "parcels": [ ... ]
}
```

### Payment Routes

#### Initiate M-Pesa Payment
```http
POST /payments/mpesa/initiate
Authorization: Bearer <token>
Content-Type: application/json

{
  "parcelId": "parcel_id",
  "phoneNumber": "+254712345678"
}

Response: 200 OK
{
  "message": "M-Pesa payment initiated",
  "paymentId": "payment_id",
  "mpesaResponse": { ... }
}
```

### Admin Routes

#### Get Dashboard Stats
```http
GET /admin/dashboard/stats
Authorization: Bearer <token> (Admin only)

Response: 200 OK
{
  "totalParcels": 150,
  "totalDelivered": 120,
  "inTransit": 20,
  "returned": 5,
  "totalRevenue": 75000,
  "totalRiders": 25,
  "totalCustomers": 200
}
```

#### Get All Parcels
```http
GET /admin/parcels
Authorization: Bearer <token> (Admin only)

Response: 200 OK
{
  "count": 150,
  "parcels": [ ... ]
}
```

## Error Responses

```json
{
  "error": "Error message"
}
```

Common status codes:
- 200: Success
- 201: Created
- 400: Bad request
- 401: Unauthorized
- 403: Forbidden
- 404: Not found
- 500: Server error
