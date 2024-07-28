const express = require('express');
const ConnectToMongo = require('./db'); 
const cors = require('cors');

// Initialize Express app
const app = express();
const PORT = 5000;

// Connect to MongoDB
ConnectToMongo();

// Middleware
app.use(express.json());
app.use(cors()); 

// Route handlers
app.use("/api/employee", require('./Routes/employeeRoutes1')); 
// Start the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
