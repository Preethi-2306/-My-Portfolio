const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so the React frontend (running on e.g. port 5173) can communicate with this API
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'https://my-portfolio-qr18.onrender.com'
  ],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Parse incoming JSON request bodies
app.use(express.json());

// Path to data file for saving messages locally
const DATA_DIR = path.join(__dirname, 'data');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

// Ensure data folder and messages.json file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2), 'utf-8');
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Preethi Rajendran Portfolio Backend',
    timestamp: new Date().toISOString()
  });
});

// Helper for email regex validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// POST /api/contact - Handle contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  const errors = {};

  // Server-side validation
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    errors.name = 'Please provide your name.';
  } else if (name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long.';
  }

  if (!email || typeof email !== 'string' || email.trim().length === 0) {
    errors.email = 'Please provide your email address.';
  } else if (!isValidEmail(email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
    errors.subject = 'Please provide a subject.';
  } else if (subject.trim().length < 3) {
    errors.subject = 'Subject must be at least 3 characters long.';
  }

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    errors.message = 'Please provide a message.';
  } else if (message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  // If validation errors exist, return 400 Bad Request
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed. Please correct the errors in the form.',
      errors
    });
  }

  try {
    const newMessage = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString()
    };

    // Read existing messages from local JSON storage
    let messages = [];
    try {
      const fileData = fs.readFileSync(MESSAGES_FILE, 'utf-8');
      messages = JSON.parse(fileData);
    } catch (readErr) {
      messages = [];
    }

    messages.push(newMessage);

    // Save back to local JSON file
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf-8');

    return res.status(200).json({
      success: true,
      message: `Thank you, ${newMessage.name}! Your message has been received and stored securely.`,
      storedMessageId: newMessage.id
    });
  } catch (err) {
    console.error('Error saving message:', err);
    return res.status(500).json({
      success: false,
      message: 'An unexpected server error occurred while processing your message. Please try again later.'
    });
  }
});

// GET /api/messages - Retrieve messages (useful for local demonstration/verification)
app.get('/api/messages', (req, res) => {
  try {
    const fileData = fs.readFileSync(MESSAGES_FILE, 'utf-8');
    const messages = JSON.parse(fileData);
    res.json({
      success: true,
      count: messages.length,
      messages
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to read messages.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

