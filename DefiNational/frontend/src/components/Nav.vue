<template>
    <!-- Navigation barre -->
    <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <router-link to="/">
          <img
            alt="heretohelp-logo"
            src="../assets/heretohelp.jpg"
            style="width:80px;height:80px;"
          />
          </router-link>
        </a>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <template>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Chat</a>
            </li>
            <li class="nav-item active">
              <router-link to="/FAQ" class="nav-link">FAQ</router-link>
            </li>
            <li class="nav-item active" v-if="user.loggedIn==true">
              <a class="nav-link" href="#">Profil</a>
            </li>
            <!-- <template>
              <li class="nav-item active">
               <a class="nav-link" href="#/Login">Se connecter</a>
             </li>
             <li class="nav-item active">
               <a class="nav-link" href="#/Register">S'enregistrer</a>
             </li>
            </template> -->
          </ul>
          </template>
        </div>
      </div>
    </nav>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>

<style>

#logo {
  text-align: left;
}
.navbar{
  padding: .8rem;
  }
  
.navbar-nav li {
  padding-right: 20px;
}

.nav-link {
  font-size: 1.1em !important;
}


</style>