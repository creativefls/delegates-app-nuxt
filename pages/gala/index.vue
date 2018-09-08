<template>
  <div class="mt-2">
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <v-card v-if="loadingGet" class="pa-5">
          <v-card-text class="pa-5">
            <v-progress-circular
              :size="50"
              color="primary"
              indeterminate
            ></v-progress-circular>
          </v-card-text>
        </v-card>

        <v-card v-else class="pa-5">
          <v-card-text class="text-xs-center">
            <div class="title mb-4">Find Your Table</div>
            <v-badge
              color="warning"
              overlap
              bottom >
              <span slot="badge">{{ tableNumber }}</span>
              <v-avatar tile>
                <v-icon size="68px" color="info">local_dining</v-icon>
              </v-avatar>
            </v-badge>

            <v-divider class="my-4"></v-divider>

            <div class="title mb-4">Find Your Buddy</div>
            <v-badge
              color="warning"
              overlap
              bottom >
              <span slot="badge">{{ buddyNumber }}</span>
              <v-avatar tile>
                <v-icon size="68px" color="info">help</v-icon>
              </v-avatar>
            </v-badge>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

let apiUrl = 'https://backend.futureleadersummit.org'

export default {
  data () {
    return {
      loadingGet: true,
      buddyNumber: 0,
      tableNumber: 0
    }
  },
  methods: {
    ...mapActions({
      notify: 'notify'
    }),
    getMyDdelegateData () {
      this.loadingGet = true
      this.$axios.$get(apiUrl + '/api/delegate').then(res => {
        this.loadingGet = false
        if(res) {
          console.log('dele', res);
          this.buddyNumber = res.buddyNumber
          this.tableNumber = res.tableNumber
        }
      }).catch(err => {
        let msg = err.message
        if (err.response) msg = err.response.data.message
        this.notify({ type: 'error', message: msg });
        this.loadingGet = false
      })
    }
  },
  created () {
    this.getMyDdelegateData()
  }
}
</script>
