import mongoose from 'mongoose'

const Userschema = new mongoose.Schema (
    {
    name: {
       type: String,
       required: [true, 'Name is required'],
       maxLength:[50, 'Name should be less than 50 character']
    },
    email: {
         type: String,
         unique: true
    },
    username:{
        type: String,
        unique: true
    },
    password: {
          type: String,
          required: [true, 'password must be required']
    },
    age: {
       type: String,
    }
}
)

export default mongoose.model("Product", Userschema)