'use strict';
const sports = '축구';
try{
    sports = '야구';
}catch(e){
    console.log("에러입니다.");
}

const str = {
    language : '한글',
    types : '문자'
}

// object는 수정불가
try{
    str = {human : '동양인'};
}catch(e){
    console.log("const 재할당 불가");
}

// 하지만 object 안의 속성 값은 수정 가능
try{
    str.language = '영어';
    str.types = '다른문자';
    console.log(str);
}catch(e){
    console.log("const 재할당 불가");
}