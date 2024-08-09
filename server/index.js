const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}));

// MongoDB connection
const URI = "mongodb+srv://pukaarsanstha:I60868V899LQREow@cluster0.pv61dno.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a Mongoose schema
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true }
});

// Create a Mongoose model
const Contact = mongoose.model('Contact', contactSchema);

// Home route
app.get('/', (req, res) => { 
    res.send("Server Live Pukaar");
});

// POST route to handle form submission
app.post('/contact', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Create a new Contact document
        const contact = new Contact({ name, email, phone, message });

        // Save the contact to the database
        await contact.save();

        // Send a success response
        res.status(200).send({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).send({ message: 'Error submitting form' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server Live Pukaar");
});
