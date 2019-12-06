<template>
  <div>
    <div class="mt-4" style="margin:20%">
      <b-card>
        <b-card-text>
          <h4>{{ dis_text }}</h4>
          Question posé le {{ dis_date }}
          <span class="marge">Vu {{ dis_seen }} fois</span>
        </b-card-text>
      </b-card>
      <div class="mt-4" v-for="reply in repliesToShow" v-bind:key="reply.id">
        <b-card v-model="repliesToShow">
          <p v-html="reply.text"></p>
          <b-card-text align="left">Auteur : {{ reply.author }} </b-card-text>
        </b-card>
      </div>
      <b-card id="reply">
        <h3>Votre réponse</h3>
        <br />
        <VueTrix
          v-model="my_html"
          save-path="/url/to/save/contents"
          placeholder="Entrez votre réponse ici..."
        ></VueTrix>
        <br />
        <b-button v-on:click="sendReply" variant="info">Envoyer</b-button>
      </b-card>
      <br />
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
  </div>
</template>

<script>
import VueTrix from "vue-trix";
import axios from "axios";

export default {
  components: {
    VueTrix
  },

  data() {
    return {
      dis_id: 0,
      dis_text: "",
      dis_date: "15/08/2017",
      dis_seen: 666,
      rows: 0,
      currentPage: 1,
      my_html: "",
      repliesTable: {},
      repliesToShow: [],
      discussion: {}
    };
  },

  methods: {
    sendReply: function() {
      if (this.my_html != "") {
        axios.post("http://localhost:3000/api/v1/discussion_replies", {
          text: this.my_html,
          dis_id: this.dis_id,
          user_id: 2
        });
        this.$router.go();
      }
    },
    setRepliesTable: function(response) {
      this.repliesTable = response.data;
    },
    show_replies: function() {
      for (let i = 0; i < this.repliesTable.rowCount; i++) {
        this.repliesToShow.push({
          id: this.repliesTable.rows[i].id,
          text: this.repliesTable.rows[i].text,
          dis_id: this.dis_id,
          user_id: 2
        });
      }
    }
  },
  async created() {
    this.dis_id = this.$router.currentRoute.query.id;
    const dis_Table = await axios.get(
      "http://localhost:3000/api/v1/discussions/" + this.dis_id,
      {
        responseType: "json"
      }
    );
    this.dis_text = dis_Table.data.text;
    const Table = await axios.get(
      "http://localhost:3000/api/v1/discussion_replies/" + this.dis_id,
      {
        responseType: "json"
      }
    );

    this.setRepliesTable(Table);
    this.show_replies();

    for (let i = 0; i < this.repliesTable.rowCount; i++) {
      let user_Table = await axios.get(
        "http://localhost:3000/api/v1/utilisateurs/" +
          this.repliesTable.rows[i].user_id,
        {
          responseType: "json"
        }
      );
      Object.defineProperty(this.repliesToShow[i], "author", {
        value: user_Table.data.pseudo
      });
      Object.defineProperty(this.repliesToShow[i], "XP", {
        value: user_Table.data.xp
      });
    }
  }
};
</script>

<style>
.marge {
  margin-left: 2%;
}

.author {
  text-align: left;
  margin-left: 2%;
}
</style>
