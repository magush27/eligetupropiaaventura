/*Funcion que define al juego*/

function gamestart() {
  
  var q1 = prompt("In front of you, you see a small dungeon. But unlike many other ones, this one seems untouched. In hopes of finding some treasure, you eagerly bound in. However, as soon as you enter, the stone door quickly closes with a big thud. Gulping, you look around. There is a pathway leading right and left. Which way do you choose? (right or left?)");
  if (q1.toLowerCase() === "middle") {
    alert("Despite there being no doorway through the middle, you make a complete fool of yourself by walking forward and bumping your head on the wall. You rub your head and start to question your sanity, until the doors behind you open again. You realize your head pushed a very discreet button on the wall. With the lust gone for hunting treasure, you head back home, bewildered and confused. Secret ending Unlocked!");
  } //end of q1 else

  if (q1.toLowerCase() === "left") {
    var q8 = prompt("You walk left. You meet a few turns and suddenly see a bright flash of light in front of you. You quickly realize its an exit. Your joy does not last long, however. You hear footsteps behind you and realize it is a huge and ugly troll. He scowls at you and pulls a lever next to his arm. You hear a grinding noise and are horrified to see that the door infront of you is starting to close. The troll starts to run at you with his club raised. You can either sprint there as fast as possible (sprint) or run quickly but cautiously to make sure you dont bump into anything and get caught by the troll. (run)");
    if (q8.toLowerCase() === "run")
      alert("Even though you are desperate to run as fast as possible, you remember that your mentor said that you should always be cautious, no matter what the situation. So you run at a moderate pace just barely faster than the troll. You notice there is a platform that was sticking out a little in your way and just manage to avoid it. The troll, however, was so busy trying to catch you that he doesn't even notice it and trods his giant foot on it. You hear familiar whoosing of arrows behind you, and hear the troll cry out in pain, and then loud thud. You keep your eyes on the door. You know you wont make it if you keep on running at the pace you are at now, so you grit your teeth sprint as fast as possible. You just barely managed to duck under the door as it slams shut behind you. You are panting and sweating, but also have a broad grin on your face when you realize that you survived. ");
    if (q8.toLowerCase() === "sprint")
      alert("Trolls are not known for their speed in running, so you smile as you know you are going to make it with plenty of time to spare with the troll far behind you. However, combined with your fast running and confidence, you fail to notice a single platform that happened to be sticking out a little. You step on it, and a volley of arrows are flung at you from your sides. None of the arrows that hit you pierced any vital organs, but it hurt immensely nonetheless. You fall to the ground in pain and try to stand up, but the troll slams your head with his club beofre you can fight back. You are dead. Watch Your Step Ending Unlocked");
  } //end of q8 if

  if (q1.toLowerCase() === "right") {
    var q2 = prompt("You walk right and cautiously walk along the path. After a few turns and straight paths, you are met by the most horrifying sight youve ever seen. A orc that is about twice yout size blocks your way. He grunts loudly and swings his battle-axe towards you. You can block and then counter-attack, (block and attack) or you can swing your sword as fast and as aggressively as possible towards the orc. (attack aggressively)");
    if (q2.toLowerCase() === "attack aggressively")
      alert("You swing your sword as fast as possible towards the orc. You manage to cut him a few times, but his battle-axe swings downwards towards your head before you can swing your sword again. Blind Fury Ending Unlocked!");
    if (q2.toLowerCase() === "block and attack")
      var q3 = prompt("The orc does not expect your move and staggers backwards as his heavy battle-axe deflects off your shield. You seize the chance and quickly stab your sword at heart. He makes a loud moan before he crumples to the floor, dead. You bound with joy as you walk towards the end of the corridor. You see two doors standing side by side. One of them says 'liberatem' and the other says 'mortem'. Which door to you go through? (liberatem or mortem)");
    if (q3.toLowerCase() === "mortem")
      alert("you open the door, and see a room inside. You were about to walk inside, but unfortunately, you didn't notice the little wire mechanism between the door and the stone which you are standing on. The string tugged a loose bit of stone away and before you can even think about stepping out of the way, the ground under you gives way as you fall through a endless pit. You are dead. Never Ending Ending Unlocked!");
    if (q3.toLowerCase() === "liberatem")
      alert("You open the door and are greeted by the warm sunlight and the soothing sounds of birds chirping. You breath a sigh of relief and walk back to your home. Freedom Ending Unlocked!");
  } //end of q3 if
}

function credits() {
  alert ("Made in 6 hours by Kieran Hopfner. Inspiration from Dungeons & Dragons and choose your own adventure books.")
}

function var_q2() {
  alert("You walk right and cautiously walk along the path. After a few turns and straight paths, you are met by the most horrifying sight youve ever seen. A orc that is about twice yout size blocks your way. He grunts loudly and swings his battle-axe towards you. You can block and then counter-attack, (block and attack) or you can swing your sword as fast and as aggressively as possible towards the orc. (attack aggressively)")
  qNum = qNum + 1;
  nextQuestion();
}
