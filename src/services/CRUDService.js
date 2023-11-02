
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
import db from "../models/index"


let createNewUser = async (data) => {
     return new Promise(async (resolve, reject) => {
          try {
               let hashPasswordFormBcryptjs = await hashUserPassword(data.password)
               await db.Users.create({
                    email: data.email,
                    password: hashPasswordFormBcryptjs,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    gender: data.gender === '1' ? true : false,
                    roleId: data.roleId,
                    phonenumber: data.phonenumber,
               })
               resolve('Create new a user success!')
          } catch (error) {
               reject(error)
          }
     })

}

let hashUserPassword = (password) => {
     return new Promise(async (resolve, reject) => {

          try {

               let hashPassword = await bcrypt.hashSync(password, salt);
               resolve(hashPassword)
          } catch (error) {
               reject(error)
          }
     })
}

module.exports = {
     createNewUser: createNewUser
}