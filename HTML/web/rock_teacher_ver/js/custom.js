let ct = 0, vt = 0, lt = 0, vper = 0;
let mrps = ['scissors', 'rock', 'paper'];
function rps(e) {
   let str;
   let d = Math.ceil(Math.random()*3);
   let mimg = mrps[e-1]+".png";
   let dimg = mrps[d-1]+".png";
   switch(e) {
       case 1:
          if(d == 1) {
             str = "비겼습니다.";
          }else if(d == 2) {
             str = "졌네요. 안됐습니다. 쯧!!"
             ct++;
             lt++;
          }else{
            str = "축하합니다. 이겼습니다.";
            ct++;
            vt++;
          }
          
       break;
       case 2:
         if(d == 2) {
            str = "비겼습니다.";
         }else if(d == 1) {
            str = "졌네요. 안됐습니다. 쯧!!"
            ct++;
            lt++;
         }else{
           str = "축하합니다. 이겼습니다.";
           ct++;
           vt++;
         }
       break;
       case 3:
         if(d == 3) {
            str = "비겼습니다.";
         }else if(d == 2) {
            str = "졌네요. 안됐습니다. 쯧!!"
            ct++;
            lt++;
         }else{
           str = "축하합니다. 이겼습니다.";
           ct++;
           vt++;
         }
       break;
   }
    if(ct != 0) {
       vper = (vt / ct) * 100;
       vper = vper.toFixed(2);
    }
    console.log(ct);
    console.log("승" + vt);
    console.log("패" + lt);
    console.log("승률" + vper);

    document.getElementById("tk").innerHTML = str;
    document.getElementById("mimg").src="images/"+mimg;
    document.getElementById("dimg").src="images/"+dimg;

    document.getElementById("ct").innerHTML = ct + "회";
    document.getElementById("vt").innerHTML = vt + "회";
    document.getElementById("lt").innerHTML = lt + "회";
    document.getElementById("vper").innerHTML = "승률 : " + vper + "%";

    if(vt + lt == 5) {
       if(vt > lt) {
           document.getElementById("tk").innerHTML = "최종결과: 승리!!";
       }else{
           document.getElementById("tk").innerHTML = "최종결과: 패배!!";
       }
      document.getElementById("r").disabled = true;  
      document.getElementById("s").disabled = true; 
      document.getElementById("p").disabled = true; 
      document.getElementById("reload").innerHTML = "<button class='reload' onclick='reload()'>다시도전</button>";
    }
}

function reload(){
   ct = 0, vt = 0, lt = 0, vper = 0;
   document.getElementById("ct").innerHTML = "";
   document.getElementById("vt").innerHTML = "";
   document.getElementById("lt").innerHTML = "";
   document.getElementById("vper").innerHTML = "";
   document.getElementById("tk").innerHTML = "";
   document.getElementById("r").disabled = false;  
   document.getElementById("s").disabled = false; 
   document.getElementById("p").disabled = false; 
}