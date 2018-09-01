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
        to="/help"
        icon
      >
        <v-icon>help_outline</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-bottom-nav :value="true" :active.sync="activeNavigation" fixed color="white" height="50">
      <v-btn v-for="(nav, key) in navs" :key="key" :to="nav.path" flat color="primary" :value="nav.route">
        <span>{{ nav.route }}</span>
        <v-icon>{{ nav.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
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
      ],
      activeNavigation: 'recent',
      navs: [
        { route: 'home', path: '/', icon: 'home' },
        { route: 'acara', path: '/acara', icon: 'event' },
        { route: 'pengumuman', path: '/pengumuman', icon: 'notifications' },
        { route: 'profile', path: '/profile', icon: 'account_circle' },
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
