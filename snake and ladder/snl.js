var pos = [0,0];

function roll(user){
  out = document.getElementById("output");
  rolldie = Math.floor(Math.random()*6) + 1;
  pos[user-1] += rolldie;

  switch(pos[user-1]){
    case 15:
    pos[user-1] = 5;
    alert("snake, go to position 5");
    break;

    case 23:
    pos[user-1] = 16;
    alert("snake, go to position 16");
    break;

    case 8:
    pos[user-1] = 15;
    alert("ladder, go to position 15");
    break;

    case 19:
    pos[user-1] = 24;
    alert("ladder, go to position 24");
    break;

    default:
    alert("player "+ user+" got "+ rolldie +" move");
    break;
  }

  if(pos[user-1] > 25){
    out.textContent += "player "+user+" won";
    inps = document.getElementById("btn1");
    inps.disabled = true;
    inps = document.getElementById("btn2");
    inps.disabled = true;
  }
  else
  out.textContent += "player "+user+" rolls die= "+ rolldie +"      player "+user+" current position= "+ pos[user-1] + "\n";

}
