var seconds = Number(document.getElementById("hours"))
var minuts = Number(document.getElementById("minus"))
var hour = Number(document.getElementById("hours"))
var start=true
var utga= []
var u = -1
var uu = 0
console.log(seconds)
function playy(){
  seconds++
  document.getElementById("secunds").innerHTML=seconds
  if(seconds<10){
      document.getElementById("secunds").innerHTML="0"+seconds
  }
  if( seconds == 99 ){
      seconds= seconds-99
      minuts = minuts +1
      document.getElementById("minus").innerHTML=minuts
  }
  if(minuts<10){
    document.getElementById("minus").innerHTML="0"+minuts
}
  if( minuts == 59 ){
    minuts= minuts-59
    hour = hour +1
    document.getElementById("hours").innerHTML=hour
}
if(hour<10){
document.getElementById("hours").innerHTML="0"+hour
}
  
}

function play(){
    if(start === true){
        my = setInterval(playy,10)
    }else{
        clearInterval(my)
    }
    start = !start
}

function lap(){
   
    utga.push(hour + ":" + minuts + ":"+seconds)
    u++
    uu++
    var para = document.createElement("p")
    var node = document.createTextNode(document.getElementById("lapId").in= uu+ ". "+utga[u])

    para.appendChild(node)
    var element = document.getElementById("div1")
    element.appendChild(para)
    
}
// function reset(){
    
//     hour < 10 ? document.getElementById("hours").innerHTML=hour = "0" + (hour - hour) : ;
    
//     minuts < 10 ? document.getElementById("secunds").innerHTML= minuts ="0"+ (minuts - minuts) : ;
    
//     seconds < 10 ? document.getElementById("minus").innerHTML= seconds ="0"+ (seconds -seconds) : 

// }