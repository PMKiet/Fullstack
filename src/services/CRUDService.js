
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

let getAllUser = () => {
     return new Promise((resolve, reject) => {
          try {
               let users = db.Users.findAll({
                    raw: true
               })
               resolve(users)
          } catch (error) {
               reject(error)
          }
     })
}

let getUserInforById = (userId) => {
     return new Promise(async (resolve, reject) => {
          try {
               let user = await db.Users.findOne({
                    where: { id: userId },
                    raw: true,
               })

               if (user) {
                    resolve(user)
               } else {
                    resolve({})
               }
          } catch (error) {
               reject(error)
          }
     })
}

let updateUserData = (data) => {
     return new Promise(async (resolve, reject) => {
          try {

               let user = await db.Users.findOne({
                    where: { id: data.id }
               })
               if (user) {
                    user.email = data.email
                    user.password = data.password
                    user.firstName = data.firstName
                    user.lastName = data.lastName
                    user.address = data.address
                    user.phonenumber = data.phonenumber

                    await user.save()

                    let allUsers = await db.Users.findAll()
                    resolve(allUsers)
               } else {
                    resolve()
               }


          } catch (error) {
               reject(error)
          }
     })
}

let deleteUserById = async (userId) => {
     return new Promise(async (resolve, reject) => {
          try {
               let user = await db.Users.findOne({
                    where: { id: userId }
               })

               if (user) {
                    await user.destroy()
               }

               resolve()
          } catch (error) {
               reject(error)
          }
     })
}

module.exports = {
     createNewUser: createNewUser,
     getAllUser: getAllUser,
     getUserInforById: getUserInforById,
     updateUserData: updateUserData,
     deleteUserById: deleteUserById,
}