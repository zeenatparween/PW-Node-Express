import {Router} from 'express'
const router = Router()
import {isLoggedIn} from '../middleware/auth.middleware.js'
 import {  register,login,logout,getProfile} from '../Controllers/user.controllers.js'

router.get("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/profile", isLoggedIn, getProfile)





export default router;