const mongoose = require("mongoose")

const Student_Info_Schema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    role:{
        type:String,
        require: true,
        
    },
    occupation: {
       type:String,
       require: [true, "Your Occupation is mandatory"]
    },
    location: {
        type: String,
        require:true
    },
    date: {
        type: Number,
        require: [true, "Date Must be required"]
    }

})

module.exports = mongoose.model("StudentDetail", Student_Info_Schema );

export default Schema.js