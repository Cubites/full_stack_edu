var txt = ''

var exe;
for(var i = 1; i < 6; i ++){
    var exe = (i!=3)? 'jpg' : 'jpg';
    txt += '<div class="blogbox">';
    txt += '<div class="blogimg" style="background-image:url(images/00' + i + '.' + exe + ');"></div>';
    txt += '<h1>그들의 인생의 기쁘며, 사랑의 얼마나 이것이다.</h1>';
    txt += '<p>곧 끓는 청춘의 만물은 내는 품고 피다. 소리다.이것은 품으며, 것은 위하여서 약동하다.곧 끓는 청춘의 만물은 내는 품고 피다. 소리다.이것은 품으며, 것은 위하여서 약동하다.곧 끓는 청춘의 만물은 내는 품고 피다. 소리다.이것은 품으며, 것은 위하여서 약동하다.</p>';
    txt += '<div class="iconbox">';
    txt += '<span class="material-icons-outlined">event_note</span>';
    txt += '<span class="date">2022.02.23</span>';
    txt += '<span class="material-icons-outlined">favorite</span>';
    txt += '<span class="heart">17</span>';
    txt += '<span class="material-icons-outlined">chat</span>';
    txt += '<span class="comment">21</span>';
    txt += '</div>';
    txt += '</div>';
}

document.getElementById("blog").innerHTML = txt;

var txt2;

for(var j = 6; i < 10; i++){
    txt2 += '<div class="card">';
    txt2 += '<div class="imgbox">';
    txt2 +='<img src="images/00' + j +'.jpg" alt="008">';
    txt2 += '</div>';
    txt2 += '<div class="contents">';
    txt2 += '<p>것은 없으면, 그들의 것이다. 행복스럽고 청춘의 되려니와, 그들의 인생의 기쁘며, 사랑의 얼마나 이것이다</p>';
    txt2 += '</div>';
    txt2 += '</div>';
}

document.getElementById("side").innerHYML = txt2;