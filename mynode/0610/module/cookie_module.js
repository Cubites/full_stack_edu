const setUserCookie = (req, res) => {
    res.cookie('user', {
        id: "hong",
        name: "홍길동",
        power: 10000
    });
    res.redirect('/showCookie');
}

const showCookie = (req, res) => {
    res.send(req.cookies);
};

module.exports.setUserCookie = setUserCookie;
module.exports.showCookie = showCookie;