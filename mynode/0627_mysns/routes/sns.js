const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { Sns, Hash } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

try{
    fs.readdirSync('uploads');
}catch(error){
    console.error('uploads폴더가 없어 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
}

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, db) => { // 파일이 업로드될 경로 설정
            db(null, 'uploads');
        },
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            cb(null, path.basename(file.originalname, ext) + "_" +  Date.now() + ext);
        }
    }),
    limits: { fileSize: 10 * 1024 * 1024}
});

router.post('/img', isLoggedIn, upload.single('img'), (req, res) => {
    console.log(req.file);
    res.json({ url: `/img/${req.file.filename}`});
});

const upload2 = multer();
router.post('/', isLoggedIn, upload2.none(), async (req, res, next) => {
    try{
        console.log(req.member);
        const sns = await Sns.create({
            content: req.body.content,
            img: req.body.url,
            UserId: req.member.id
        });
        const hash = req.body.content.match(/#[^\s#]+/g);
        if(hash){
            const result = await Promise.all(
                hash.map(tag => {
                    return Hash.findOrCreate({
                        where: { title: tag.slice(1).toLowerCase()}
                    })
                })
            );
            await sns.addHash(result.map(r => r[0]));
        }
        res.redirect('/');
    }catch(err){
        console.error(err);
        next(err);
    }
});

module.exports = router;