<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
            <h3 class="font-weight-bold font-weight-black" style="font-size:16px;padding-left:10px;padding-top:10px;padding-bottom:0px">
                Pilih sarapanmu :
            </h3>
            <v-container  
            v-for="food in foods" 
            :key="food.namaMakanan" 
            fluid grid-list-lg>
                <v-layout>
                    <v-flex xs5>
                        <img
                        :src="food.imgMakanan"
                        height="55px"
                        class=""
                        >
                    </v-flex>
                    <v-flex xs7>
                        <v-card-text class="subheading" style="padding:0px">
                        {{ food.namaMakanan }}
                        </v-card-text>   
                    </v-flex>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="success" small outline:to="food.linkTo">Pilih</v-btn>
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
      foods: [
        {
          namaMakanan: 'Pizza',
          imgMakanan: '/food/pizza.jpg',
          linkTo: 'https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg'
        },
        {
          namaMakanan: 'Pecel Lele',
          imgMakanan: '/food/pecel-lele.jpg',
          linkTo: 'https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg'
        },
        {
          namaMakanan: 'Daging',
          imgMakanan: '/food/daging.jpg',
          linkTo: 'https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg'
        },
        {
          namaMakanan: 'Coklat',
          imgMakanan: '/food/coklat.jpg',
          linkTo: 'https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg'
        },
        {
          namaMakanan: 'Jus Alpukat',
          imgMakanan: '/food/jus-alpukat.jpg',
          linkTo: 'https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg'
        },
        {
          namaMakanan: 'Nastar',
          imgMakanan: '/food/nastar.jpg',
          linkTo: 'https://uangindonesia.com/wp-content/uploads/2017/07/memasukkan-PIN-ATM-harus-ditutupi-tangan.jpg'
        },
      ]
    }
  }
}
</script>
<style lang="stylus">
.img-sarapan
  max-width 40px
</style>
