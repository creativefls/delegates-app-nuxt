<template>
  <div>
    <v-container fluid grid-list-sm class="white pt-4">
      <v-layout row wrap>
        <v-flex v-for="(menu, index) in menus" :key="index" xs4 class="text-xs-center my-0 py-0">
          <v-btn icon dark :color="menu.color" fab :to="menu.path">
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

    <v-container v-if="announcements.length > 0" fluid class="white mt-3">
      <v-subheader class="px-0 primary--text">Pengumuman terbaru</v-subheader>
      <list-announcements :items="announcements" partial />
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
                <v-icon :color="tile.color">{{ tile.icon }}</v-icon>
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
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      announcements: [],
      menus: [
        { name: 'Pembicara', icon: 'speaker_notes', color: 'warning', path: '/pembicara' },
        { name: 'Rangkaian Acara', icon: 'event_note', color: 'error', path: '/acara' },
        { name: 'Daftar Delegates', icon: 'group', color: 'info', path: '/list-delegates' },
        { name: 'Tentang', icon: 'help_outline', color: 'secondary', path: '/help' },
      ],
      sheet: false,
      tiles: [
        { icon: 'dashboard', color: 'success', title: 'Kelas Discovery Panel', path: '/discovery-panel' },
        { icon: 'assignment', color: 'info', title: 'Live Score', path: '/live-score' },
        { icon: 'local_bar', color: 'pink', title: 'Gala FLS', path: '/gala' },
        // { icon: 'fastfood', color: 'info', title: 'Pilih Sarapan', path: '/sarapan', disabled: true },
        // { icon: 'how_to_vote', color: 'error', title: 'Vote', path: '/vote' , disabled: true },
      ]
    }
  },
  methods: {
    ...mapActions({
      notify: 'notify',
      getAllAnnouncements: 'announcement/getAllAnnouncements'
    }),
    fetchAnnouncements () {
      this.getAllAnnouncements().then(res => {
        this.announcements = res
      }).catch(err => {
        this.notify({ type: 'error', message: err.message });
      })
    }
  },
  mounted () {
    this.fetchAnnouncements()
  },
  components: { ListAnnouncements }
}
</script>
