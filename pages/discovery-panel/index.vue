<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card v-if="loadingGet" class="pa-5">
        <v-card-text class="pa-5">
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-card-text>
      </v-card>

      <v-card v-else-if="selectedClass" class="pa-5">
        <v-card-text class="text-xs-center">
          <div class="title mb-5">Kamu telah memilih kelas</div>
          <div class="display-2 primary--text">{{ selectedClass ? selectedClass.className : '' }}</div>

        </v-card-text>
      </v-card>

      <v-card v-else>
        <h3 class="font-weight-bold font-weight-black" style="font-size:16px;padding-left:10px;padding-top:10px;padding-bottom:0px">
          Pilih kelas yang kamu inginkan :
        </h3>
        <v-container
          v-for="kelas in kelas"
          :key="kelas.namaKelas"
          fluid grid-list-lg>
          <v-layout>
            <v-flex xs9>
                <v-card-text class="subheading font-weight-bold" style="padding:0px">
                {{ kelas.namaKelas }}
                </v-card-text>
            </v-flex>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" small outline @click="selectThisClass(kelas.namaKelas)">Pilih</v-btn>
            </v-card-actions>
          </v-layout>
          <hr class="white">
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      selectedClass: null,
      loadingGet: false,
      kelas: [
        {
          namaKelas: 'Design Thinking',
          imgKelas: '/acara/discovery_panel.png',
          linkTo: 'https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg'
        },
        {
          namaKelas: 'Virtual Collaboration',
          imgKelas: '/acara/fla.png',
          linkTo: 'https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg'
        },
        {
          namaKelas: 'Personal Branding',
          imgKelas: '/acara/gala_fl.png',
          linkTo: 'https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg'
        },
        {
          namaKelas: 'People Management',
          imgKelas: '/acara/grand_summit.png',
          linkTo: 'https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg'
        },
        {
          namaKelas: 'Digital Marketing',
          imgKelas: '/acara/ideation_lab.png',
          linkTo: 'https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg'
        },
        {
          namaKelas: 'Emotional Intelligence',
          imgKelas: '/acara/welcoming_session.png',
          linkTo: 'https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg'
        },
        {
          namaKelas: 'Cultural Intelligence',
          imgKelas: '/acara/gala_fl.png',
          linkTo: 'https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg'
        },
        {
          namaKelas: 'Judgement and decision-making',
          imgKelas: '/acara/discovery_panel.png',
          linkTo: 'https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg'
        },
        {
          namaKelas: 'Financial Planning',
          imgKelas: '/acara/welcoming_session.png',
          linkTo: 'https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg'
        },
        {
          namaKelas: 'Negotiation',
          imgKelas: '/acara/fla.png',
          linkTo: 'https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg'
        },
      ]
    }
  },
  methods: {
    ...mapActions({
      notify: 'notify',
      getMyClassroom: 'classroom/getMyClassroom',
      selectClassroom: 'classroom/selectClassroom'
    }),
    selectThisClass (className) {
      let confirm = window.confirm('Kamu yakin?')
      if (confirm) {
        this.selectClassroom({ className }).then(res => {
          this.notify({ type: 'success', message: 'Selamat, kamu berhasil memilih kelas' });
          this.getClassroom()
        }).catch(err => {
          let msg = err.message
          if (err.response) msg = err.response.data.message
          this.notify({ type: 'error', message: msg });
        })
      }
    },
    getClassroom () {
      this.loadingGet = true
      this.getMyClassroom().then(res => {
        console.log('kelas', res);
        this.selectedClass = res
        this.loadingGet = false
      }).catch(err => {
        console.log('error kelas', err);
        let msg = err.message
        if (err.response) msg = err.response.data.message
        this.notify({ type: 'error', message: msg });
        this.loadingGet = false
      })
    }
  },
  mounted () {
    this.getClassroom()
  }
}
</script>
<style lang="stylus">
.img-kelas
  max-width 40px
</style>
