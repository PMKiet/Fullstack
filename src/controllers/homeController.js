
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

module.exports = {
     getHomePage: getHomePage,
     getAbout: getAbout,
     getCrud: getCrud,
     postCrud: postCrud
}