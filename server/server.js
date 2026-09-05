require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// API Routes
app.use('/api', apiRoutes);

// Root Route
app.get('/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    server: 'Jeevan Kumar Portfolio Express Server',
    time: new Date().toISOString()
  });
});

// Serve frontend build static files in production if client/dist exists
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

app.get('*', (req, res) => {
  if (req.url.startsWith('/api')) {
    return res.status(404).json({ error: 'API endpoint not found' });
  }
  res.sendFile(path.join(clientDistPath, 'index.html'), (err) => {
    if (err) {
      res.send('Jeevan Kumar Portfolio Backend API is Running on Port ' + PORT + '. Frontend is running on Vite dev server.');
    }
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 JEEVAN KUMAR PORTFOLIO BACKEND SERVER IS ONLINE`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`⚡ API Endpoints: http://localhost:${PORT}/api/profile`);
  console.log(`====================================================`);
});
