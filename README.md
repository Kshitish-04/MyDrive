# 🌟 MyDrive - Personal Cloud Storage

A beautiful, modern cloud storage application built with Node.js, Express, and MongoDB. Upload, manage, and access your files from anywhere with a stunning glass-morphism UI design.

![MyDrive Banner](../image/banner.png)

## ✨ Features

### 🎨 **Beautiful Modern UI**
- **Glass Morphism Design** - Stunning frosted glass effects with backdrop blur
- **Gradient Backgrounds** - Beautiful purple-blue gradients throughout
- **Smooth Animations** - Fade-in effects and hover animations
- **Responsive Design** - Perfect on desktop, tablet, and mobile devices
- **Modern Typography** - Clean Inter font family for professional look

### 🔐 **Secure Authentication**
- **User Registration & Login** - Secure account creation and authentication
- **Password Hashing** - BCrypt encryption for password security
- **JWT Tokens** - JSON Web Token based session management
- **Protected Routes** - Secure file access and management

### 📁 **File Management**
- **File Upload** - Drag & drop or click to upload files (max 2MB)
- **File Download** - Direct download of uploaded files
- **File Deletion** - Remove unwanted files with confirmation
- **File Listing** - Beautiful card-based file display
- **Firebase Storage** - Reliable cloud storage backend

### 📱 **Mobile Responsive**
- **Touch-Friendly** - Optimized for mobile interactions
- **Adaptive Layout** - Stacks elements properly on small screens
- **Mobile Navigation** - Compact header and navigation
- **Optimized Modals** - Mobile-friendly upload dialogs

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Firebase project with Storage enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kshitish-04/MyDrive.git

   cd mydrive
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   # Database
   MONGO_URL=mongodb://localhost:27017/mydrive
   
   # JWT
   JWT_SECRET=your-super-secret-jwt-key-here
   
   # Firebase
   FIREBASE_TYPE=service_account
   FIREBASE_PROJECT_ID=your-firebase-project-id
   FIREBASE_PRIVATE_KEY_ID=your-firebase-private-key-id
   FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour-Firebase-Private-Key\n-----END PRIVATE KEY-----\n"
   FIREBASE_CLIENT_EMAIL=your-firebase-service-account-email
   FIREBASE_CLIENT_ID=your-firebase-client-id
   FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
   FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
   FIREBASE_AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
   FIREBASE_CLIENT_X509_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/your-firebase-service-account-email
   FIREBASE_UNIVERSE_DOMAIN=googleapis.com
   FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
   
   # Server Configuration
   PORT=3000
   ```

4. **Firebase Setup**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firebase Storage
   - Generate a service account key
   - Add the credentials to your `.env` file

5. **Start the application**
   ```bash
   npm start
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **Firebase Storage** - Cloud file storage
- **JWT** - Authentication tokens
- **BCrypt** - Password hashing
- **Multer** - File upload handling

### Frontend
- **EJS** - Embedded JavaScript templating
- **Tailwind CSS** - Utility-first CSS framework
- **Remix Icons** - Beautiful icon library
- **Flowbite** - UI components
- **Vanilla JavaScript** - Client-side interactions

### Storage & Database
- **MongoDB** - User data and file metadata
- **Firebase Storage** - Actual file storage
- **Multer Firebase Storage** - Integration middleware

## 📂 Project Structure

```
Drive/
├── image/
│   └── banner.png           # Banner image for README
├── models/
│   └── user.js              # User schema and model
├── routes/
│   ├── index.js             # Main routes
│   └── user.js              # Authentication routes
├── views/
│   ├── home.ejs             # Main dashboard
│   ├── login.ejs            # Login page
│   └── register.ejs         # Registration page
├── config/
│   └── firebase.js          # Firebase configuration
├── middleware/
│   └── auth.js              # Authentication middleware
├── public/
│   └── ...                  # Static assets (CSS, JS, etc.)
├── app.js                   # Main application file
├── package.json             # Dependencies and scripts
├── .env                     # Environment variables
└── README.md                # This file
```

## 🎯 API Endpoints

### Authentication
- `GET /user/login` - Login page
- `POST /user/login` - Authenticate user
- `GET /user/register` - Registration page
- `POST /user/register` - Create new user
- `GET /logout` - Logout user

### File Management
- `GET /` - Dashboard (protected)
- `POST /upload` - Upload file (protected)
- `GET /download/:filename` - Download file (protected)
- `POST /delete/:filename` - Delete file (protected)

## 🔧 Configuration

### Environment Variables
| Variable                                 | Description                                   | Required |
|-------------------------------------------|-----------------------------------------------|----------|
| `MONGO_URL`                              | MongoDB connection string                     | ✅       |
| `JWT_SECRET`                             | Secret key for JWT tokens                     | ✅       |
| `FIREBASE_TYPE`                          | Firebase service account type                 | ✅       |
| `FIREBASE_PROJECT_ID`                    | Firebase project ID                           | ✅       |
| `FIREBASE_PRIVATE_KEY_ID`                | Firebase private key ID                       | ✅       |
| `FIREBASE_PRIVATE_KEY`                   | Firebase service account private key          | ✅       |
| `FIREBASE_CLIENT_EMAIL`                  | Firebase service account email                | ✅       |
| `FIREBASE_CLIENT_ID`                     | Firebase client ID                            | ✅       |
| `FIREBASE_AUTH_URI`                      | Firebase auth URI                             | ✅       |
| `FIREBASE_TOKEN_URI`                     | Firebase token URI                            | ✅       |
| `FIREBASE_AUTH_PROVIDER_X509_CERT_URL`   | Firebase auth provider X509 cert URL          | ✅       |
| `FIREBASE_CLIENT_X509_CERT_URL`          | Firebase client X509 cert URL                 | ✅       |
| `FIREBASE_UNIVERSE_DOMAIN`               | Firebase universe domain                      | ✅       |
| `FIREBASE_STORAGE_BUCKET`                | Firebase storage bucket name                  | ✅       |
| `PORT`                                   | Server port (default: 3000)                   | ❌       |
| `NODE_ENV`                               | Node environment (`development`/`production`) | ❌       |
| `SESSION_SECRET`                         | Secret for session management (if used)       | ❌       |

### Example `.env` file
```env
# Database
MONGO_URL=mongodb://localhost:27017/mydrive

# JWT
JWT_SECRET=your-super-secret-jwt-key-here

# Firebase
FIREBASE_TYPE=service_account
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_PRIVATE_KEY_ID=your-firebase-private-key-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour-Firebase-Private-Key\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=your-firebase-service-account-email
FIREBASE_CLIENT_ID=your-firebase-client-id
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT_X509_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/your-firebase-service-account-email
FIREBASE_UNIVERSE_DOMAIN=googleapis.com
FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket

# Server Configuration
PORT=3000
```

### File Upload Limits
- **Maximum file size**: 2MB
- **Supported formats**: All file types
- **Storage**: Firebase Cloud Storage

## 🎨 UI Components

### Design System
- **Colors**: Blue-purple gradient theme (#667eea to #764ba2)
- **Typography**: Inter font family
- **Spacing**: Consistent 8px grid system
- **Shadows**: Layered shadow system for depth
- **Animations**: Smooth 0.3s transitions

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Local Development
```bash
npm run start    # Start with nodemon for development
```

### Production Deployment

#### Using PM2
```bash
npm install -g pm2
pm2 start app.js --name "mydrive"
pm2 startup
pm2 save
```

#### Using Docker
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```

#### Environment Setup for Production
- Set `NODE_ENV=production`
- Use strong JWT secrets
- Configure proper MongoDB connection
- Set up Firebase production project
- Configure reverse proxy (Nginx)
- Enable HTTPS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow ESLint configuration
- Write meaningful commit messages
- Add comments for complex logic
- Test on multiple devices
- Maintain responsive design

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** - For the amazing utility-first CSS framework
- **Firebase** - For reliable cloud storage
- **Remix Icons** - For beautiful icons
- **MongoDB** - For flexible database solution
- **Express.js** - For the robust web framework

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Contact: pradhankshitish1@gmail.com

---

<div align="center">
  <p>Made with ❤️ by [Kshitish]</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>