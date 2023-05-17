// 用于处理 multipart/form-data 类型的表单数据，主要用于上传文件。写在 busboy 之上非常高效。
const multer = require('multer')
const express = require('express')
const router = express.Router()
//生成随机数
const random = (min,max) => {
    return Math.floor(Math.random()*(max-min)) + min;
}
const storage = multer.diskStorage({
    //保存路径
    destination : function(req,file,cb){
        cb(null,'./data/photo')
        //不是相对路径
    },
    filename : (req,file,cb) => {
        //正则匹配后缀名
        let type = file.originalname.replace(/.+\./,'.')
        cb(null,Date.now() + random(1,100) + type)
    }
})
const upload = multer({storage : storage })
router.post('/profile',upload.single('file'),(req,res)=>{
    let imgurl = `/photo/${req.file.filename}` 
    res.send(imgurl)
})

module.exports = router