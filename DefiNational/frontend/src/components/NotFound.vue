<template>
  <div class="hello">

    <!-- connect -->
    <div id="connect" class="container-fluid padding">
      <div class="row text-center padding">
        <div class="col-12">
          <h2>Play the PIANO by using the social media</h2>
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
