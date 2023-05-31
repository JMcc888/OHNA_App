const mongoose = require('mongoose')

const ClientFormSchema = new mongoose.Schema({
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
    EmergencyContactName: {
        type: String,
        
    },
    EmergencyContactRelationship: {
        type: String,
        
    },
    EmergencyContactNumber: {
        type: String,
        
    },
    PrimaryProvider: {
        type: String,
        
    },
    SecondaryProvider: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model("ClientForm", ClientFormSchema);