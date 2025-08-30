const Firebase = require('firebase-admin');

// Use environment variables for Firebase configuration
const serviceAccount = {
  type: process.env.FIREBASE_TYPE || "service_account",
  project_id: process.env.FIREBASE_PROJECT_ID || "mydrive-4c4c8",
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID || "0f386f1e865ba88a97b60099a8a9e31f06b17b05",
  private_key: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDTdGOovncCVubd\ndJ26KvCtXJN1oXM6sk9PWAshTvUSxLjlEX/YWzoYcEPqOpn+7mJbi+9BWRaqQFN7\nlrK5myK/KcP4E2R0m2cAPT/VeND3Q5FNH9zpltVgyHKPIkgKqAJjqRhFR3gFmrVu\nrVXUbZEC7nxc2z5r1aTaRIujAisq5czW2umdPdhPRb6h0rwySbO8VWRCtudejT7l\nbN89AeiodjTQNp/Q2k6K26qGLaBxIfa4/14pq3N986jnjVeH6QglSnHphXH92uBl\n1QqB3kmtrPAKFerHoBK3z97adHsE20C3qP7/mR1JkYsbksTcO+Yg8WkEqnUMXPSw\nUWa88UYlAgMBAAECggEAIM9pe1B6dOF5Fxm2M6HgEHZR5ymzEIOEbOJTb8qpmkzu\nB5Usiiy1mf8pepm3NWhV2LCg4jnpm2c5zO54MvaQcKsRXlfb+X/3foECe6QwgH16\neUYdaB1gZJEVvYHrPcQOAtrFClLpm60Cw/afX8PUgWjx4RKf3+mZl8iVBika+5++\nQVKtzUwTrryuZoQ4LZDsIqUTbQCWiaYxA4upHoK1IqBTbWAXBE+fQrbZLpAlXKTK\nQ6GjstfsVYgZAx2LQPOSq+RmkgS83MDX8uf9bySsK5g+1g7btt8YwsJP8OWLxayl\noSGzIEioL8ajDwU1+U1vWGqvaOQ87UWIBbQXAOMrzQKBgQD6Kyz1FHdC0sarsPCL\nvaOLzC1JPSUHmDB1f4ggpzrZOJXZHtnJFfHn2v3qPe7mAwwgAJczth3k7CKbYsa+\n358ClCRIptxi9lgC/efJJxFZunUUqLVCs7FaM8WmKHxckB2Z3ZD0qWvPTAFAmj4h\nf9knrsvhFlIEAMtHaYQSBDS5kwKBgQDYYjJYU6kUcj2+GQV3bZj/SsecFvcP7YQE\nY3wnFI+cFC3YFnnOCOhcju9mrPXMqWSJZhA5CluoD1npw/Mr0LlNgQ+K88fgF3Q+\n9rF1COE+yj+s5oiQXsf8hBAyBMf+WljrtbvLWa6Dhp5K0OAa88ZxqtBRyo5euv+7\ni2zRsEx0ZwKBgGdb0U5Mr11/gi/LggbqShjnOcqppZP2sAbLsy1yimDW/SpgkbCA\nDZsyonfWMM79cVQDinUGCGHdogq7C8wuzh6doEQYFLQafZB24P390zBUVi076u/t\nGBhhjYax8Xe431ID9fDv0qgqCdZsI8FpdgnsMTYFJ8uZnGMb2EItVK9bAoGAZWbf\nIPVTrvk6ZfNj1GvP3xM0J7m7XgN4cnYMoGPKSOJL+Y/O1PbnrThuiDdVmOto6dqi\nj5iDC2bmQ95H/qh5rhBlMEC90g4rs7X3w1i99abh4CzIop9IKNXaoRYMgu3j7dHk\nh48ncQuM8pKf8wF6ZZoetbWuskX/weu8uydbLNECgYBAv9+I/Q+lawJz5J6lcURh\nfxx1AtbT79vtZcXem4P+G+KeP1IUYkiE/R7RuDivCGFSL2UMJeI89m0vcxC4DGsk\n+cVNQf80H7sZjgsCikhHDjVqOPCub0Akl5pntkvqPUP2NCfn/RNWj4+NYAkirshE\n6AhtVq3lVq3QUUAvHo1q0g==\n-----END PRIVATE KEY-----\n",
  client_email: process.env.FIREBASE_CLIENT_EMAIL || "firebase-adminsdk-fbsvc@mydrive-4c4c8.iam.gserviceaccount.com",
  client_id: process.env.FIREBASE_CLIENT_ID || "114166516628482983477",
  auth_uri: process.env.FIREBASE_AUTH_URI || "https://accounts.google.com/o/oauth2/auth",
  token_uri: process.env.FIREBASE_TOKEN_URI || "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL || "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL || "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40mydrive-4c4c8.iam.gserviceaccount.com",
  universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN || "googleapis.com"
};

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "mydrive-4c4c8.firebasestorage.app"
});

module.exports = Firebase;

