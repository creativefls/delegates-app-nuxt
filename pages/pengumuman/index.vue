<template>
  <div>
    <list-announcements/>
    <v-btn
      v-if="isAdmin"
      color="primary"
      dark
      fixed
      bottom
      right
      fab
      @click="dialog = true"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" :persistent="loadingSend" max-width="500" scrollable>
      <v-card>
        <v-card-title class="title pb-0">Beri nilai untuk</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-text-field
            v-model="newItem.title"
            label="Judul"
          ></v-text-field>
          <v-text-field
            v-model="newItem.content"
            label="Isi"
          ></v-text-field>
          <v-subheader>lampiran link</v-subheader>
          <v-divider></v-divider>
          <v-text-field
            v-for="(item, index) in newItem.links"
            :key="index"
            v-model="newItem.links[index]"
            :label="'link ' + (index + 1)"
          ></v-text-field>
          <v-btn @click="newItem.links.push('')">add link</v-btn>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" outline round @click.native="dialog = false">Batal</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" round :loading="loadingSend" @click.native="sendAnnouncement">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ListAnnouncements from "@/components/partials/ListAnnouncements";
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      dialog: false,
      loadingSend: false,
      newItem: {
        title: '',
        content: '',
        scope: 'fls2018',
        links: []
      }
    }
  },
  computed: {
    isAdmin () {
      return this.$store.getters['user/isHasRole']('admin')
    }
  },
  methods: {
    ...mapActions({
      createAnnouncement: 'announcement/createAnnouncement'
    }),
    sendAnnouncement () {
      this.loadingSend = true
      this.createAnnouncement(this.newItem).then(res => {
        console.log('asdf', res);
        this.dialog = false
        this.loadingSend = false
      }).catch(err => {
        console.log('eror', err);
        this.loadingSend = false
      })
    }
  },
  components: { ListAnnouncements }
}
</script>
