<template>
  <div id="app"><VueFaqAccordion :items="myItems" />
  <div class="countdown">
            <circular-count-down-timer :initial-value="160" 
            style="margin-left: 37%" 
            size="100" 
            :show-hour="false"
            @finish="finished"></circular-count-down-timer>
    </div>
   <b>
      <p>Notre chat-bot est un Know-it-all. Demandez lui ce que vous voulez.</p>
   </b>
   <div class="col-md-12" style="margin-left:40%">
   <b-form-input v-model="text" placeholder="Le binaire c'est bien, le décimal c'est mieux" style="width:200px;" align="center">
   </b-form-input>
   </div>
    <div v-if="text == 19">
            Cliquez 
    <a href="#/Level8">
            ici
    </a>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      text:"",
    }
  },
  finished: () => {
        this.router.push("#");
    }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: center;
}
</style>
