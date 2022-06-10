const login = (req,res) => {
    console.log('process/login 호출');
    let userid = req.body.userid || req.query.userod;
    let userpass = req.body.userpass || req.query.userpass;
    let username = req.params.name;
    if(req.session.user){
        console.log('이미 로그인 되어 있습니다.');
        res.redirect('/www/product.html');
    }else{
        req.session.user = {
            id: userid,
            name: username,
            level: 100
        };
        res.writeHead(200, {"Content-type": "text/html;charset=utf8"});
        res.write(`
            <h1>로그인 성공</h1>
            <p>ID: ${userid}</p>
            <p><a href="/product">상품 페이지로 이동</a></p>
        `);
        res.end();
    }
};

const product = (req, res) => {
    console.log('product 호출됨');
    if(req.session.user){
        res.redirect('/www/product.html');
    }else{
        res.redirect('www/login.html');
    }
};

const logout = (req, res) => {
    if(req.session.user){
        console.log('로그아웃 합니다.');
        req.session.destroy((err) => {
            if(err){
                console.log('세션 삭제 중 에러가 발생했습니다.');
                return;
            }
            console.log('세션 삭제 성공');
            res.redirect('/product');
        });
    }
};


module.exports.login = login;
module.exports.product = product;
module.exports.logout = logout;