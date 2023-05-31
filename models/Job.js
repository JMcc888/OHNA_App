const mongoose = require('mongoose')

// May add more fields, for now will be a contact form
const JobSchema = new mongoose.Schema({
    First: {
        type: String,
        
    },
    Middle: {
        type: String,
    },
    Last: {
        type: String,
        
    },
    DOB: {
        type: Date,
            },
    Address: {
        type: String,
            },
    Email: {
        type: String,
              },
    HomePhone: {
        type: String
    },
    MobilePhone: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Job', JobSchema)