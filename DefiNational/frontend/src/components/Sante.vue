<template>
  <div class="hello">

    <!-- Three Column Section -->
    <div class="container-fluid padding balls">
      <div id="jumb" class="row jumbotron">
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
          <p>Votre santé est notre priorité.</p>
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
          <a href="#">
            <img src="../assets/fb.png" style="width:50px;height:50px;" />
          </a>
          <a href="#">
            <img src="../assets/twitter.png" style="width:50px;height:50px;" />
          </a>
          <a href="#">
            <img src="../assets/instagram.png" style="width:50px;height:50px;" />
          </a>
          <a href="#">
            <img src="../assets/google.png" style="width:50px;height:50px;" />
          </a>
          <a href="#">
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
      sliding: null
    };
  }
  // methods: {
  //   onSlideStart(slide) {
  //     this.sliding = true;
  //   },
  //   onSlideEnd(slide) {
  //     this.sliding = false;
  //   }
  // }
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
