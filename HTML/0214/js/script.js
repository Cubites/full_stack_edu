// JS에서 HTML 사용법 연습
var str1, str2, str3;

str1 = '<div class=\"box2\">';
str2 = '<div class=\"flower\"> 튤립 </div>';
str3 = '</div>';
document.write(str1 + str2 + str3);

var str;
str = "<div class=\"box2\"><div class=\"flower\"> 튤립 </div></div>"
document.write(str);

// 산술 연산자 연습
var num1, num2;
num1 = 10;
num2 = 3;

num1 += num2;
document.write(num1, "<br>");

num1 -= num2;
document.write(num1, "<br>");

num1 *= num2;
document.write(num1, "<br>");

num1 %= num2;
document.write(num1);

//JS에서 HTML 사용법 연습 2
var t1 = '<table border="1" width="100">';
t1 += "<tr>";
t1 += "<td>1</td>";
t1 += "<td>2</td>";
t1 += "<td>3</td>";
t1 += "</tr>";
t1 += "</table>";

document.write(t1);