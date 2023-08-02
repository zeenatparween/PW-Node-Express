import userModel from"../Models/Schema";
import emailValidator from "email-validator"

const signup = async (req, res, next) => {
    const {name, email, password, confirmpassword} = req.body;
    console.log( name, email, password, confirmpassword);

    // All Field are Require
    if(!name || !email || !password || !confirmpassword){
        return res.status(400).json({
            success: false,
            message: "Every field is required"
        })
    }
    //  Check Email Validate or not
    const validEmail = emailValidator.validate(email);
    if(!validEmail){
        return res.status(400).json({
            success: false,
            message: "Please provide a valid email id"
        })
    }

    try{
    // Checking right or Wrong password
    if(password !== confirmpassword){
        return res.status(400).json({
            success: false,
            message : "password and confirm password doesn't match"
        })
    }

     console.log("connection sucessfully");
        const userinfo = userModel(req.body);
        const result = await userinfo.save();

        return res.status(200).json({
            success : true,
            data: result
        })
    } catch(err){
        if(err.code === 11000){
            return res.status(400).json({
                sucess : false,
                message: 'Accept already exists with provided email id'
            })
        }
        return res.status(400).json({
            success: false,
            message: err.message       
        })

    }
    

}
// SIGNIN METHOD
const signin =  async(req, res) =>{
      const { email, password} = req.body;
      if(!email || !password){
        return res.status(400).json({
            sucess: false,
            message: "Every field is mandatory"
        })
      }

      try {

        const user = await userModel
        .findOne({
            email
        })
        .select('+ password');
    
    if(!user || user.password === password){
        return res.status(400).json({
            success: false,
            message: "Invalid credentials"
        })
    }

   const token = user.jwtToken();
   user.password = undefined;

   const cookieOption = {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true
   };

   res.cookie("token", token, cookieOption);
   res.status(200).json({
    success: true,
    data: user
   })
        
      } catch (error) {
        return res.status(400).json({
            success: false,
            message: "error.message"
           })
      }

   
}

export {
    signup,
    signin
}