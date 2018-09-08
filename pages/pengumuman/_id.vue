<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <h3 class="font-weight-bold font-weight-black text-xs-center title py-4" style="font-size:16px;padding-left:10px;padding-top:10px;padding-bottom:0px">
          {{ announcement.title }}
        </h3>
        <hr class="white">
          <v-container grid-list-lg>
            <v-layout>
              <v-flex class="text-xs-center">
                <img
                  src="https://webtrucks.info/wp-content/uploads/announcement-management-system-capable-capture-announcements.png"
                  class="img-beritaFull"
                >
                <v-card-text class="text-xs-left" style="padding:0px">
                  <br>
                  <p>{{ announcement.content }}</p>
                  <v-divider></v-divider>
                  <p v-for="(link, index) in announcement.links" :key="index">
                    <v-icon left>link</v-icon> <a :href="link" class="ml-2">{{ link }}</a>
                  </p>
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
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      announcement: {}
    }
  },
  methods: {
    ...mapActions({
      notify: 'notify',
      getAnnouncementById: 'announcement/getAnnouncementById'
    }),
    getAnnouncement () {
      this.getAnnouncementById(this.$route.params.id).then(res => {
        this.announcement = res
      }).catch(err => {
        this.notify({ type: 'error', message: err.message });
      })
    }
  },
  mounted () {
    this.getAnnouncement()
  }
}
</script>
<style lang="stylus">
.img-beritaFull
  max-width 250px
</style>
