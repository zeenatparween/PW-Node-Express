const user = require('../Models/userModel.js')

exports.home = (req, res) => {
    res.send('Hello World!')
}
// CREATE USER
exports.createUser = async(req, res) => {
    // Extract info
    try {
        const {name, email} = req.body
         if(!name || !email) {
            throw new Error("Name and email are required")
         }

         const userExists = user.findOne({email})
         if(userExists){
            throw new Error("User already Exist")
         }
        const User = await user.create({
            name,
            email
        })
        res.status(201).json({
            success:true,
            message: "User Created Successfully",
            User
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success:false,
            message: "error.message",
            
        })
}
}


// GET USER
exports.getUser = async(req, res) => {
    try {
        const Users = await user.find({})
        if(Users.length <=0){
            res.status(400).json({
                success:false,
                message: 'No User is there'
            })
        }
        res.status(200).json({
            success: true,
            Users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}

// DELETE USER

exports.deleteUser = async(req, res) => {
    try {
        const userId = req.params.id
         const User = await user.findByIdAndDelete(userId)
         res.status(200).json({
            success:true,
            message: "User.deleted successfully"
         })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            messgae: 'Some Issue! your Data not Deleted'
        })
        
    }
}


//UDATE USER

exports.editUser = async(req, res) => {
    try {
        const User = await user.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message: "User Updated SuccessFully"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
