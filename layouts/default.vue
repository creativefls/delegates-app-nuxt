<template>
  <v-app>
    <v-toolbar fixed dense app color="white">
      <v-btn
        v-if="$route.path != '/' && $auth.loggedIn"
        @click="$router.go(-1)"
        icon
      >
        <v-icon v-html="'chevron_left'"></v-icon>
      </v-btn>
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
      <v-btn
        v-if="$auth.loggedIn && $auth.user"
        to="/profile"
        icon
      >
        <v-avatar size="32px" style="background-color:white;">
          <img
            :src="$auth.user.info.avatar"
            alt="avatar"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <v-card height="36px" class="mt-3" flat color="transparent"></v-card>
    <v-footer class="justify-center">
      v{{ appVersion }} - Crafted with ❤ by <a href="https://github.com/creativefls">creativefls</a>
    </v-footer>
    <v-snackbar
      :color="notification.type"
      multi-line
      bottom
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
    appVersion () {
      return process.env.version
    },
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
