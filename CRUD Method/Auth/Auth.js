const auth = (req, res, next) =>{
    try {
        let token = req.headers.authorization
        if(token){
            token = token.split(" ")[1];
            let user = jwt.verify(token, SECRET_KEY);
            req.userID = user.id;
        }
        else{
            res.status(401).json({
                message: "Unauthorized user",
                message: "Unauthorized user"
            })
        }
        next();
        
    } catch (error) {
        console.log(error);
        res.staus(200).json({
            message: "Unauthorized user"
        })
    }
       
}