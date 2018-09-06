<template>
  <div>
    <v-container fluid grid-list-sm class="white pt-4">
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
      <v-subheader class="px-0 primary--text">Pengumuman terbaru</v-subheader>
      <list-announcements/>
      <v-layout justify-center>
        <v-btn color="primary" outline to="/pengumuman">lihat semua</v-btn>
      </v-layout>
    </v-container>
    <v-bottom-sheet v-model="sheet" lazy>
      <v-list>
        <v-subheader>Aku mau...</v-subheader>
        <v-list-tile
          :disabled="tile.disabled"
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
          :to="tile.path"
        >
          <v-list-tile-avatar>
             <v-badge
              :value="tile.disabled"
              color="warning"
              overlap
            >
              <v-icon v-if="tile.disabled" slot="badge" dark small>timelapse</v-icon>
              <v-avatar size="32px" tile>
                <img
                  :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                  :alt="tile.title"
                >
              </v-avatar>
            </v-badge>
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
        { name: 'Pembicara', icon: 'speaker_notes', path: '/pembicara' },
        { name: 'Rangkaian Acara', icon: 'event_note', path: '/acara' },
        { name: 'Daftar Delegates', icon: 'group', path: '/list-delegates' },
        { name: 'Tentang', icon: 'help_outline', path: '/help' },
      ],
      sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Kelas Discovery Panel', path: '/discovery-panel' , disabled: false },
        { img: 'inbox.png', title: 'Pilih Sarapan', path: '/sarapan'  },
        { img: 'hangouts.png', title: 'Vote', path: '/' , disabled: true },
      ]
    }
  },
  components: { ListAnnouncements }
}
</script>
