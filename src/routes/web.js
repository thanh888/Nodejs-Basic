import express from 'express'
import HomeController from '../controllers/HomeController.js'
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', HomeController.getHomepage)
    router.get('/detail/user/:userID', HomeController.getDetailUser)

    return app.use('/', router)
}
export default initWebRoute;