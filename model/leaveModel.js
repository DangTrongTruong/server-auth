const mongoose = require('mongoose');
const leaveSchema = mongoose.Schema({
    RegistrationDate:{
        type: Date,
        default: Date.now,
    },
    RegisterForDate:{
        type:String,
        required: true,
    },
    checkIn:{
        type:String,
        required: true,
    }
    ,checkOut:{
        type:String,
        required: true,
    },
    workTime:{
        type:String,
        required: true,
    },
    lackTime:{
        type:String,
        required: true,
    },
    leaveAllDay:{
        type:Boolean,
        default:false
    },
    Range:{
        type:String,
    },
    RangeStart:{
        type:String,
    },
    RangeEnd:{
        type:String,
    },
    Reason:{
        type:String,
    },
    status:{
        type:String,
        default:"No Status"
    }

})

module.exports =mongoose.model('Leave',leaveSchema)