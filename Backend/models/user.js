const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
    
    fName: { 
        type: String,
        required: true 
    },
    lName: { 
        type: String,
        required: true 
    },
    email: { 
        type: String,
        required: true 
    },
    password: { 
        type: String,
        required: true 
    },
},
{
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
  );
  
  module.exports = mongoose.model('User', userSchema);