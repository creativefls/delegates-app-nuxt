<template>
  <v-layout>
    <v-card>
      <v-card-text>
        <v-toolbar flat dark color="primary">
          <v-select
            class="mt-2"
            v-model="filterRoom"
            :items="roomLists"
            item-text="text"
            item-value="value"
            label="Solo field"
            solo-inverted
          ></v-select>
        </v-toolbar>
        <v-layout v-if="loading" justify-center class="py-5">
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-layout>

        <v-list v-else two-line>
          <template v-for="(item, index) in items">
            <v-list-tile
              :key="item.id"
              avatar
            >
              <!-- ripple -->
              <v-list-tile-content>
                <v-list-tile-title>{{ item.fullname }}</v-list-tile-title>
                <v-list-tile-sub-title style="text-transform: capitalize;">{{ item.city.toLowerCase() }}</v-list-tile-sub-title>
              </v-list-tile-content>

              <!-- <v-list-tile-action>
                <v-list-tile-action-text>{{ item.roomFirst }}</v-list-tile-action-text>
              </v-list-tile-action> -->

            </v-list-tile>
            <v-divider
              v-if="index + 1 < items.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: false,
      filterRoom: 'Human Capital',
      roomLists: [
        { text: 'Human Capital', value: 'Human Capital' },
        { text: 'Education', value: 'Education' },
        { text: 'Digital', value: 'Digital' },
        { text: 'Urban Planning', value: 'Urban Planning' },
        { text: 'Entrepreneurship', value: 'Entrepreneurship' },
        { text: 'Poverty', value: 'Poverty' },
      ],
      items: []
    }
  },
  watch: {
    filterRoom (val) {
      this.fetchDelegates()
    }
  },
  methods: {
    ...mapActions({
      getAllDelegates: 'delegates/getAllDelegates',
      notify: 'notify'
    }),
    fetchDelegates () {
      this.loading = true
      this.getAllDelegates({
        room: this.filterRoom
      }).then(response => {
        this.items = response
        this.loading = false
      }).catch(err => {
        this.notify({ type: 'error', message: err.message })
        this.loading = false
      })
    }
  },
  mounted () {
    this.fetchDelegates()
  }
}
</script>
