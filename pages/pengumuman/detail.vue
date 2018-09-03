<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
          <h3 class="font-weight-bold font-weight-black" style="font-size:16px;padding-left:10px;padding-top:10px;padding-bottom:0px">
              <!-- {{ pengumuman.title }} -->
              <!-- JUDUL -->
              Jarak ATM terdekat - 83 m away
        </h3>
        <hr class="white">
          <v-container fluid grid-list-lg>
          <v-layout>
          <v-flex class="text-xs-center">
            <img
              src="https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg"
              class="img-beritaFull"              
            >
            <v-card-text style="padding-right: 0; padding-top:0px; padding-bottom:0px">
              <!-- {{ pengumuman.beritaLengkap }} -->
              <!-- Isi Berita Lengkap -->
              <p>Pernahkah dimintai nomor rekening bank? Syukur kalau ingat nomornya, bagaimana kalau ternyata lupa? Mau tak mau transaksi yang dilakukan tidak bisa secepat yang diharapkan. Ya, mau bagaimana lagi. Dalam setiap transaksi yang menggunakan fasilitas bank, keberadaan nomor rekening dibutuhkan agar uang bisa segera dipindahkan dari rekening asal ke rekening tujuan.

Sekadar pengingat, nomor rekening bank dimiliki setelah informasi-informasi personal yang diminta bank sebagai syarat untuk menjadi nasabah sudah teregistrasi secara sah di bank tersebut. Dengan kata lain, nomor yang satu ini bersifat pribadi dan penggunaannya mesti diketahui atas sepengetahuan pemiliknya.</p>
            </v-card-text>
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
  components: {
  },
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
  }
}
</script>
<style lang="stylus">
.img-beritaFull
  max-width 250px
</style>
