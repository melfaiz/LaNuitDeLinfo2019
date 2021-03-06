function distance(a, b) {
  return Math.abs(a - b);
}

function bounce() {
  if (bird.y + bird.vy > H / 2 + 5) {
    bird.vy = -bird.vy;
  } else {
    bird.vy += 0.25;
  }
  bird.y += bird.vy;
}

function hitspikes() {
  for (var i = 0; i < spikesmatrix[0].length; i++) {
    var y = spikesmatrix[0][i];
    if (
      (bird.x < spr - 5) &
      (bird.y > y - spikex - bird.h / 2) &
      (bird.y < y) &
      (bird.vx < 0)
    ) {
      lost();
    }
  }
  for (var i = 0; i < spikesmatrix[1].length; i++) {
    var y = spikesmatrix[1][i];
    if (
      (bird.x + bird.l > W - spr + 5) &
      (bird.y > y - spikex - bird.h / 2) &
      (bird.y < y) &
      (bird.vx > 0)
    ) {
      lost();
    }
  }
}

function drawspikes(M) {
  this.M = M;
  for (var i = 0; i < M[0].length; i++) {
    var m = i;
    var n = i;
    n = new rightspike(M[1][i]);
    m = new leftspike(M[0][i]);
    m.draw();
    n.draw();
  }
}

function leftspike(y) {
  this.y = y;
  this.draw = function() {
    var x = spikex;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(0, y - spikex);
    ctx.lineTo(0, y + spikex);
    ctx.closePath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#7d7d7d";
    ctx.stroke();
    ctx.fillStyle = "#7d7d7d";
    ctx.fill();
  };
}

function rightspike(y) {
  this.y = y;
  this.draw = function() {
    var x = spikex;
    ctx.beginPath();
    ctx.moveTo(W - spikex, y);
    ctx.lineTo(W, y - spikex);
    ctx.lineTo(W, y + spikex);
    ctx.closePath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#7d7d7d";
    ctx.stroke();
    ctx.fillStyle = "#7d7d7d";
    ctx.fill();
  };
}

function preloadImages(array) {
  if (!preloadImages.list) {
    preloadImages.list = [];
  }
  var list = preloadImages.list;
  for (var i = 0; i < array.length; i++) {
    var img = new Image();
    img.onload = function() {
      var index = list.indexOf(this);
      if (index !== -1) {
        list.splice(index, 1);
      }
    };
    list.push(img);
    img.src = array[i];
  }
}

function mousedown() {
  jump();
  spin.play();
  gameon = true;
}

function jump() {
  bird.vy -= 8;

  if (bird.vx > 0) {
    img.src = faces[1];
  } else {
    img.src = faces[3];
  }
}

function scoreball() {
  ctx.beginPath();
  ctx.arc(W / 2, H / 2, 80, 0, Math.PI * 2);
  ctx.fillStyle = "#fffffa";
  ctx.fill();
  ctx.closePath();
  ctx.font = "100px Courier New";
  ctx.textAlign = "center";
  ctx.fillStyle = "#eee";
  if (score < 10) {
    ctx.fillText("0" + score, W / 2, H / 2 + 25);
  } else {
    ctx.fillText(score, W / 2, H / 2 + 25);
  }
}

function menu() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "30px Arial";
  ctx.textAlign = "center";

  ctx.fillStyle = "#7d7d7d ";
  ctx.fillText("404 PAGE NOT FOUND ", W / 2, 70);
  ctx.fillText("START A GAME INSTEAD", W / 2, 110);

  ctx.font = "20px Arial";
  ctx.fillStyle = "#ff0e67";
  ctx.fillText("PRESS ESPACE", W / 2, 180);
  ctx.fillText("TO JUMP", W / 2, 200);

  ctx.beginPath();
  ctx.arc(W / 2, H / 2, 80, 0, Math.PI * 2);
  ctx.fillStyle = "#fffffa";
  ctx.fill();
  ctx.closePath();
  ctx.font = "100px Courier New";
  ctx.textAlign = "center";
  ctx.fillStyle = "#eee";

  ctx.font = "20px Arial";
  ctx.fillStyle = "#7d7d7d";
  ctx.fillText("VOTRE MEILLEUR SCORE : " + max, W / 2, H - 50);
  bird.draw();
  bottomspikes();
  drawspikes(spikesmatrix);
}
function animate() {
  if (gameon) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    scoreball();
    bird.draw();
    bottomspikes();
    drawspikes(spikesmatrix);
    hitspikes();

    bird.move();
    edges();
    gravity();
  } else {
    bounce();
    menu();
  }
  requestAnimationFrame(animate);
}

function showScores(){
  disableListners()
  var res;
  firebase.database().ref("users/").once("value", function(snapchot){
    var rr = snapchot.val();
    
    res = Object.keys(rr).sort(function(a, b){
      return rr[b].score - rr[a].score;
    });
    (async () => {
      const {value: formValues} = await Swal.fire({
       title: 'Game over!',
       html:
         '<h4 type="number">Score: '+ scoreToSend +' </h4>' +
         '<h4 type="number">Best score: '+ max +' </h4>' +
         '<h2> Score board: </h2>' +
         '<h4> 1st => '+ rr[res[0]].username +'.  score : '+ rr[res[0]].score +' </h4>' +
         '<h4> 2nd => '+ rr[res[1]].username +'.  score : '+ rr[res[1]].score +' </h4>' +
         '<h4> 3rd => '+ rr[res[2]].username +'.  score : '+ rr[res[2]].score +' </h4>'+
         '<button class="share button" type="button" onclick="showLoginMenu()"> share your score </button>',
       focusConfirm: false,
       showConfirmButton: false,
       showCancelButton: false,
        
     });
     })();

  });
}

function showLoginMenu(){
  (async () => {
    
    const {value: formValues} = await Swal.fire({
     title: 'Log in',
     html:
       '<input id="login-input-email" class="swal2-input" type="email" placeholder="Enter your email">' +
       '<input id="login-input-password" class="swal2-input" type="password" placeholder="Entrez votre mot de passe">'+
       '<button class="login button" type="button" onclick="signIn()"> LogIn </button>'+
       '<button class="login button" type="button"  onclick="showSingUpMenu()"> Sign Up </button>',
     focusConfirm: false,
     showConfirmButton: false,
     showCancelButton: false,

     
   });
  })();
}
/*
function showSingInUP(){
  (async () => {
    const a = await Swal.fire({
      title: "Welcome!",
      html:
        '<button class="login button" type="button" onclick="showLoginMenu()"> Log In </button>' +
        '<button class="signin button" type="button" onclick="showSingUpMenu()"> Sign Up </button>',
      focusConfirm: false,
      showConfirmButton: false,
      showCancelButton: false
    });
  })();
}*/


function showSingUpMenu(){
  (async () => {
    const { value: formValues } = await Swal.fire({
      title: "Sign Up",
      html:
        '<input id="signup-input-pseudo" class="swal2-input" type="text" placeholder="Enter your username">' +
        '<input id="signup-input-email" class="swal2-input" type="email" placeholder="Enter your email">' +
        '<input id="signup-input-password" class="swal2-input" type="password" placeholder="Enter your password">' +
        '<button class="signin button" type="button" onclick="signUp()"> Sign Up </button>',
      focusConfirm: false,
      showConfirmButton: false,
      showCancelButton: false
      
    });
  })();
}


function lost() {
  disableListners();
  lostf();

  showScores();

  gameon = false;
  scoremax();
  scoreToSend  = score;
  score = 0;
  bird.x = W / 2 - 50;
  bird.y = H / 2 - 10;
  bird.vx = 3.5;
  bird.vy = 5;
  img.src = "img/bird1.png";
  spikesmatrix = [generate(1), generate(1)];
  var __tempmenu = menu;

  menu = function() {
    __tempmenu();
    ctx.font = "20px Arial";
    ctx.fillStyle = "#ff0e67";
    ctx.fillText("REJOUER", W / 2, 420);
  };
}

function edges() {
  // bottom
  if (bird.y > H - bird.h - spikex) {
    bird.y = H - bird.h - spikex;
    bird.vy = 0;
    bird.jumping = false;
    lost();
  } else if (bird.y + bird.vy <= spikex) {
    // top
    bird.y = spikex;
    bird.vy = 0;
    lost();
  }
  // left
  if (bird.x + bird.vx < 0) {
    hit.play();
    spikesmatrix[1] = generate(1 + Math.floor(score / 5));
    score += 1;
    bird.vx = -bird.vx;
    img.src = faces[0];
  } else if (bird.x + bird.vx > W - bird.l) {
    // right

    hit.play();
    spikesmatrix[0] = generate(1 + Math.floor(score / 5));
    score += 1;
    bird.vx = -bird.vx;
    img.src = faces[2];
  }
}

function gravity() {
  bird.vy *= 0.96;
  bird.vy += 0.25;
}

function bottomspikes() {
  for (var i = 0; i <= (W / 20) * 40; i = i + 20) {
    ctx.beginPath();
    ctx.moveTo(i - 20, H);
    ctx.lineTo(i, H - 20);
    ctx.lineTo(i + 20, H);
    ctx.moveTo(i - 20, 0);
    ctx.lineTo(i, 20);
    ctx.lineTo(i + 20, 0);
    ctx.closePath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#7d7d7d";
    ctx.stroke();
    ctx.fillStyle = "#7d7d7d";
    ctx.fill();
  }
}

function scoremax() {
  if (score > max) {
    max = score;
    localStorage.maxScore = max;
  }
}
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function() {
    this.sound.play();
  };
  this.stop = function() {
    this.sound.pause();
  };
}

function generate(lvl) {
  var M = [];
  var r = random(50, H - 50, H / 2, 0);
  M.push(r);

  while (M.length < lvl) {
    var overl = false;
    var r = random(50, H - 50, H / 2, 0);
    for (var j = 0; j < M.length; j++) {
      var v = M[j];

      if (distance(r, v) <= 50) {
        overl = true;
      }
    }
    if (!overl) {
      M.push(r);
    }
  }
  return M;
}

function random(a, b, p, d) {
  var r = a + Math.random() * (b - a);
  while (distance(r, p) <= d) {
    r = a + Math.random() * (b - a);
  }
  return r;
}
