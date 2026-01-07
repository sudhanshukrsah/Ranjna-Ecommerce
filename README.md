# Ranjna E-Commerce Backend

A production-grade RESTful API backend for an e-commerce platform built with Node.js, Express, and MongoDB.

## 🚀 Features

- ✅ **RESTful API** architecture
- ✅ **MongoDB** with Mongoose ODM
- ✅ **Authentication & Authorization** (JWT-based)
- ✅ **Input Validation** with Zod
- ✅ **Error Handling** with centralized middleware
- ✅ **Security** with Helmet and CORS
- ✅ **Request Logging** with Morgan
- ✅ **Environment Configuration** with dotenv
- ✅ **Payment Integration** (Razorpay)

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js v5
- **Database:** MongoDB (Mongoose)
- **Validation:** Zod
- **Authentication:** JWT
- **Security:** Helmet, CORS
- **Payment Gateway:** Razorpay
- **Development:** Nodemon

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/sudhanshukrsah/Ranjna-Ecommerce.git
cd Ranjna-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database-name

# JWT Secrets
JWT_ACCESS_SECRET=your-secret-access-key
JWT_REFRESH_SECRET=your-secret-refresh-key
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# Razorpay
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-key-secret
```

5. Start the server:

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

## 📁 Project Structure

```
src/
├── app.js                      # Express app configuration
├── server.js                   # Server entry point
├── config/
│   ├── env.js                  # Environment variables
│   └── database.js             # MongoDB connection
├── middlewares/
│   ├── error.middleware.js     # Global error handler
│   └── validate.middleware.js  # Request validation
├── modules/                    # Feature modules (products, users, orders, etc.)
├── utils/
│   └── AppError.js            # Custom error class
├── validators/                 # Zod validation schemas
├── integrations/              # Third-party integrations
├── jobs/                      # Background jobs
└── tests/                     # Test files
```

## 🔌 API Endpoints

### Health Check
```
GET /health
```

Response:
```json
{
  "status": "ok",
  "uptime": 123.45,
  "environment": "development",
  "timestamp": "2026-01-06T10:00:00.000Z"
}
```

## 🔐 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NODE_ENV` | Environment mode | No | `development` |
| `PORT` | Server port | No | `5000` |
| `MONGODB_URI` | MongoDB connection string | Yes | - |
| `JWT_ACCESS_SECRET` | JWT access token secret | Yes | - |
| `JWT_REFRESH_SECRET` | JWT refresh token secret | Yes | - |
| `JWT_ACCESS_EXPIRES_IN` | Access token expiry | No | `15m` |
| `JWT_REFRESH_EXPIRES_IN` | Refresh token expiry | No | `7d` |
| `RAZORPAY_KEY_ID` | Razorpay key ID | Yes | - |
| `RAZORPAY_KEY_SECRET` | Razorpay key secret | Yes | - |

## 🧪 Scripts

```bash
# Start production server
npm start

# Start development server with auto-reload
npm run dev
```

## 🔒 Security Features

- **Helmet.js** - Sets secure HTTP headers
- **CORS** - Configured for cross-origin requests
- **Input Validation** - All inputs validated with Zod schemas
- **Error Handling** - No sensitive information leaked in production
- **Environment Variables** - Secrets stored securely in .env

## 📝 Error Handling

The API uses a centralized error handling system:

**Development mode:** Returns full error details with stack traces
**Production mode:** Returns safe, generic error messages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👤 Author

**Sudhanshu Kumar**

- GitHub: [@sudhanshukrsah](https://github.com/sudhanshukrsah)

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Express.js team
- MongoDB team
- All open-source contributors

---

Made with ❤️ by Sudhanshu Kumar
