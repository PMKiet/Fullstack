
import userService from '../services/userService'
let handleLogin = async (req, res) => {

     let email = req.body.email
     let password = req.body.password

     if (!email || !password) {
          return res.status(500).json({
               errorCode: 1,
               message: 'missing inputs parameters'
          })
     }
     let userData = await userService.handleUserLogin(email, password)
     //check email exist
     //compare password
     //return userInfor
     //access_token:jwt


     return res.status(200).json({
          userData,
          errorCode: userData.errCode,
          message: userData.errMessage
     })
}

module.exports = {
     handleLogin: handleLogin
}