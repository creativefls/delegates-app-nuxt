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

              <v-expansion-panel>
                <v-expansion-panel-content>
                  <div slot="header"><v-icon>info</v-icon></div>
                  <v-card>
                    <v-card-text>{{ kelas.detail }}</v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
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
          keyName: 'designThinking',
          detail: 'Design thinking adalah proses menciptakan ide-ide baru dan inovatif yang dapat memecahkan masalah. Hal ini tidak terbatas pada industri atau bidang keahlian tertentu.'
        },
        {
          namaKelas: 'Virtual Collaboration',
          keyName: 'virtualCollaboration',
          detail: 'Virtual collaboration adalah metode kolaborasi antara anggota tim virtual yang dilakukan melalui komunikasi yang dimediasi teknologi. Kolaborasi virtual mengikuti proses yang sama dengan kolaborasi, tetapi pihak yang terlibat dalam kolaborasi virtual tidak berinteraksi secara fisik dan berkomunikasi secara eksklusif melalui saluran teknologi. Tim terdistribusi menggunakan kolaborasi virtual untuk mensimulasikan informasi transfer yang hadir dalam pertemuan tatap muka, berkomunikasi secara virtual melalui sarana verbal, visual, tertulis, dan digital.'          
        },
        {
          namaKelas: 'Personal Branding',
          keyName: 'personalBranding',
          detail: 'Personal branding adalah sebuah cara memasarkan diri atau imej kita secara individu. Jika sebelumnya praktek "memasarkan diri dan karier" lebih berdasarkan pada teknik manajemen self-help improvement, personal branding adalah konsep yang lebih menekankan bahwa kesuksesan datang dari self-packaging.'          
        },
        {
          namaKelas: 'People Management',
          keyName: 'peopleManagement',
          detail: 'People management adalah tentang mengelola orang. People management adalah bagian dari manajemen sumber daya manusia, yang berhubungan dengan isu-isu strategis, keuangan dan kebijakan.'                    
        },
        {
          namaKelas: 'Digital Marketing',
          keyName: 'digitalMarketing',
          detail: 'Digital marketing adalah suatu usaha untuk mempromosikan sebuah merek dengan menggunakan media digital yang dapat menjangkau konsumen secara tepat waktu, pribadi, dan relevan. Tipe pemasaran digital mencakup banyak teknik dan praktik yang terkandung dalam kategori pemasaran internet.'                    
        },
        {
          namaKelas: 'Emotional Intelligence',
          keyName: 'emotionalIntelligence',
          detail: 'Emotional intelligence adalah kemampuan untuk mengidentifikasi dan mengelola emosi Anda sendiri dan emosi orang lain. Umumnya dikatakan mencakup tiga keterampilan: kesadaran emosional kemampuan untuk memanfaatkan emosi dan menerapkannya pada tugas-tugas seperti berpikir dan memecahkan masalah; dan kemampuan untuk mengelola emosi, yang termasuk mengatur emosi Anda sendiri dan menyemangati atau menenangkan orang lain.'                    
        },
        {
          namaKelas: 'Cultural Intelligence',
          keyName: 'culturalIntelligence',
          detail: 'Cultural intelligence adalah ketrampilan yang makin penting dalam dunia bisnis saat ini. Dunia makin “datar” dan dengan mudah kita terhubung dengan siapapun di manapun. Tak dapat dihindari, orang bekerja dan hidup dalam komunitas multikultural. Kita akan makin sering berhadapan dengan orang dari ras, budaya dan latar belakang yang berbeda. Dalam situasi demikian, butuh serangkaian perspektif, pengetahuan dan ketrampilan mengenali perbedaaan budaya agar dapat memahami dan beradaptasi dengan mulus dalam berbagai situasi.'                    
        },
        {
          namaKelas: 'Judgement and Decision Making',
          keyName: 'judgement',
          detail: 'Pengambilan keputusan dapat dianggap sebagai aktivitas pemecahan masalah yang diakhiri oleh solusi yang dianggap optimal, atau setidaknya memuaskan. Oleh karena itu adalah suatu proses yang bisa lebih atau kurang rasional atau tidak rasional dan dapat didasarkan pada pengetahuan dan keyakinan eksplisit atau diam-diam.'                    
        },
        {
          namaKelas: 'Financial Planning',
          keyName: 'financial',
          detail: 'Perencanaan keuangan (Financial Planning) adalah sebuah proses dimana seorang individu berusaha untuk memenuhi tujuan-tujuan finansialnya melalui pengembangan dan implementasi dari sebuah rencana keuangan (financial plan) yang komprehensif.'                    
        },
        {
          namaKelas: 'Negotiation',
          keyName: 'negotiation',
          detail: 'Negosiasi adalah metode yang digunakan orang untuk menyelesaikan perbedaan. Negosiasi adalah proses di mana kompromi atau kesepakatan tercapai sambil menghindari perdebatan dan perselisihan. Keterampilan negosiasi bisa sangat bermanfaat dalam menyelesaikan setiap perbedaan yang muncul antara Anda dan orang lain.'                    
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
