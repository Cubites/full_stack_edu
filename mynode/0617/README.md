# 템플릿 엔진
## EJS
* <code>npm install ejs -s</code> : package 설치
* code
  > <pre>
  > app.set('view engine', 'ejs'); // view 엔진으로 ejs 선택
  > app.use(express.static(__dirname + '/views')); // views 폴더로 선택
  >
  > app.get('/hello', (req, res) => {
  >   // name 변수를 담아 views 폴더에 있는 hello.ejs 파일 실행
  >   res.render('hello', {name: req.query.name});
  > });
  > </pre>

## Pug (퍼그)(제이드)


## Nunjscks (넌적스)