setInterval(clock1, 1000);

function clock1() {
    var weeks = new Array("Sun","Mon","Thu","Wed","Thr","Fri","Sat");
    var ar_Hourtxt = new Array ('れい', 'いち', 'に','さん','よ','ご','ろく','しち','はち','く','じゅう','じゅういち');
    var now = new Date();
	var y = now.getFullYear();
	var mo = now.getMonth() + 1;
	var d = now.getDate();
	var w = weeks[now.getDay()];
	var Hour = now.getHours();
	var Min = now.getMinutes();
    const time_zone =[5,9,17,19];

    var time_image_ch = document.getElementById("time_image");
    //画像設定
    if (time_zone[0]<Hour && Hour <time_zone[1]) {//朝
       time_image_ch.src="./img/morning.png";
    } else if(time_zone[1]<Hour && Hour <time_zone[2]){//昼
        time_image_ch.src="./img/noon.png";
    }else if(time_zone[2]<Hour && Hour <time_zone[3]){//夕
        time_image_ch.src="./img/evening.png";
    }else {//夜
        time_image_ch.src="./img/night.png";
    } 
     //Hour調整
     if(12 <= Hour) {
        Hour = Hour-12;
     }else if (Hour = 24) {
         Hour=0;
     }
     var fuzzy = ar_Hourtxt[Number(Hour)]+"じ";
     //var fuzzy = fuzzy + ar_Hourtxt[Number(Hour)]+"じ";
     //Min調整
    if (Min < 2) {//00
        fuzzy = fuzzy + "ちょうど";
    }else if (2 <= Min && Min < 11) {//02-10
        fuzzy = fuzzy + "すぎ";
    }else if (11 <= Min && Min < 16) {//10-15
        fuzzy = fuzzy + "10ふんくらい";
    }else if (16 <= Min && Min < 21) {//15-20
        fuzzy = fuzzy + "15ふんくらい";
    }else if (21 <= Min && Min < 26) {//20-25
        fuzzy = fuzzy + "20ふんくらい";
    }else if (26 <= Min && Min < 31) {//25-30
        fuzzy = "そろそろ" + ar_Hourtxt[Number(Hour)]+"じはん";
    }else if (31 <= Min && Min < 36){//30-35
        fuzzy = fuzzy + "じはんすぎ"; 
    }else if (36 <= Min && Min < 41) {//35-40
        fuzzy = fuzzy + "35ふんくらい";
    }else if (41 <= Min && Min < 46) {//40-45
        fuzzy = fuzzy + "40ふんくらい";
    }else if (46 <= Min && Min < 51){//45-50
        fuzzy = fuzzy + "45ふんくらい"; 
    }else if (51 <= Min && Min < 56){//50-55
        if(Hour < 12){
        fuzzy = "そろそろ" + ar_Hourtxt[Number(Hour)+1] + "じ"; 
        }else{
            fuzzy = "そろそろ" + ar_Hourtxt[0] + "じ";     
        }
    }else if (56 <= Min && Min < 60){//55-60
        if(Hour < 12){
        fuzzy = ar_Hourtxt[Number(Hour)+1] + "じまえ"; 
        }else{
            fuzzy = ar_Hourtxt[0] + "じまえ";     
        } 
    }
    document.getElementById("timer01").innerHTML = fuzzy;
    document.getElementById("a_timer").style.fontSize =  window.innerWidth / 10 + "px";

}
