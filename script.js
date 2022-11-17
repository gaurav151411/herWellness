const facts=new Array();
facts[0]="./randomImg/img1.jpeg";
facts[1]="./randomImg/img2.jpeg";
facts[2]="./randomImg/img3.jpeg";
facts[3]="./randomImg/img4.webp";
facts[4]="./randomImg/img5.png";
facts[5]="./randomImg/img6.png";
facts[6]="./randomImg/img7.webp";
facts[7]="./randomImg/img8.jpeg";
facts[8]="./randomImg/img9.jpeg";
facts[9]="./randomImg/img10.jpeg";
facts[10]="./randomImg/imgmain.jpeg";


function generator(){
   let mainImg=document.getElementById("mainImg");
   let btn=document.getElementById("factbtn");
   btn.style.display="none";
   mainImg.style.display="none";
   let ptr=Math.floor(Math.random()*facts.length);
   return document.getElementById("facts").innerHTML='<img src="'+ facts[ptr] + '" />';
}

