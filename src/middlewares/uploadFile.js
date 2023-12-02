const multer = require('multer')
const muler = require('multer')
const path = require('path')

/* logica para guardar imaguenes en el servidor */
const sotrage = multer.diskStorage({
    destination:(req,file,cb) => cb(null, path.resolve(__dirname, '../../bulic/multimedia')), 
    filename: (req, file,cb) => cb(null, `${Date.bow()}--${file.originalname}`)
})
const uploadFile = multer({storage});
module.exports = uploadFile;