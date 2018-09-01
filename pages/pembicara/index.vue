<template>
  <v-container fluid>
    <v-layout justify-center class="white--text">
        <v-flex md10 text-xs-center>
            <div class="black--text"> 
                <h1 class="Highline">
                    Pembicara
                </h1>
                <br class="my-2">
                <img 
                src="http://2018.futureleadersummit.org/images/pembicara1.png"
                width="150px">
                <h1 style="font-size: 24px" class="font-weight-hard">
                    RHENALD KASALI
                    
                </h1>
                <h1 style="font-size: 20px">
                    Praktisi Bisnis; <br>
                    Founder Rumah Perubahan
                </h1>
                <br class="my-2">                
            </div>
        </v-flex>
    </v-layout>
    <v-layout justify-center class="white--text">
        <v-flex md10 text-xs-center>
            <div class="black--text">
                <img 
                src="http://2018.futureleadersummit.org/images/pembicara2.png"
                width="150px">
                <h1 style="font-size: 24px" class="font-weight-hard">
                    ALAMANDA SHANTIKA
                    
                </h1>
                <h1 style="font-size: 20px">
                    Founder Binar Academy
                </h1>
                <br class="my-2">                
            </div>          
        </v-flex>
    </v-layout>    
    <v-layout justify-center class="white--text">
        <v-flex md10 text-xs-center>
            <div class="black--text">
                <img 
                src="http://2018.futureleadersummit.org/images/pembicara3.png"
                width="150px">
                <h1 style="font-size: 24px" class="font-weight-hard">
                    CHRISTIAN RIJANTO
                    
                </h1>
                <h1 style="font-size: 20px">
                    Managing Partner & Founder Ismaya Group 
                </h1>
                <br class="my-2">                
            </div>    
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  components: { },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
}
</script>

<style lang="stylus" scoped>
img.line-barcode {
  width auto
  height 256px
}
.section-insta
  position relative
  background: #2ecc71;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2def7e, #2ecc71);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2def7e, #2ecc71); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

.follow
  padding 40px
.card > *
  display block
  margin 0 auto

.v-flex
  fulls
.bg-primary
  background-color: #1976D2
.bg-secondary
  background-color: #424242
.bg-success
  background-color: #4CAF50

.bg-hero
  // background: url('/images/background-unyu.png') top center no-repeat
  // background-size: cover
  min-width 100vw
  position absolute
  top: 0
  z-index -1

</style>