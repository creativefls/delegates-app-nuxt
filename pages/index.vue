<template>
  <div>
    <v-container fluid grid-list-sm class="white">
      <v-layout row wrap>
        <v-flex v-for="(menu, index) in menus" :key="index" xs4 class="text-xs-center my-0 py-0">
          <v-btn icon dark color="primary" fab>
            <v-icon v-html="menu.icon"></v-icon>
          </v-btn>
          <p>{{ menu.name }}</p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid class="white mt-3">
      <v-subheader>Pengumuman terbaru</v-subheader>
      <list-announcements/>
      <v-layout>
        <v-spacer></v-spacer>
        <v-btn color="primary" outline>lihat semua</v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ListAnnouncements from "@/components/partials/ListAnnouncements";

export default {
  data () {
    return {
      menus: [
        { name: 'discovery panel', icon: 'assignment', path: '' },
        { name: 'makanan', icon: 'assignment', path: '' },
        { name: 'vote', icon: 'assignment', path: '' },
        { name: 'discovery panel', icon: 'assignment', path: '' },
        { name: 'discovery panel', icon: 'assignment', path: '' },
      ]
    }
  },
  components: { ListAnnouncements }
}
</script>
