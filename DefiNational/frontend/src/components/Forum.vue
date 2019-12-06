<template>
  <div>
    <a href="#/Discussion" class="btn btn-primary">discussion</a>
    <strong>
      <div class="mt-4" v-for="dis in discussionsToShow" v-bind:key="dis.id">
        <b-card v-model="discussionsToShow" style="width:80%; margin-left:10%">
          <router-link :to="'/Discussion?id=' + dis.id"
            ><b-card-text v-html="dis.text">
              {{ dis.text }}
              <br /><br /> </b-card-text
          ></router-link>
          <p class="disc-info">
            15/08/2017
            <span class="marge">Vu {{ dis.seen }}</span>
          </p></b-card
        >
      </div>
    </strong>
    <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        size="sm"
        align="center"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      rows: 0,
      currentPage: 1,
      discussionTable: {},
      discussionsToShow: []
    };
  },
  methods: {
    setDiscussionsTable: function(response) {
      this.discussionsTable = response.data;
    },
    show_Discussions: function() {
      for (let i = 0; i < this.discussionsTable.rowCount; i++) {
        this.discussionsToShow.push({
          id: this.discussionsTable.rows[i].id,
          text: this.discussionsTable.rows[i].text,
          date: this.discussionsTable.rows[i].date,
          seen: this.discussionsTable.rows[i].seen
        });
      }
      console.log(this.discussionsToShow);
    }
  },
  watch: {
    discussionsTable: function() {
      const Table = axios.get("http://localhost:3000/api/v1/discussions", {
        responseType: "json"
      });
      this.setDiscussionsTable(Table);
      this.show_Discussions();
    }
  },
  async created() {
    const Table = await axios.get("http://localhost:3000/api/v1/discussions", {
      responseType: "json"
    });
    this.setDiscussionsTable(Table);
    this.show_Discussions();
  }
};
</script>

<style>
.disc-type {
  text-size-adjust: 10px;
}
</style>
