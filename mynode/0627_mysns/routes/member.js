const express = require('express');

const { isLoggedIn } = require('./middlewares');
const Member = require('../models/member');

const router = express.Router();

router.post('/:id/follow', isLoggedIn, async (req, res, next) => {
    try{
        const member = await Member.findOne({ id: req.member.id });
        if(member){
            await member.addFollowing(parseInt(req.params.id, 10));
            res.send('success');
        }else{
            res.status(404).send('no member');
        }
    }catch(err){
        console.error(err);
        next(err);
    }
});

module.exports = router;