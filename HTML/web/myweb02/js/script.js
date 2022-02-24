var txt = ''

for(var i = 1; i < 6; i ++){
    txt += '<div class="blogbox">';
    txt += '<div class="blogimg" style="background-image:url(images/00' + i + '.jpg);"></div>';
    txt += '<h1>그들의 인생의 기쁘며, 사랑의 얼마나 이것이다.</h1>'
    txt += '<p>곧 끓는 청춘의 만물은 내는 품고 피다. 소리다.이것은 품으며, 것은 위하여서 약동하다.곧 끓는 청춘의 만물은 내는 품고 피다. 소리다.이것은 품으며, 것은 위하여서 약동하다.곧 끓는 청춘의 만물은 내는 품고 피다. 소리다.이것은 품으며, 것은 위하여서 약동하다.</p>'
    txt += '<div class="iconbox">'
    txt += '<span class="material-icons-outlined">event_note</span>'
    txt += '<span class="date">2022.02.23</span>'
    txt += '<span class="material-icons-outlined">favorite</span>'
    txt += '<span class="heart">17</span>'
    txt += '<span class="material-icons-outlined">chat</span>'
    txt += '<span class="comment">21</span>'
    txt += '</div>'
    txt += '</div>'
}

document.getElementById("blog").innerHTML = txt;

var txt3 = '';

for(var i = 1; i < 6; i++){
    txt3 += '<li>';
    txt3 += '<img src="images/th0' + i + '.jpg" alt="th0' + i + '">'
    txt3 += '<h3>그들의 인생의 기쁘며 이것이다.</h3>'
    txt3 += '<p>곧 끓는 청춘의 만물은 내는 품고 피다. 소리다.이것은 품으며, 것은 위하여서 약동하다.곧 끓는 청춘의 만물은 내는 품고 피다. </p>'
    txt3 += '</li>'
}

document.getElementById("posts").innerHTML = txt3;

var txt2 = '<div class="card">'
    txt2 += '<div class="imgbox">'
    txt2 +='<img src="images/008.jpg" alt="008">'
    txt2 += '</div>'
    txt2 += '<div class="contents">'
    txt2 += '<p>것은 없으면, 그들의 것이다. 행복스럽고 청춘의 되려니와, 그들의 인생의 기쁘며, 사랑의 얼마나 이것이다</p>'
    txt2 += '</div>'
    txt2 += '</div>'