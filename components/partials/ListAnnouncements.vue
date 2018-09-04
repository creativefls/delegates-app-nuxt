<template>
  <v-layout column justify-center align-center>
    <v-flex
      v-for="pengumuman in pengumumans"
      :key="pengumuman.title"
      xs12
      sm8
      md6>
      <v-card
        height="175px">
        <h3 class="font-weight-bold font-weight-black" style="font-size:16px;padding-left:10px;padding-top:10px;padding-bottom:0px">{{ pengumuman.title }}</h3>
        <v-container fluid grid-list-lg>
          <v-layout>
            <v-flex xs3>
              <img
                :src="pengumuman.image"
                height="90px"
                class="img-berita"
              >
            </v-flex>
            <v-flex xs9>
              <v-card-text style="padding-right: 0; padding-top:0px; padding-bottom:0px">
                {{ pengumuman.beritaSingkat }} ...
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" outline nuxt to="/pengumuman/detail">Detail</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <br>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
   data () {
    return {
      pengumumans: [
        {
          title: 'Jarak ATM terdekat - 83 m away',
          image: 'https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg',
          beritaSingkat: 'Kamu bisa isi saldo GO-PAY di sana. ATM Bank Mandiri Mpu Tantular ',
          beritaLengkap: 'Yeee Liburrr !! ds dvsd vdsvds vds vsv dsv dsvds vds vsd vdsv dsv d sdvs dsvds vds vdsv dsvdsvdsvds vds vdsv dsvds vsd vdsv ds'
        },
        {
          title: 'Besok Gajadi Libur !!!',
          image: '/pembicara/edu_pembicara1.png',
          beritaSingkat: 'Yaaah GAJADI Liburrr !! ascsa sasacsa',
          beritaLengkap: 'Yaaah GAJADI Liburrr !! sdvds vdsv dsvds vsd vsdvsdvds vds vds vdsv dsvdsvsv sd vds vds vds vds vds vds vds vsdsdv sdvdsvsv dsvdsvvd sdvsd vsdvsdvds vdsvdsvds vsdvdsv dsv dsvdsvdsvds vdssdds vvsv ds',
        },
        {
          title: 'Njajal',
          image: '/acara/ideation_lab.png',
          beritaSingkat: 'Vuetify is a progressive askc scACA khkhkkk kgkgg kgkg',
          beritaLengkap: 'Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications. '
        },
      ]
    }
  },
}
</script>

<style lang="stylus">
.img-berita
  max-width 75px
</style>
