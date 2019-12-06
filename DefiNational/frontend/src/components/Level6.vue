<template>
  <div class="hello">
        <circular-count-down-timer :initial-value="180" size="150" :show-hour="false"></circular-count-down-timer>
    <!-- image slider -->
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide>
          <template v-slot:img>
            <img src="../assets/help.jpg" />
            <div id="caption" class="carousel-caption">
              <h1 class="display-2">HereToHelp</h1>
              <h3 id="head-c">Plus jamais du temps à perdre</h3>
              <button type="button" class="btn btn-outline-dark btn-lg btn-light">Se connecter</button>
              <button type="button" class="btn btn-primary btn-lg">S'inscrire</button>
            </div>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <!-- Jumbotron -->
    <div class="container-fluid">
      <div id="jumb" class="row jumbotron">
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
          <p class="lead">
            HereToHelp organise votre vie de zero à
            <router-link to="/Level1">un.</router-link>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
          <a href="#">
            <button id="reg" type="button" class="btn btn-outline-secondary btn-lg">rejoignez nous</button>
          </a>
        </div>
      </div>
    </div>

    <!-- Welcome Section -->
    <div class="container-fluid padding">
      <div class="row welcome text-center">
        <div class="col-12">
          <h1 class="display-4">
            Do you know Frère Jacques?
            <a>♫</a>
          </h1>
          <h3>remember birds can sing</h3>
        </div>
        <hr />
        <div class="col-12">
          <p class="lead">Look where you can play me !</p>
        </div>
      </div>
    </div>

    <!-- Three Column Section -->
    <div class="container-fluid padding balls">
      <div class="row text-center padding" id="types">
        <div class="col-sm-12 col-md-6">
          <router-link to="/Sante">
            <img src="../assets/health.png" style="width:80px;height:70px;" />
            <h3 id="foot">
              <span>Santé</span>
            </h3>
          </router-link>
          <p>Votre santé est notre priorité.</p>
        </div>
        <div class="col-sm-12 col-md-6">
          <router-link to="/Logement">
            <img src="../assets/house.png" style="width:70px;height:70px;" />
            <h3 id="foot">
              <span>Logement</span>
            </h3>
          </router-link>
          <p>Besoin d'aide pour touver un logement ou pour recevoir les aides ?</p>
        </div>
        <div class="col-sm-12 col-md-6">
          <router-link to="/Etudes">
            <img src="../assets/book.png" style="width:70px;height:70px;" />
            <h3 id="foot">
              <span>Études</span>
            </h3>
          </router-link>
          <p>On vous accompagne le long de votre parcours.</p>
        </div>
        <div class="col-sm-12 col-md-6">
          <router-link to="/FAQ">
            <img src="../assets/question.png" style="width:70px;height:70px;" />
            <h3 id="foot">
              <span>Autres démarches</span>
            </h3>
          </router-link>
          <p>Notre FAQ est riche d'informations.</p>
        </div>
      </div>
      <hr class="my-4" />
    </div>

    <!-- connect -->
    <div id="connect" class="container-fluid padding">
      <div class="row text-center padding">
        <div class="col-12">
          <h2>Connect</h2>
        </div>
        <div class="col-12 social padding">
          <a
            @click.prevent="playSound(require('../sounds/do.mp3'))"
            v-on:click="song=song+'do';note++;"
          >
            <img src="../assets/fb.png" style="width:50px;height:50px;" />
          </a>
          <a
            @click.prevent="playSound(require('../sounds/re.mp3'))"
            v-on:click="song=song+'re';note++;"
          >
            <img src="../assets/twitter.png" style="width:50px;height:50px;" />
          </a>
          <a
            @click.prevent="playSound(require('../sounds/mi.mp3'))"
            v-on:click="song=song+'mi';note++;"
          >
            <img src="../assets/instagram.png" style="width:50px;height:50px;" />
          </a>
          <a
            @click.prevent="playSound(require('../sounds/fa.mp3'))"
            v-on:click="song=song+'fa';note++;"
          >
            <img src="../assets/google.png" style="width:50px;height:50px;" />
          </a>
          <a
            @click.prevent="playSound(require('../sounds/sol.mp3'))"
            v-on:click="song=song+'sol';note++;"
          >
            <img src="../assets/youtube.png" style="width:50px;height:50px;" />
          </a>
          <a
            v-if="song == 'doremidodoremidomifasolmifasol'"
            class="btn btn-outline-dark btn-lg btn-light"
            href="#/level7"
          >On passe le niveau</a>
          <a
            v-if="note>0"
            class="btn btn-outline-dark btn-lg btn-light"
            v-on:click="note=0; song=''"
          >Reset</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      song: "",
      note: 0
    };
  },
  methods: {
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */

#head-c {
  margin-top: 0px;
  margin-bottom: 10px;
}
#reg {
  margin-right: 10px;
}
#foot {
  margin-top: 15px;
}
#jumb {
  padding: 20px 10px 20px 10px;
}
#connect {
  padding-bottom: 40px;
}
#types {
  margin-left: 70px;
  margin-right: 70px;
}

.balls {
  padding-top: 50px;
}
.display-2 {
  margin-bottom: 0px;
}

.lead {
  padding: 12px 0px 0px 0px;
}

.social {
  padding-top: 30px;
}

.social a {
  margin-right: 40px;
}
.carousel-inner img {
  width: 100%;
  height: 100%;
}

.carousel-caption {
  position: absolute;
  top: 50%;
  transform: translateY(-30%);
}
.carousel-caption h1 {
  font-size: 500%;
  text-shadow: 1px 1px 7px #1e013d;
}
.carousel-caption h2 {
  font-size: 200%;
  font-weight: 500;
  text-shadow: 1px 1px 1px 7px #1e013d;
}

.container-fluid a {
  color: #000;
}
.container-fluid a:hover {
  color: #3c007a;
  text-decoration: none;
}
.btn-primary {
  background-color: #3c007a;
  border: 1px solid black;
}
.btn-primary:hover {
  background-color: #180031;
  border: 1px solid grey;
}

.btn-secondary {
  border: 1px solid #3c007a;
}
</style>
