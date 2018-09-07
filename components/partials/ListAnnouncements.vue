<template>
  <v-layout wrap justify-center align-center>
    <v-flex
      v-for="announcement in announcements"
      :key="announcement._id"
      class="px-2"
      md4
      sm6
      xs12>
      <v-card
        height="176px">
        <v-card-title class="pb-0">
          <h3 class="font-weight-medium">{{ announcement.title }}</h3>
        </v-card-title>
        <v-container fluid grid-list-lg>
          <v-layout>
            <v-flex xs4>
              <img
                src="https://webtrucks.info/wp-content/uploads/announcement-management-system-capable-capture-announcements.png"
                class="img-berita"
              >
            </v-flex>
            <v-flex xs8>
              <v-card-text class="pa-0">
                {{ announcement.content.substr(0,60) }} ...
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn small color="success" outline nuxt to="/pengumuman/detail">Detail</v-btn>
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
  props: {
    items: Array,
    partial: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    announcements () {
      return this.partial ? this.items.slice(0,3) : this.items
    }
  }
}
</script>

<style lang="stylus">
.img-berita
  max-width 100%
  max-height 90px
</style>
