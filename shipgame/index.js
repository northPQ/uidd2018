var time;
var w_h;
var w_w;
var pos = [0,0.6668,0,0.8002];
var map_pos;
var map_V=4;
var N_goods=0;
var control=true;
var stone = [[0.55,0,0.73,0]
  ,[0.15,0,0.31,0]
  ,[0.45,0,0.63,0]
  ,[0.65,0,0.89,0]
  ,[0.05,0,0.23,0]
  ,[0.35,0,0.53,0]
  ,[0.65,0,0.89,0]
  ,[0.1,0,0.24,0]
  ,[0.35,0,0.53,0]
  ,[0.75,0,0.93,0]
  ,[0.35,0,0.75,0]];

var goods = [[0.15,0,0.31,0]
  ,[0.75,0,0.87,0]
  ,[0.15,0,0.29,0]
  ,[0.75,0,0.91,0]
  ,[0.15,0,0.31,0]
  ,[0.75,0,0.91,0]
  ,[0.25,0,0.35,0]
  ,[0.15,0,0.29,0]];
   
var goods_name = ["tea","cane","ceramics","fabric","gold","meat","powder","spices"];
function collision(p0,p1,p2,p3,s0,s1,s2,s3){

  if(p0>s0 && p0<s2 
      && p1<s3 && p1>s1){
  clearInterval(time);
  control = false;
   $("#window").css("opacity","1.0");
   $("#window>div,#no,#startwindow").css("opacity","0.0");
   $("#window_2").html("船觸礁了!!!<br><br>按GO可重新開始遊戲");
   $("#window_2").css("opacity","1.0");
  }
  else if(p2>s0 && p2<s2 
      && p1<s3 && p1>s1){
  clearInterval(time);
  control = false;
   $("#window").css("opacity","1.0");
   $("#window>div,#no,#startwindow").css("opacity","0.0");
   $("#window_2").html("船觸礁了!!!<br><br>按GO可重新開始遊戲");
   $("#window_2").css("opacity","1.0");
  }
  else if(p0>s0 && p0<s2 
      && p3<s3 && p3>s1){
  clearInterval(time);
  control = false;
   $("#window").css("opacity","1.0");
   $("#window>div,#no,#startwindow").css("opacity","0.0");
   $("#window_2").html("船觸礁了!!!<br><br>按GO可重新開始遊戲");
   $("#window_2").css("opacity","1.0");
  }
  else if(p2>s0 && p2<s2 
      && p3<s3 && p3>s1){
  clearInterval(time);
  control = false;
   $("#window").css("opacity","1.0");
   $("#window>div,#no,#startwindow").css("opacity","0.0");
   $("#window_2").html("船觸礁了!!!<br><br>按GO可重新開始遊戲");
   $("#window_2").css("opacity","1.0");
  }
}

function get_goods(name,p0,p1,p2,p3,s0,s1,s2,s3){

  if(p0>s0 && p0<s2 
      && p1<s3 && p1>s1){
  $("#" + name).hide();
  $("#shadow_" + name).hide();
  $("#get").css("left",s0*100 + "%");
  $("#get").css("top",s1*100 + "%");
  $("#get").html("get " + name);
  $("#score").html(++N_goods + "/8");
  $("#get").css("opacity","1.0");
  $("#get").animate({opacity:'0.0'},2000);
  }
  else if(p2>s0 && p2<s2 
      && p1<s3 && p1>s1){
  $("#" + name).hide();
  $("#shadow_" + name).hide();
  $("#get").css("left",s0*100 + "%");
  $("#get").css("top",s1*100 + "%");
  $("#get").html("get " + name);
  $("#score").html(++N_goods + "/8");
  $("#get").css("opacity","1.0");
  $("#get").animate({opacity:'0.0'},2000);
  }
  else if(p0>s0 && p0<s2 
      && p3<s3 && p3>s1){
  $("#" + name).hide();
  $("#shadow_" + name).hide();
  $("#get").css("left",s0*100 + "%");
  $("#get").css("top",s1*100 + "%");
  $("#get").html("get " + name);
  $("#score").html(++N_goods + "/8");
  $("#get").css("opacity","1.0");
  $("#get").animate({opacity:'0.0'},2000);
  }
  else if(p2>s0 && p2<s2 
      && p3<s3 && p3>s1){
  $("#" + name).hide();
  $("#shadow_" + name).hide();
  $("#get").css("left",s0*100 + "%");
  $("#get").css("top",s1*100 + "%");
  $("#get").html("get " + name);
  $("#score").html(++N_goods + "/8");
  $("#get").css("opacity","1.0");
  $("#get").animate({opacity:'0.0'},2000);
  }
}

$(document).ready(function(){
 $("#go").mousedown(function(){
  $("#window").animate({opacity:'0.0'},1000);
  $("#score_img").animate({opacity:'1.0'},1000);
  $("#score").animate({opacity:'1.0'},1000);
  $("#tea").animate({opacity:'1.0'},1000);
  $("#shadow_tea").animate({opacity:'1.0'},1000);
  for(let i=0;i<8;i++){
  $("#" + goods_name[i]).show();
  $("#shadow_" + goods_name[i]).show();
  }  
   $("#window_2").css("opacity","0.0");
  N_goods=0;
  map_pos=-10;
  map_V = 4;
  control = true;
  $("#score").html("0/8");
  $("#ship").css("bottom","20%");
  $("#ship").css("left","45%");
  $("#stone_1").css("bottom","80%");
  $("#stone_2").css("bottom","110%");
  $("#stone_3").css("bottom","130%");
  $("#stone_4").css("bottom","200%");
  $("#stone_5").css("bottom","230%");
  $("#stone_6").css("bottom","240%");
  $("#stone_7").css("bottom","270%");
  $("#stone_8").css("bottom","320%");
  $("#stone_9").css("bottom","320%");
  $("#stone_10").css("bottom","340%");
  $("#stone_11").css("bottom","360%");
  $("#tea").css("bottom","80%");
  $("#cane").css("bottom","140%");
  $("#ceramics").css("bottom","180%");
  $("#fabric").css("bottom","250%");
  $("#gold").css("bottom","270%");
  $("#meat").css("bottom","300%");
  $("#powder").css("bottom","340%");
  $("#spices").css("bottom","365%");
  $("#shadow_tea").css("bottom","75%");
  $("#shadow_cane").css("bottom","135%");
  $("#shadow_ceramics").css("bottom","175%");
  $("#shadow_fabric").css("bottom","245%");
  $("#shadow_gold").css("bottom","265%");
  $("#shadow_meat").css("bottom","295%");
  $("#shadow_powder").css("bottom","335%");
  $("#shadow_spices").css("bottom","360%");
  $("#land").css("bottom","511%");
  $("#map").css("bottom","0%");

time=setInterval(game,50);

 function game(){
  
  $("#map,#land,.goods,.shadow,.stone").css("bottom","-=" + map_V + "%");
  w_h=$("#background_img").height();
  w_w=$("#background_img").width();
  
  stone[0][1]=$("#stone_1").position().top/w_h;
  stone[0][3]=stone[0][1]+0.075;
  stone[1][1]=$("#stone_2").position().top/w_h;
  stone[1][3]=stone[1][1]+0.065;
  stone[2][1]=$("#stone_3").position().top/w_h;
  stone[2][3]=stone[2][1]+0.075;
  stone[3][1]=$("#stone_4").position().top/w_h;
  stone[3][3]=stone[3][1]+0.10;
  stone[4][1]=$("#stone_5").position().top/w_h;
  stone[4][3]=stone[4][1]+0.075;
  stone[5][1]=$("#stone_6").position().top/w_h;
  stone[5][3]=stone[5][1]+0.075;
  stone[6][1]=$("#stone_7").position().top/w_h;
  stone[6][3]=stone[6][1]+0.10;
  stone[7][1]=$("#stone_8").position().top/w_h;
  stone[7][3]=stone[7][1]+0.065;
  stone[8][1]=$("#stone_9").position().top/w_h;
  stone[8][3]=stone[8][1]+0.075;
  stone[9][1]=$("#stone_10").position().top/w_h;
  stone[9][3]=stone[9][1]+0.075;
  stone[10][1]=$("#stone_11").position().top/w_h;
  stone[10][3]=stone[10][1]+0.17;

  goods[0][1]=$("#tea").position().top/w_h;
  goods[0][3]=goods[0][1]+0.085;
  goods[1][1]=$("#cane").position().top/w_h;
  goods[1][3]=goods[1][1]+0.085;
  goods[2][1]=$("#ceramics").position().top/w_h;
  goods[2][3]=goods[2][1]+0.085;
  goods[3][1]=$("#fabric").position().top/w_h;
  goods[3][3]=goods[3][1]+0.085;
  goods[4][1]=$("#gold").position().top/w_h;
  goods[4][3]=goods[4][1]+0.085;
  goods[5][1]=$("#meat").position().top/w_h;
  goods[5][3]=goods[5][1]+0.085;
  goods[6][1]=$("#powder").position().top/w_h;
  goods[6][3]=goods[6][1]+0.085;
  goods[7][1]=$("#spices").position().top/w_h;
  goods[7][3]=goods[7][1]+0.085;
  
  pos[0]=$("#ship").position().left/w_w;
  pos[2]=pos[0]+0.084;

  if(pos[0]<0){
   $("#ship").css("left","1%"); 
  }
  else if(pos[0]>0.9){
   $("#ship").css("left","89%"); 
  }

  for(let i=0;i<11;i++){
   collision(pos[0],pos[1],pos[2],pos[3],stone[i][0],stone[i][1],stone[i][2],stone[i][3]);
  }
  for(let i=0;i<8;i++){
   get_goods(goods_name[i],pos[0],pos[1],pos[2],pos[3],goods[i][0],goods[i][1],goods[i][2],goods[i][3]);
  }
  map_pos=$("#map").position().top/w_h;

  if(map_pos>=(-0.5)){
    control = false;
   if(pos[0]<0.43){
   $("#ship").css("left","+=3%"); 
   }
   else if(pos[0]>0.47){
   $("#ship").css("left","-=3%"); 
   }
   else if($("#ship").position().top/w_h > 0.05){
   $("#ship").css("bottom","+=3%"); 
   }
   else{ 
   $("#window").css("opacity","1.0");
   $("#window>div,#no,#startwindow").css("opacity","0.0");
   $("#window_2").html("船運已安全抵達安平，恭喜成功運送"+N_goods+"/8樣貨物<br><br>按GO可重新開始遊戲");
   $("#window_2").css("opacity","1.0");
   clearInterval(time);
   }
  }
  if(map_pos>=(-0.006)){
   map_V = 0;   
  }
 }
 });

 $("body").keydown(function(key){  
 if(key.which==37 && control){
  $("#ship").css("left","-=3%");
 }
 if(key.which==39 && control){
  $("#ship").css("left","+=3%");
 }
 });


});
