import multer from 'multer';
import path from 'path'
let getPage = (req, res) => {
    return res.render('uploadFile.ejs')
}

const upload = multer().single('profile_pic');
let handlerUploasFile = async (req, res) => {
    // 'profile_pic' is the name of our file input field in the HTML form
    
    upload(req, res, function (err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any
        console.log(req.file.filename)

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        // Display uploaded image for user validation
        res.send(`You have uploaded this image: <hr/><img src="/images/${req.file.filename}" width="500"><hr /><a href="/goto-upload-file">Upload another image</a>`);
    });
}

export default {
    getPage,
    handlerUploasFile
}