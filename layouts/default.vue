<template>
  <v-app>
    <v-toolbar dark fixed dense app color="primary">
      <v-btn
        icon
      >
        <v-icon v-html="'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
      >
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-bottom-nav :value="true" :active.sync="activeNavigation" fixed color="white" height="50">
      <v-btn v-for="(nav, key) in navs" :key="key" :to="nav.path" flat color="blue lighten-1" :value="nav.route">
        <v-icon>{{ nav.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
    <v-card height="36px" class="mt-3" flat color="transparent"></v-card>
  </v-app>
</template>

<script>
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
          { route: 'pengumuman', path: '/pengumuman', icon: 'history' },
          { route: 'profile', path: '/profile', icon: 'account_circle' },
        ]
      }
    }
  }
</script>
