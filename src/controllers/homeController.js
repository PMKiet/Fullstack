
import db from "../models/index"
import CRUDService from "../services/CRUDService"
let getHomePage = async (req, res) => {
     try {
          let data = await db.Users.findAll()
          return res.render("homePage.ejs", {
               data: JSON.stringify(data)
          })
     } catch (error) {
          console.log(error);
     }
}
let getAbout = (req, res) => {
     return res.render("test/about.ejs")
}

let getCrud = (req, res) => {
     return res.render("crud.ejs")
}

let postCrud = async (req, res) => {
     let message = await CRUDService.createNewUser(req.body)
     console.log(message);
     return res.send('hello')
}

let displayGetCrud = async (req, res) => {
     let data = await CRUDService.getAllUser()
     return res.render('displayCrud', {
          dataAllUsers: data
     })
}

let getEditCrud = async (req, res) => {
     let userId = req.query.id
     console.log(userId);
     if (userId) {
          let userData = await CRUDService.getUserInforById(userId)
          //Check user data not found

          //let user data
          return res.render('editCrud.ejs', {
               user: userData
          });
     } else {
          console.log('User cannot found!!');
     }

}

let putCrud = async (req, res) => {
     let data = req.body
     let allUsers = await CRUDService.updateUserData(data)
     return res.render('displayCrud', {
          dataAllUsers: allUsers
     })
}

let deleteCrud = async (req, res) => {
     let id = req.query.id

     if (id) {
          await CRUDService.deleteUserById(id)
          return res.send('Has delete user')
     } else {
          return res.send('User not found!!')
     }

}

module.exports = {
     getHomePage: getHomePage,
     getAbout: getAbout,
     getCrud: getCrud,
     postCrud: postCrud,
     displayGetCrud: displayGetCrud,
     getEditCrud: getEditCrud,
     putCrud: putCrud,
     deleteCrud: deleteCrud,
}