const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
     name: {
        type: String,
        require:[true, 'Name is required'],
        maxilength: [50, 'Name should be less than 50 character']
     },
     email: {
        type: String,
        unique: true
     },
     username: {
        type: String,
        unique: true
     },
     password: {
        type: String,
        age: Number
     }
})



export default mongoose.model("User", UserSchema)