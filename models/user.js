const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    email: String,
    hashedPassword :{
        type:String
    },
    token: String,
    docentes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'profes'
    }]
});

module.exports = mongoose.model('User',userSchema);