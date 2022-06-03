## readfile.js
* 동기식 IO (fs.readFileSync)

## readfile2.js
* 비동기식 IO (fs.readFile)

## readfile3.js
* fs.open
* fs.read
* fs.close

## writefile.js
* fs.writeFile

## writefile2.js
* fs.open

## write.js
* 파일 생성 예제
* existsSync (exists는 삭제됨)
* exists
> <pre>
> async function fileExists(filename){
>     try{
>         await fs.promises.access(filename);
>         return true;
>     }catch(err) {
>         if(err.code === "ENOENT") {
>             return false;
>         }else{
>             throw err;
>         }
>     }
> }
> </pre>

## server.js
* 서버 체험 (실패)

## buffer.js
* Buffer

## crReadStr.js
* createReadStream
* createWriteStream
* 파일에서 데이터를 읽어와 새 파일을 생성하고 새파일에 데이터 넣기