
import db from "../models/index"
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

module.exports = {
     getHomePage,
     getAbout
}