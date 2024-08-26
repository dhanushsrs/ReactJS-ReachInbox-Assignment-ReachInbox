// backend/app.js
const express = require('express');
const cors = require('cors');


const mailRoutes = require('./routes/mailRoutes');

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Frontend URL
    methods: 'GET,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization' // Allow Authorization header
}));
app.use('/api/mails', mailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
