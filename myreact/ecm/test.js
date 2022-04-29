/*
    번호 상품번호
    이미지, 제목, 상품설명
    new event sale price
*/
let mytext = [];
for(let i = 0; i < 152; i++){
    let img;
    if(i < 9){
        img = 'ot00' + (i + 1) + '.jpg';
    }else if(i >= 9 && i < 99){
        img = 'ot0' + (i + 1) + '.jpg';
    }else{
        img = 'ot' + (i + 1) + '.jpg';
    }
    let tr = Math.floor(Math.random()*2);
    let tr2 = Math.floor(Math.random()*2);
    let tr3 = Math.floor(Math.random()*7);
    let tr4 = Math.floor(Math.random()*2);
    if(tr3 == 0){tr4 = tr3 + 1} else {tr4 = tr3};
    let tr5 = 10000 * tr4 + 100000;
    mytext += `{ "id": ${i + 1},
            "pdid": "${"ot-" + (i + 1)}", 
            "image": "${img}", 
            "title": "아우터 ${i+1}번 상품", 
            "desc": "정말 좋고 아름다운 아우터입니다.", 
            "new": ${tr}, 
            "event": ${tr2}, 
            "sale": ${tr3}, 
            "price": ${tr5}}, `;
    mytext += "<br>";
}
document.getElementById('test').innerHTML = mytext;