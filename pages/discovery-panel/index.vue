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
                <v-chip small label> {{ infoClass[kelas.keyName] }} / 24 </v-chip>
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
      infoClass: {},
      kelas: [
        {
          namaKelas: 'Design Thinking',
          keyName: 'designThinking'
        },
        {
          namaKelas: 'Virtual Collaboration',
          keyName: 'virtualCollaboration'
        },
        {
          namaKelas: 'Personal Branding',
          keyName: 'personalBranding'
        },
        {
          namaKelas: 'People Management',
          keyName: 'peopleManagement'
        },
        {
          namaKelas: 'Digital Marketing',
          keyName: 'digitalMarketing'
        },
        {
          namaKelas: 'Emotional Intelligence',
          keyName: 'emotionalIntelligence'
        },
        {
          namaKelas: 'Cultural Intelligence',
          keyName: 'culturalIntelligence'
        },
        {
          namaKelas: 'Judgement and Decision Making',
          keyName: 'judgement'
        },
        {
          namaKelas: 'Financial Planning',
          keyName: 'financial'
        },
        {
          namaKelas: 'Negotiation',
          keyName: 'negotiation'
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
        this.infoClass = res
        this.selectedClass = res.myClass
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
