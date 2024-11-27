const mongoose = require('mongoose');

// Define the schema for a user
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    default: 0
  },
  deregistered: {
    type: Date,
    default: Date.now
  }
});

// Create a model for the user schema
const User = mongoose.model('User', userSchema);

// Use the model to create a new user document
const newUser = new User({
  name: 'John Doe',
  email: 'johndoe@example.com',
  age: 25
});

// Save the new user document to the database
newUser.save()
  .then(user => console.log('User created:', user))
  .catch(err => console.error(err));
