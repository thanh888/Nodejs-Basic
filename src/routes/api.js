import express from 'express'
import APIController from '../controllers/ApiController.js'
import ApiController from '../controllers/ApiController.js';
let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', ApiController.getAllUser)
    router.post('/create-user', ApiController.createNewUser)
    router.put('/update-user', ApiController.updateUser)
    router.delete('/delete-user', ApiController.deleteUser)

    return app.use('/api/v1', router)
}
export default initAPIRoute;