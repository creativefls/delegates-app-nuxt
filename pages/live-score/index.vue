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
                width="95px"
                :color="score.color">
                    <div class="white--text">
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
  </div>
</template>

<script>
import ListAnnouncements from "@/components/partials/ListAnnouncements";

export default {
  data () {
    return {
      scores: [
        { title: 'KEMENDIGBUD', score: '0',color: 'yellow accent-4' },
        { title: 'Kementerian PUPR', score: '0',color: 'blue' },
        { title: 'Kementerian Pertanian', score: '0',color: 'amber accent-4' },
        { title: 'BEKRAF', score: '0',color: 'brown darken-4' },
        { title: 'Kementerian Ketenagakerjaan', score: '0',color: 'deep-purple accent-4' },
        { title: 'KOMINFO', score: '0',color: 'green darken-3' }
      ]
    }
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