var realtime = new Ably.Realtime("NPygUg.5gwMqA:QEveW7W7gChv7Bhz");
var sendChannel1 = realtime.channels.get("vote-channel1");
var sendChannel2 = realtime.channels.get("vote-channel2");


var score;
var score2;
function yesClicked1(){
  vote(1);
}
function noClicked1(){
  vote(-1)
}
function maybeClicked1(){
  vote(0);
}
function vote(score){
  //VOTOS 1
  sendChannel1.publish("update", { "vote": score}, errCallback)
	document.getElementById('yesbtn1').setAttribute("disabled", "true")
	document.getElementById('nobtn1').setAttribute("disabled", "true")
	document.getElementById('maybebtn1').setAttribute("disabled", "true")
  document.getElementById('yesbtn1').style.cssText = 'background-color: grey;';
  document.getElementById('nobtn1').style.cssText = 'background-color: grey;';
  document.getElementById('maybebtn1').style.cssText = 'background-color: grey;';


}
function errCallback(err){
  window.alert(err.message);
}

//VOTOS 2
function yesClicked2(){
  vote(1);
}
function noClicked2(){
  vote(-1)
}
function maybeClicked2(){
  vote(0);
}
function vote2(score2){

  sendChannel2.publish("update", { "vote2": score2}, errCallback)
  document.getElementById('yesbtn2').setAttribute("disabled", "true")
  document.getElementById('nobtn2').setAttribute("disabled", "true")
  document.getElementById('maybebtn2').setAttribute("disabled", "true")
  document.getElementById('yesbtn2').style.cssText = 'background-color: grey;';
  document.getElementById('nobtn2').style.cssText = 'background-color: grey;';
  document.getElementById('maybebtn2').style.cssText = 'background-color: grey;';

}
function errCallback(err){
  window.alert(err.message);
}
