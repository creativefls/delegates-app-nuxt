<template>
  <v-container fluid>
    <v-layout justify-center class="white--text">
        <v-flex md10 text-xs-center>
            <div class="black--text"> 
                <h1 class="Highline red--text" style="font-size: 35px">
                    Pembicara
                </h1>
                <br class="my-2">
                <img 
                src="/pembicara/ga_pembicara1.png"
                width="150px">
                <h1 style="font-size: 24px" class="font-weight-hard indigo--text">
                    FAYE SIMANJUNTAK
                    
                </h1>
                <h1 style="font-size: 20px">
                    Co-Founder Rumah Faye
                </h1>
                <br class="my-2">                
            </div>
        </v-flex>
    </v-layout>
    <v-layout justify-center class="white--text">
        <v-flex md10 text-xs-center>
            <div class="black--text">
                <img 
                src="/pembicara/ga_pembicara2.png"
                width="150px">
                <h1 style="font-size: 24px" class="font-weight-hard indigo--text">
                    IMAN SJAFEI
                    
                </h1>
                <h1 style="font-size: 20px">
                    CEO of <i>Asumsi.co</i> dan CFO of <i>Rekreasi.co</i>
                </h1>
                <br class="my-3">  
                <h1 class="Highline red--text" style="font-size: 35px">                             
                    Room
                </h1>     
                <br style="my-1">         
            </div>          
        </v-flex>
    </v-layout>
    <v-layout 
        justify-center 
        class="fullwidth white--text"
        v-for="pembicara in pembicara_rooms" 
        :key="pembicara.title"
        >
            <v-flex md10 text-xs-center>
                <div class="black--text">
                    <div class="mb-1 py-1 pink--text">
                        <h1 class="Highline" style="font-size: 30px">{{ pembicara.title }}</h1>
                        <br>
                    </div>
                    <img 
                        class="pembicara" 
                        :src="pembicara.image"
                        width="150px">
                    <h1 style="font-size: 24px" class="font-weight-hard indigo--text">
                        {{ pembicara.name }}
                        
                    </h1>
                    <h1 style="font-size: 20px">
                        {{ pembicara.description }}
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
        pembicara_rooms: [
            {
                title: 'Human Capital',
                image: '/pembicara/hc_pembicara1.png',
                name: 'AGUNG BENZHARIE',
                description: 'CEO & Co-Founder Warung Pintar',
                bgColor: '#3883c7',
                tangan: '/images/background-tangan.png'
            },
            {
                title: 'Poverty',
                image: '/pembicara/pov_pembicara1.png',
                name: 'YOHANES SUGIHTONONUGROHO',
                description: 'CEO & Co-Founder Crowde',
                bgColor: '#FFA726',
                tangan: '/images/background-tangan.png'
            },
            {
                title: 'Urban Planing',
                image: '/pembicara/up_pembicara1.png',
                name: 'MARCO WIJAYAKUSUMA',
                description: 'Founder dan Direktur RUJAK Center For Urban Studies',
                bgColor: '#6D4C41',
                tangan: '/images/background-tangan.png'
            },
            {
                title: 'Education',
                image: '/pembicara/edu_pembicara1.png',
                name: 'WINASTWAN GORA SWAJATI',
                description: 'Founder Kelase.com',
                bgColor: '#FF7043',
                tangan: '/images/background-tangan.png'
            },
            {
                title: 'Digital',
                image: '/pembicara/dig_pembicara1.png',
                name: 'TEGUH HARMANDA',
                description: 'COO Tokocrypto',
                bgColor: '#FFEE58',
                tangan: '/images/background-tangan.png'
            },
            {
                title: 'Entrepreneurship',
                image: '/pembicara/ent_pembicara1.png',
                name: 'RANI SOEBIJANTORO',
                description: 'Co-Founder Bookabuku',
                bgColor: '#69F0AE',
                tangan: ''
            },
        ]
    }
  },
  computed: {
  },
  methods: {
  },
}
</script>

<style lang="stylus" scoped>
html
  font-size: 16px
  overflow-x: hidden
  width: 100%

.fullwidth
  min-width: 100%
  
.container
    padding: 0
    
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