<template>
  <div>
    <h1 align="center">LIVE SCORE</h1>
    <p align="center">
      <b><i style="color:#772419; font-size:20px;">Future </i></b>
      <b><i style="color:#ada429; font-size:20px;">Leader </i></b>
      <b><i style="font-size:20px;">In </i></b>
      <b><i style="color:#30498e; font-size:20px;">Action</i></b>
    </p>
    <v-layout justify-center>
        <v-flex xs12 sm6>
        <v-card>
            <v-container
            fluid
            grid-list-md
            >
            <v-layout row wrap>
                <v-flex
                v-for="score in scores"
                :key="score.title"
                xs4
                >
                <v-card
                height="95px"
                :color="score.color">
                    <div class="white--text py-1">
                        <div style="text-align:center" class="display-2">{{ score.score }}</div>
                        <div style="font-size:12px;" class="center font-weight-black">{{score.title}}</div>
                    </div>
                </v-card>
                </v-flex>
            </v-layout>
            </v-container>
        </v-card>
        </v-flex>
    </v-layout>
    <v-layout justify-center class="py-5">
      <v-btn @click="loadDataLiveScore" outline color="primary" :loading="loadingReload">reload</v-btn>
    </v-layout>
  </div>
</template>

<script>
import ListAnnouncements from "@/components/partials/ListAnnouncements";
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      loadingReload: false,
      liveScore: {
        mendikbud: 0,
        pupr: 0,
        pertanian: 0,
        bekraf: 0,
        tenagaKerja: 0,
        kominfo: 0
      }
    }
  },
  computed: {
    scores () {
      return [
        { title: 'KEMENDIKBUD', score: this.liveScore.mendikbud, color: 'yellow accent-4' },
        { title: 'Kementerian PUPR', score: this.liveScore.pupr, color: 'blue' },
        { title: 'Kementerian Pertanian', score: this.liveScore.pertanian, color: 'amber accent-4' },
        { title: 'BEKRAF', score: this.liveScore.bekraf, color: 'brown darken-4' },
        { title: 'Kementerian Ketenagakerjaan', score: this.liveScore.tenagaKerja, color: 'deep-purple accent-4' },
        { title: 'KOMINFO', score: this.liveScore.kominfo, color: 'green darken-3' }
      ]
    }
  },
  methods: {
    ...mapActions({
      notify: 'notify',
      getLiveScore: 'liveScore/getLiveScore'
    }),
    loadDataLiveScore () {
      this.loadingReload = true
      this.getLiveScore().then(res => {
        if (res) {
          this.liveScore = res
        }
        this.loadingReload = false
      }).catch(err => {
        this.notify({ type: 'error', message: msg });
        this.loadingReload = false
      })
    }
  },
  mounted () {
    this.loadDataLiveScore()
  },
  components: { ListAnnouncements }
}
</script>

<style lang="stylus">
.card{
     max-width: 100vw;
     padding:0px;
  }
.center
  padding-top 6px
  text-align center
</style>
