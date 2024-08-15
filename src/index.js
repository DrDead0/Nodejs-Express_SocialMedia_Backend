import express from 'express';
import mongoose from 'mongoose';

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://Mongodb+srv://Ashish:AshMon128@cluster0.65mzykg.mongodb.net')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error', err));

// Simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//this is this is just the test code and the code could work could not ..