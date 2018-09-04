<template>
  <v-app>
    <v-toolbar fixed dense app color="white">
      <v-btn
        @click="$router.go(-1)"
        icon
      >
        <v-icon v-html="'chevron_left'"></v-icon>
      </v-btn>
      <!-- <v-toolbar-title v-text="title"></v-toolbar-title> -->
      <v-avatar
        tile
        class="ml-1"
        @click="$router.push('/')"
        size="48px"
        style="cursor: pointer">
        <img
          src="/icon.png"
          alt="FLS 2018"
        >
      </v-avatar>
      <v-spacer></v-spacer>
      <v-btn
        to="/profile"
        icon
      >
        <v-avatar size="32px" style="background-color:white;">
          <img
            :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Antu_im-invisible-user.svg/1024px-Antu_im-invisible-user.svg.png'"
            alt="avatar"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-card height="36px" class="mt-3" flat color="transparent"></v-card>
    <v-snackbar
      :color="notification.type"
      multi-line
      top
      right
      v-model="snackbar">{{ notification.message }}
      <v-btn dark flat @click="TOGGLE_NOTIFICATION">OK</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      title: 'Vuetify.js',
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ]
    }
  },
  computed: {
    ...mapState(['notification']),
    snackbar: {
      get() {
        return this.notification.active;
      },
      set(val) {
        this.TOGGLE_NOTIFICATION();
      }
    },
  },
  methods: {
    ...mapMutations(['TOGGLE_NOTIFICATION'])
  }
}
</script>
