import express from 'express'
import HomeController from '../controllers/HomeController.js'
import UploadFileController from '../controllers/UploadFileController.js';
import multer from 'multer';
import appRoot from 'app-root-path'

let router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot+'/src/public/images/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
const imageFilter = function (req, file, cb) {
    console.log(1)
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
}
let upload = multer({storage: storage, fileFilter: imageFilter});

const initWebRoute = (app) => {
    router.get('/', HomeController.getHomepage)
    router.get('/detail/user/:userID', HomeController.getDetailUser)
    router.post('/post/user', HomeController.postUser)
    router.post('/detele/user', HomeController.deleteUser)
    router.get('/page-update/user/:userID', HomeController.getEditPage)
    router.post('/update/user', HomeController.updateUser)

    //route upload file
    router.get('/goto-upload-file', UploadFileController.getPage)
    router.post('/upload-file',upload.single('profile_pic'), UploadFileController.handlerUploasFile)
    return app.use('/', router)
}
export default initWebRoute;