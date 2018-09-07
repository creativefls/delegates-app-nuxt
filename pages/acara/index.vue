<template>
<v-container style="margin-left: -30px">
  <v-layout>
    <v-flex md6>
      <v-layout>
        <timeline timeline-theme="#ffbb00">
          <timeline-title class="pertama mb-4"><div class="headline"><b>HARI PERTAMA</b></div>Sabtu, 8 September 2018</timeline-title>
          <timeline-item
            color="#ffbb00"
            line-color="#ffffff"
            v-for="acara in acara_d1"
            :key="acara.title">
            <v-flex xs12 >
              <v-card style="width: 310px">
                <v-chip @click="openDialogJourney(acara.title)" style="margin-top: -16px; " class="ml-4 py-1 px-3" label color="primary" text-color="white">
                  <div>
                    <v-icon left small class="white--text">event</v-icon>
                    <b style="font-size: 15px">{{ acara.title }}</b>
                  </div>
                </v-chip>
                <v-card-text>
                  <v-container fluid grid-list-lg style="padding:0px">
                    <v-layout row>
                      <v-flex xs3>
                        <div>
                          <img
                            :src="acara.icon"
                            width="55px"
                          >
                        </div>
                      </v-flex>
                      <v-flex xs9>
                        <div style="padding-left: 10px;">
                          <div class="fa fa-black-tie" style="text-align: left; line-height: normal; margin-bottom: 4px;">
                            {{ acara.dresscode }}
                          </div>
                          <div class="fa fa-clock-o" style="text-align: left; line-height: normal; margin-bottom: 4px;">
                            {{ acara.jam }} WIB
                          </div>
                          <div class="fa fa-calendar" style="text-align: left; line-height: normal; margin-bottom: 4px;">
                            {{ acara.tanggal }}
                          </div>
                          <div class="fa fa-map-marker" style="text-align: left;">
                            <a :href="acara.linkLokasi">  {{acara.lokasi }}</a>
                          </div>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-flex>
          </timeline-item>
        </timeline>
      </v-layout>
    </v-flex>
  </v-layout>
  <v-layout>
    <timeline timeline-theme="#ffbb00">
      <timeline-title class="kedua mb-4"><div class="headline"><b>HARI KEDUA</b></div>Minggu, 9 September 2018</timeline-title>
      <timeline-item
        color="#ffbb00"
        line-color="#ffffff"
        v-for="acara in acara_d2"
        :key="acara.title">
        <v-flex xs12 >
          <v-card style="width: 310px">
            <v-chip style="margin-top: -16px; " class="ml-4 py-1 px-3" label color="primary" text-color="white">
              <div>
                <v-icon left small class="white--text">event</v-icon>
                <b style="font-size: 15px">{{ acara.title }}</b>
              </div>
            </v-chip>
            <v-card-text>
              <v-container fluid grid-list-lg style="padding:0px">
                <v-layout row>
                  <v-flex xs3>
                    <div>
                      <img
                        :src="acara.icon"
                        width="55px"
                      >
                    </div>
                  </v-flex>
                  <v-flex xs9>
                    <div style="padding-left: 10px;">
                      <div class="fa fa-black-tie" style="text-align: left; line-height: normal; margin-bottom: 4px;">
                        {{ acara.dresscode }}
                      </div>
                      <div class="fa fa-clock-o" style="text-align: left; line-height: normal; margin-bottom: 4px;">
                        {{ acara.jam }} WIB
                      </div>
                      <div class="fa fa-calendar" style="text-align: left; line-height: normal; margin-bottom: 4px;">
                        {{ acara.tanggal }}
                      </div>
                      <div class="fa fa-map-marker" style="text-align: left;">
                        <a :href="acara.linkLokasi">  {{acara.lokasi }}  </a>
                      </div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </timeline-item>
    </timeline>
  </v-layout>

  <v-dialog v-model="dialog" :persistent="loadingSend" max-width="500" scrollable>
    <v-card>
      <v-card-title class="title pb-0">Katakan sesuatu tentang {{ journey.session }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-text-field
          textarea
          v-model="journey.content"
          label="Katakan..."
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" outline round @click.native="dialog = false">Batal</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" round :loading="loadingSend" @click.native="sendJourney">kirim</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</v-container>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
import { mapActions } from 'vuex'

export default {
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  },
  data () {
    return {
      dialog: false,
      loadingSend: false,
      acara_d1: [
        {
          title: 'Welcoming Session',
          dresscode: 'Signature Tee FLS',
          jam: '07:00 - 10:00',
          tanggal: '8 September 2018',
          lokasi: 'UTC Hotel Semarang',
          icon: '/acara/welcoming_session.png',
          linkLokasi: 'https://goo.gl/maps/SWtNzo5g13o'
        },
        {
          title: 'Ideation Lab',
          dresscode: 'Signature Tee FLS',
          jam: '10:00 - 12.15',
          tanggal: '8 September 2018',
          lokasi: 'UTC Hotel Semarang',
          icon: '/acara/ideation_lab.png',
          linkLokasi: 'https://goo.gl/maps/SWtNzo5g13o'
        },
        {
          title: 'Future Leader in Action',
          dresscode: 'Signature Tee FLS',
          jam: '12:30 - 18:30',
          tanggal: '8 September 2018',
          lokasi: 'UTC Hotel Semarang',
          icon: '/acara/fla.png',
          linkLokasi: 'https://goo.gl/maps/SWtNzo5g13o'
        },
        {
          title: 'Gala Future Leader',
          dresscode: 'Business Attire + Atribut daerah (jika ingin)',
          jam: '18:30 - 22:00',
          tanggal: '8 September 2018',
          lokasi: 'UTC Hotel Semarang',
          icon: '/acara/gala_fl.png',
          linkLokasi: 'https://goo.gl/maps/SWtNzo5g13o'
        }
      ],
      acara_d2: [
        {
          title: 'Discovery Panel',
          dresscode: 'Batik',
          jam: '07:00 - 11:20',
          tanggal: '9 September 2018',
          lokasi: 'Kota Lama',
          icon: '/acara/discovery_panel.png',
          linkLokasi: 'https://goo.gl/maps/tMFmoH1LKXq'
        },
        {
          title: 'Grand Summit',
          dresscode: 'Batik',
          jam: '11:30 - Selesai',
          tanggal: '9 September 2018',
          lokasi: 'Quest Hotel',
          icon: '/acara/grand_summit.png',
          linkLokasi: 'https://goo.gl/maps/zqx7MNK99kt'
        }
      ],
      journey: {
        session: '',
        content: ''
      }
    }
  },
  watch: {
    dialog (val) {
      if (!val) {
        this.journey.session = ''
        this.journey.content = ''
      }
    }
  },
  methods: {
    ...mapActions({
      notify: 'notify',
      createJourney: 'journey/createJourney'
    }),
    openDialogJourney (sessionName) {
      console.log(sessionName);

      this.journey.session = sessionName
      this.dialog = true
    },
    sendJourney () {
      this.loadingSend = true
      this.createJourney(this.journey).then(res => {
        this.notify({ type: 'success', message: 'Terima kasih' });
        this.loadingSend = false
        this.dialog = false
      }).catch(err => {
        this.notify({ type: 'error', message: err.message });
        this.loadingSend = false
      })
    }
  }
}
</script>

<style lang="stylus">
.v-card-timeline
  width 73%
  box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
  &.fls-form-group
    .card__title
      padding-bottom 0
    .card__text
      padding-top 0
  .chip--label
    border-bottom-left-radius inherit
    border-bottom-right-radius inherit
.bg-hero
  // background: url('/images/background-unyu.png') top center no-repeat
  // background-size: cover
  width 100%
  position absolute
  top: 0
  z-index -1

.timeline-title
  color #fff !important
  border 2px solid white
  border-radius 16px
  padding 6px 18px
  &.pertama
    background-color #3883c7
  &.kedua
    background-color #feb34d

.program-content
  font-size 18px
  font-weight 500
</style>
