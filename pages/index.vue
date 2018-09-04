<template>
  <div>
    <v-container fluid grid-list-sm class="white">
      <v-layout row wrap>
        <v-flex v-for="(menu, index) in menus" :key="index" xs4 class="text-xs-center my-0 py-0">
          <v-btn icon dark color="primary" fab :to="menu.path">
            <v-icon v-html="menu.icon"></v-icon>
          </v-btn>
          <p>{{ menu.name }}</p>
        </v-flex>
        <v-flex xs4 class="text-xs-center my-0 py-0">
          <v-btn @click="sheet = true" icon dark color="primary" fab>
            <v-icon>apps</v-icon>
          </v-btn>
          <p></p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid class="white mt-3">
      <v-subheader class="px-0">Pengumuman terbaru</v-subheader>
      <list-announcements/>
      <v-layout>
        <v-spacer></v-spacer>
        <v-btn color="primary" outline to="/pengumuman">lihat semua</v-btn>
      </v-layout>
    </v-container>
    <v-bottom-sheet v-model="sheet">
      <v-list>
        <v-subheader>Open in</v-subheader>
        <v-list-tile
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
        >
          <v-list-tile-avatar>
            <v-avatar size="32px" tile>
              <img
                :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                :alt="tile.title"
              >
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>
import ListAnnouncements from "@/components/partials/ListAnnouncements";

export default {
  data () {
    return {
      menus: [
        { name: 'pembicara', icon: 'speaker_notes', path: '/pembicara' },
        { name: 'rangkaian acara', icon: 'event_note', path: '/acara' },
        { name: 'daftar delegates', icon: 'group', path: '/' },
        { name: '', icon: 'help_outline', path: '/help' },
      ],
      sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' }
      ]
    }
  },
  components: { ListAnnouncements }
}
</script>
