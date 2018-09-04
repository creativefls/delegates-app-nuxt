<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
            <h3 class="font-weight-bold font-weight-black" style="font-size:16px;padding-left:10px;padding-top:10px;padding-bottom:0px">Pilih kelas yang kamu inginkan :</h3>
            <v-container
            v-for="kelas in kelas"
            :key="kelas.namaKelas"
            fluid grid-list-lg>
                <v-layout>
                    <!-- <v-flex xs3>
                        <img
                        :src="kelas.imgKelas"
                        height="50px"
                        class="img-kelas"
                        >
                    </v-flex> -->
                    <v-flex xs9>
                        <v-card-text style="padding:0px">
                        {{ kelas.namaKelas }}
                        </v-card-text>
                    </v-flex>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="success" small outline:to="kelas.linkTo">Pilih</v-btn>
                    </v-card-actions>
                </v-layout>
                <hr class="white">
            </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
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
  }
}
</script>
<style lang="stylus">
.img-kelas
  max-width 40px
</style>
