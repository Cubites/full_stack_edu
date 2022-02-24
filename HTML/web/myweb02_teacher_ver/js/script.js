var txt = '', txt2 = '';

for(var i = 1; i < 6; i++){
    var exe = (i!=3)? 'jpg':'png';       
    txt += '<div class="blogbox">';
    txt += '<div class="blogimg" style="background-image:url(images/tr0'+i+'.'+exe+');"></div>';
    txt += '<h1>곧 끓는 청춘의 만물은 내는 품고 피다. 소리다.이것은 품으며, 것은 위하여서 약동하다.</h1>';
    txt += '<p>곧 끓는 청춘의 만물은 내는 품고 피다. 소리다.이것은 품으며, 것은 위하여서 약동하다.곧 끓는 청춘의 만물은 내는 품고 피다. 소리다.이것은 품으며, 것은 위하여서 약동하다.곧 끓는 청춘의 만물은 내는 품고 피다. 소리다.이것은 품으며, 것은 위하여서 약동하다.</p>';
    txt += '<div class="iconbox">';
    txt += '<span class="material-icons-outlined">event_note</span>';
    txt += '<span class="date">2022.02.23</span>';
    txt += ' <span class="material-icons-outlined">favorite</span>';
    txt += '<span class="heart">17</span>';
    txt += '<span class="material-icons-outlined">chat</span>';
    txt += '<span class="comment">21</span>';
    txt += '</div>';
    txt += '</div>';
}

document.getElementById("blog").innerHTML = txt;

for(i=1; i<6; i++){

    txt2 += '<li><img src="images/th0'+i+'.jpg" alt="th01">';
    txt2 += '<h3>청춘의 만물은 내는 품고</h3>';
    txt2 += '<p>별 멀리 무성할 있습니다. 이네들은 지나가는 멀듯이, 별이 청춘이 한 계십니다.'; txt2 += '차 릴케 벌써 아스라히 자랑처럼 계십니다. </p></li>';

}

document.getElementById("posts").innerHTML = txt2;