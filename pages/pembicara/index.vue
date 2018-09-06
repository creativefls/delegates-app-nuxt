<template>
  <v-container fluid>
    <!-- GRAND SUMMIT -->
    <v-expansion-panel>
        <v-expansion-panel-content>
            <div slot="header">
                <h1 class="Highline red--text" style="font-size: 30px; text-align:center;">                             
                    Grand Summit
                </h1>   
            </div>
            <v-layout 
                justify-center 
                class="fullwidth white--text"
                v-for="pembicara in pembicara_gs" 
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
        </v-expansion-panel-content>            
    </v-expansion-panel>

    <!-- Ideation Lab -->    
    <v-expansion-panel>     
        <v-expansion-panel-content>  
            <div slot="header">
                <h1 class="Highline red--text" style="font-size: 30px; text-align:center;">                             
                    Ideation Lab
                </h1>   
            </div>
            <br style="my-1">   
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
        </v-expansion-panel-content>                        
    </v-expansion-panel>     

    <!-- DISCOVERY PANEL -->    
    <v-expansion-panel>     
        <v-expansion-panel-content>  
            <div slot="header">
                <h1 class="Highline red--text" style="font-size: 30px; text-align:center;">                             
                    Discovery Panel
                </h1>   
            </div>
            <br style="my-1">   
            <v-layout 
                justify-center 
                class="fullwidth white--text"
                v-for="pembicara in pembicara_dp" 
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
        </v-expansion-panel-content>                        
    </v-expansion-panel>  

    <!-- GALA DINNER -->    
    <v-expansion-panel>     
        <v-expansion-panel-content>  
            <div slot="header">
                <h1 class="Highline red--text" style="font-size: 30px; text-align:center;">                             
                    Gala Dinner
                </h1>   
            </div>
            <br style="my-1">   
            <v-layout 
                justify-center 
                class="fullwidth white--text"
                v-for="pembicara in pembicara_gd" 
                :key="pembicara.title"
                >
                    <v-flex md10 text-xs-center>
                        <div class="black--text">
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
        </v-expansion-panel-content>                        
    </v-expansion-panel>                        
  </v-container>
</template>

<script>

export default {
  components: { },
  data () {
    return {
        pembicara_gs: [
            {   
                title: 'Pembicara 1',                
                image: '/pembicara/ga_pembicara1.png',
                name: 'FAYE SIMANJUNTAK',
                description: 'CEO of Asumsi.co dan CFO of Rekreasi.co'
            },
            {
                title: 'Pembicara 2',                
                image: '/pembicara/ga_pembicara2.png',
                name: 'IMAN SJAFEI',
                description: 'Co-Founder Rumah Faye'
            },
        ],
        pembicara_rooms: [
            {
                title: 'Human Capital',
                image: '/pembicara/hc_pembicara1.png',
                name: 'AGUNG BENZHARIE',
                description: 'CEO & Co-Founder Warung Pintar'
            },
            {
                title: 'Poverty',
                image: '/pembicara/pov_pembicara1.png',
                name: 'YOHANES SUGIHTONONUGROHO',
                description: 'CEO & Co-Founder Crowde'
            },
            {
                title: 'Urban Planing',
                image: '/pembicara/up_pembicara1.png',
                name: 'MARCO WIJAYAKUSUMA',
                description: 'Founder dan Direktur RUJAK Center For Urban Studies'
            },
            {
                title: 'Education',
                image: '/pembicara/edu_pembicara1.png',
                name: 'WINASTWAN GORA SWAJATI',
                description: 'Founder Kelase.com'
            },
            {
                title: 'Digital',
                image: '/pembicara/dig_pembicara1.png',
                name: 'TEGUH HARMANDA',
                description: 'CCO Tokocrypto'
            },
            {
                title: 'Entrepreneurship',
                image: '/pembicara/ent_pembicara1.png',
                name: 'RANI SOEBIJANTORO',
                description: 'Co-Founder Bookabuku'
            },
        ],
        pembicara_dp: [
            {
                name: "Istofani Api Diany",
                description: "Founder fitinline.com",
                title: "Design Thinking",
                image: "/pembicara/dpP1_pembicara1.png",
            },
            {
                name: "Regis Machdy",
                description: "Co-Founder Pijar Psikologi",
                title: "Emotional Intelligence",
                image: "/pembicara/dpP1_pembicara2.png",
            },
            {
                name: "Ilik Sasongko",
                description: "Founder Rumah Sasongko",
                title: "Judgement and Decision Making",
                image: "/pembicara/dpP1_pembicara3.png",
            },
            {
                name: "Yoga Muda",
                description: "Founder Loffle.co",
                title: "Digital Marketing",
                image: "/pembicara/dpP1_pembicara4.png",
            },
            {
                name: "Jamal Radifan",
                description: "Project Leader Future Leader Summit 2017",
                title: "People Management",
                image: "/pembicara/dpP2_pembicara1.png",
            },
            {
                name: "Gatot Hendraputra",
                description: "Community Development Co-Working Indonesia",
                title: "Virtual Collaboration",
                image: "/pembicara/dpP2_pembicara2.png",
            },
            {
                name: "Robin Vogelaar",
                description: "Founder Pancake Surfing",
                title: "Financial Planning",
                image: "/pembicara/dpP2_pembicara3.png",
            },
            {
                name: "Adin Hysteria",
                description: "Maker Space/Direktur Grobak Hysteria",
                title: "Cultural Inteligence",
                image: "/pembicara/dpP2_pembicara4.png",
            },
            {
                name: "Amida Yusriana",
                description: "Public Speaking - Personal Branding Trainer",
                title: "Personal Branding",
                image: "/pembicara/dpP2_pembicara5.png",
            },
            {
                name: "Farisa Dian Utami",
                description: "Program Manager Impala Space",
                title: "Negotiation",
                image: "/pembicara/dpP2_pembicara6.png",
            },
        ],
        pembicara_gd: [
            {
                name: "Muhammy Akbar",
                description: "CEO Digimedia.com",
                title: "Speaker Gala Dinne",
                image: "/pembicara/gd_pembicara1.png",
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