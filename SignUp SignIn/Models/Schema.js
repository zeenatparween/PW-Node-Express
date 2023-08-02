const mongoose = require("mongoose")
const {Schema} = mongoose;
const JWT = require("jsonwebtoken");

const UserSchema = new Schema({
    name:{
        type: String,
        required: [true, 'user name is Required'],
        miniLength: [5, 'Name must be atleast 5 char'],
        maxiLength: [50, "Name must be less than 50 char"],
        trim: true,
    },
    email:{
        type: String,
        required: [true, "user email is required"],
        unique: true,
        lowercase: true,
        unique: [true, 'already registered']
    },
    password:{
        type: String,
        select:false,
    },
    forgotPasswordToken: {
        type: String,
    },
    forgotPasswordExpairedDate:{
        type:Date
    } 
},
{
    timestamps : true
   
})

UserSchema.methods = {
    jwtToken(){
        return JWT.sign(
            {id: this._id, email: this.email},
            process.env.SECRET,
            { expiresIn: '24h'}
        )
         
        }
    }

const userModel = mongoose.model('user',UserSchema);
module.exports = userModel;